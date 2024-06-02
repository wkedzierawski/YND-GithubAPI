import styled from "styled-components";
import { branding } from "../utils/branding";
import { useState } from "react";
import { If } from "../common/If";
import { Icon } from "./Icon";
import { GithubUser } from "../api/GithubApi.types";
import { getTextEllipsis } from "../utils/utils.styles";
import { UserRepositories } from "./UserRepositories";

type Props = {
  item: GithubUser;
};

export const User = ({ item }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpandedInfo = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Container>
      <BasicInfo onClick={toggleExpandedInfo}>
        <Username>{item.login}</Username>
        <Icon name="ArrowDown" $rotated={expanded} />
      </BasicInfo>
      <If condition={expanded}>
        <ExtendedInfo>
          <UserRepositories username={item.login} />
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
  -webkit-tap-highlight-color: transparent;
`;

const Username = styled.p`
  word-break: break-all;
  ${getTextEllipsis(1)}
`;

const ExtendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  margin: 10px 0px 0px 30px;
`;
