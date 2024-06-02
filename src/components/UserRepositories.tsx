import { useMemo } from "react";
import { RepositoryInfo, RepositoryInfoPlaceholder } from "./RepositoryInfo";
import styled from "styled-components";
import { GithubAPI } from "../api/GithubApi";
import { QueryKey } from "../utils/query.types";
import { useQuery } from "@tanstack/react-query";

type Props = {
  username: string;
};

export const UserRepositories = ({ username }: Props) => {
  const { data = [], isLoading } = useQuery({
    queryKey: [QueryKey.USER_REPOSITORIES, username],
    queryFn: () => GithubAPI.getUserRepositories(username),
  });

  const repositories = useMemo(
    () =>
      data.map((repository) => (
        <RepositoryInfo key={repository.id} repository={repository} />
      )),
    [data]
  );

  return (
    <Container>
      {isLoading ? <RepositoryInfoPlaceholder /> : repositories}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;
