import Calculator from "./pages/Calculator";
import styled from "styled-components";

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 880px;
`;

function App() {
  return (
    <Main>
      <Calculator />
    </Main>
  );
}

export default App;
