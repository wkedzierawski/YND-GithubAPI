import styled from "styled-components";
import { branding } from "../utils/branding";
import { GithubAPI } from "../api/GithubApi";
import { useEffect, useMemo, useState } from "react";
import { RepositoryInfo, RepositoryInfoPlaceholder } from "./RepositoryInfo";
import { If } from "../common/If";
import { useToggle } from "../hooks";
import { Icon } from "./Icon";
import { GithubRepository, GithubUser } from "../api/GithubApi.types";

type Props = {
  item: GithubUser;
};

export const User = ({ item }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [userRepositories, setUserRepositories] = useState<GithubRepository[]>(
    []
  );
  const [loading, startLoading, finishLoading] = useToggle(false);

  const toggleExpandedInfo = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!expanded || userRepositories.length) {
      return;
    }
    startLoading();
    GithubAPI.getUserRepositories(item.login)
      .then(setUserRepositories)
      .finally(finishLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, item.login, userRepositories.length]);

  const repositories = useMemo(
    () =>
      userRepositories.map((repository) => (
        <RepositoryInfo key={repository.id} repository={repository} />
      )),
    [userRepositories]
  );

  return (
    <Container>
      <BasicInfo onClick={toggleExpandedInfo}>
        <p>{item.login}</p>
        <Icon name="ArrowDown" $rotated={expanded} />
      </BasicInfo>
      <If condition={expanded}>
        <ExtendedInfo>
          {loading ? <RepositoryInfoPlaceholder amount={1} /> : repositories}
        </ExtendedInfo>
      </If>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const BasicInfo = styled.div`
  background-color: ${branding.secondaryColor};
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ExtendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  gap: 20px;
  margin: 10px 0px;
`;
