import styled from "styled-components";
import { GithubRepository } from "../api/GithubApi";
import { blinkingAnimation } from "../utils/animations";
import { branding } from "../utils/branding";
import { Icon } from "./Icon";
import { getTextEllipsis } from "../utils/utils.styles";

type Props = {
  repository: GithubRepository;
};

type PlaceholderProps = {
  amount: number;
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

export const RepositoryInfoPlaceholder = ({ amount }: PlaceholderProps) => {
  return Array(amount)
    .fill(null)
    .map((_, index) => <PlaceholderContainer key={index} />);
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  gap: 5px;
  padding: 10px 20px;
  margin-left: 30px;
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
  ${getTextEllipsis(3)}
`;
