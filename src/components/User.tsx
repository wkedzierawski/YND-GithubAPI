import styled from "styled-components";
import { branding } from "../utils/branding";
import { GithubAPI, GithubRepository, GithubUser } from "../api/GithubApi";
import { ArrowDown } from "../icons/ArrowDown";
import { useEffect, useMemo, useState } from "react";
import { RepositoryInfo, RepositoryInfoPlaceholder } from "./RepositoryInfo";
import { If } from "../common/If";
import { useToggle } from "../hooks";

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
  const [loading, startLoading, finishLoading] = useToggle(false);

  const toggleExpand = () => {
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
    <Container $expanded={expanded}>
      <BasicInfo>
        <p>{item.login}</p>
        <ArrowDown $rotated={expanded} size={20} onClick={toggleExpand} />
      </BasicInfo>
      <If condition={expanded}>
        <ExtendedInfo>
          {loading ? <RepositoryInfoPlaceholder amount={3} /> : repositories}
        </ExtendedInfo>
      </If>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
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
`;

const ExtendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  gap: 20px;
  margin: 10px 0px;
`;
