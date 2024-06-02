import styled from "styled-components";
import { blinkingAnimation } from "../utils/animations";
import { branding } from "../utils/branding";
import { Icon } from "./Icon";
import { getTextEllipsis } from "../utils/utils.styles";
import { GithubRepository } from "../api/GithubApi.types";

type Props = {
  repository: GithubRepository;
};

export const RepositoryInfo = ({ repository }: Props) => {
  return (
    <Container>
      <LeftContainer>
        <Title>{repository.name}</Title>
        <Description>{repository.description}</Description>
      </LeftContainer>
      <RightContainer>
        <p>{repository.stargazers_count}</p>
        <Icon name="Star" />
      </RightContainer>
    </Container>
  );
};

export const RepositoryInfoPlaceholder = () => {
  return <PlaceholderContainer />;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  gap: 5px;
  padding: 10px 20px;
  background-color: ${branding.repositoryInfoBackgroundColor};
`;

const PlaceholderContainer = styled(Container)`
  animation: ${blinkingAnimation} 1200ms ease-in-out alternate infinite;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
  align-items: center;
  font-weight: 600;
`;

const Title = styled.h3`
  font-weight: 600;
  word-break: break-all;
  ${getTextEllipsis(1)}
`;

const Description = styled.p`
  overflow-wrap: anywhere;
  ${getTextEllipsis(3)}
`;
