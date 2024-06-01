import styled from "styled-components";
import { Form } from "./Form";
import { Results } from "./Results";
import { minDesktopWidth } from "../utils/consts";

export const GithubSearch = () => {
  return (
    <Container>
      <Form />
      <Results />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  background-color: white;
  padding: 15px;
  gap: 20px;
  height: 100%;
  @media (min-width: ${minDesktopWidth}px) {
    margin: 20px 0px;
    box-shadow: 0px 0px 20px 0px #505050;
  }
`;
