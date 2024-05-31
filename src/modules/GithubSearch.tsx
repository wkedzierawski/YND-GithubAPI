import styled from "styled-components";
import { Form } from "./Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 720px;
  background-color: white;
  padding: 15px;
`;

export const GithubSearch = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};
