import styled from "styled-components";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeSearchValue } from "../store/features/searchSlice";
import { dictionary } from "../utils/dictionary";
import { GithubAPI } from "../api/githubApi";
import { updateUsers } from "../store/features/apiSlice";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = () => {
  const searchValue = useAppSelector((state) => state.serach.searchValue);
  const storedUsername = useAppSelector((state) => state.api.username);

  const dispatch = useAppDispatch();

  const onValueChange = (value: string) => {
    dispatch(changeSearchValue(value));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storedUsername === searchValue) {
      return;
    }

    GithubAPI.searchUsers(searchValue).then(({ users, username }) => {
      dispatch(updateUsers({ users, username }));
    });
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
