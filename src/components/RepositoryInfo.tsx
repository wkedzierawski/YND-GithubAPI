import styled from "styled-components";
import { GithubRepository } from "../api/GithubApi";
import { blinkingAnimation } from "../utils/animations";
import { Star } from "../icons/Star";
import { branding } from "../utils/branding";

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
        {repository.stargazers_count}
        <Star size={20} />
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
  height: fit-content;
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
`;

const Description = styled.p`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
