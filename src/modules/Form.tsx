import styled from "styled-components";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeSearchValue } from "../store/features/searchSlice";
import { dictionary } from "../utils/dictionary";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = () => {
  const searchValue = useAppSelector((state) => state.serach.searchValue);

  const dispatch = useAppDispatch();

  const onValueChange = (value: string) => {
    dispatch(changeSearchValue(value));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={onSubmit}>
      <Search
        placeholder={dictionary.SEARCH_INPUT_PLACEHOLDER}
        value={searchValue}
        onValueChange={onValueChange}
      />
      <Button text={dictionary.SEARCH_BUTTON} type="submit" />
    </Container>
  );
};
