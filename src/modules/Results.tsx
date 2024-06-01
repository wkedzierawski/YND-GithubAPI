import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { branding } from "../utils/branding";
import { dictionary } from "../utils/dictionary";
import { useMemo } from "react";
import { User } from "../components/User";
import { If } from "../common/If";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const ResultsFor = styled.p`
  width: 100%;
  display: flex;
  color: ${branding.tertiaryColor};
`;

export const Results = () => {
  const { users, username } = useAppSelector((state) => state.api);

  const renderUsers = useMemo(
    () => users.map((item) => <User key={item.id} item={item} />),
    [users]
  );

  return (
    <Container>
      <If condition={!!username}>
        <ResultsFor>
          {dictionary.RESULTS_FOR}"{username}"
        </ResultsFor>
      </If>

      {renderUsers}
    </Container>
  );
};
