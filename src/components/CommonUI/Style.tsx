import styled from "styled-components";

const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
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

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 880px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 2.4rem;
  p {
    color: var(--grayish__cyan);
    font-size: 12px;
    a {
      color: var(--very__dark__cyan);
      &:hover {
        color: var(--strong__cyan);
      }
    }
  }
`;

export { Column, Header, Label, Section, Main, Footer };
