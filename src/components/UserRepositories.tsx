import { useMemo } from "react";
import { RepositoryInfo, RepositoryInfoPlaceholder } from "./RepositoryInfo";
import styled from "styled-components";
import { useUserRepositories } from "../api/hooks.api";

type Props = {
  username: string;
};

export const UserRepositories = ({ username }: Props) => {
  const { userRepositories, loading } = useUserRepositories(username);

  const repositories = useMemo(
    () =>
      userRepositories.map((repository) => (
        <RepositoryInfo key={repository.id} repository={repository} />
      )),
    [userRepositories]
  );

  return (
    <Container>
      {loading ? <RepositoryInfoPlaceholder /> : repositories}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;
