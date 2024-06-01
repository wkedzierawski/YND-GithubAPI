import styled from "styled-components";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeSearchValue } from "../store/features/searchSlice";
import { dictionary } from "../utils/dictionary";
import { clearUsers, updateUsers } from "../store/features/apiSlice";
import { useRef } from "react";
import { serachUsersLimit } from "../utils/consts";
import { GithubAPI } from "../api/githubApi";

export const Form = () => {
  const searchRef = useRef<HTMLInputElement>(null);

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

    searchRef.current?.blur();

    if (!searchValue) {
      dispatch(clearUsers());
      return;
    }

    GithubAPI.searchUsers(searchValue, serachUsersLimit).then(
      ({ users, username }) => {
        dispatch(updateUsers({ users, username }));
      }
    );
  };

  return (
    <Container onSubmit={onSubmit}>
      <Search
        placeholder={dictionary.SEARCH_INPUT_PLACEHOLDER}
        value={searchValue}
        onValueChange={onValueChange}
        ref={searchRef}
      />
      <Button text={dictionary.SEARCH_BUTTON} type="submit" />
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
