import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    text-transform: uppercase;
    color: var(--dark__grayish__cyan);
    font-size: 24px;
    letter-spacing: 0.4rem;
  }
`;

const Label = styled.label`
  color: var(--dark__grayish__cyan);
  font-size: 18px;
  padding-bottom: 10px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8px;

  @media (min-width: 768px) {
    padding: 15px;
  }
`;

export { Wrapper, Column, Header, Label, Section };
