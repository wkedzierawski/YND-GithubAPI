import styled from "styled-components";
import { branding } from "../utils/branding";
import { GithubAPI, GithubRepository, GithubUser } from "../api/GithubApi";
import { ArrowDown } from "./ArrowDown";
import { useEffect, useMemo, useState } from "react";
import { RepositoryInfo } from "./RepositoryInfo";
import { If } from "../common/If";

type StyledProps = {
  $expanded: boolean;
};

type Props = {
  item: GithubUser;
};

export const User = ({ item }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [userRepositories, setUserRepositories] = useState<GithubRepository[]>(
    []
  );

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!expanded || userRepositories.length) {
      return;
    }

    GithubAPI.getUserRepositories(item.login).then(setUserRepositories);
  }, [expanded, item.login, userRepositories.length]);

  const repositories = useMemo(
    () =>
      userRepositories.map((repository) => (
        <RepositoryInfo key={repository.id} repository={repository} />
      )),
    [userRepositories]
  );

  return (
    <Container $expanded={expanded}>
      <BasicInfo>
        <p>{item.login}</p>
        <ArrowDown $rotated={expanded} size={20} onClick={toggleExpand} />
      </BasicInfo>
      <If condition={expanded}>
        <ExtendedInfo>{repositories}</ExtendedInfo>
      </If>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  width: 100%;
  height: ${(props) => (props.$expanded ? 250 : 50)}px;
  background-color: ${branding.secondaryColor};
  padding: 5px;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px 0 25px;
  transition: 300ms ease-in-out height;
  flex-direction: column;
`;

const BasicInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const ExtendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  gap: 20px;
`;
