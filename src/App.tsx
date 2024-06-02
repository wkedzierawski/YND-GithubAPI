import styled from "styled-components";
import { GithubSearch } from "./modules/GithubSearch";
import { branding } from "./utils/branding";
import { minDesktopWidth } from "./utils/consts";

export const App = () => {
  return (
    <AppContainer>
      <GithubSearch />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${branding.secondaryColor};
  @media (min-width: ${minDesktopWidth}px) {
    align-items: center;
    justify-content: center;
  }
`;
