import styled from "styled-components";
import { GithubSearch } from "./modules/GithubSearch";
import { branding } from "./utils/branding";

export const App = () => {
  return (
    <AppContainer>
      <GithubSearch />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${branding.secondaryColor};
`;
