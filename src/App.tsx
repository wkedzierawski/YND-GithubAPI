import styled from "styled-components";
import { GithubSearch } from "./modules/GithubSearch";
import { branding } from "./utils/branding";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${branding.secondaryColor};
`;

const App = () => {
  return (
    <AppContainer>
      <GithubSearch />
    </AppContainer>
  );
};

export default App;
