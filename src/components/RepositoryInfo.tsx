import styled from "styled-components";
import { GithubRepository } from "../api/GithubApi";
import { fadeInAnimation } from "../utils/animations";

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
      <RightContainer>Right</RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 120px;
  animation-delay: 300ms;
  animation: ${fadeInAnimation} 300ms ease;
  gap: 5px;
  border: 2px solid black;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Description = styled.p``;
