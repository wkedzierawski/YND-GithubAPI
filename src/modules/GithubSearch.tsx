import styled from "styled-components";
import { Form } from "./Form";
import { Results } from "./Results";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 720px;
  background-color: white;
  padding: 15px;
  gap: 20px;
  margin: 20px 0px;
`;

export const GithubSearch = () => {
  return (
    <Container>
      <Form />
      <Results />
    </Container>
  );
};
