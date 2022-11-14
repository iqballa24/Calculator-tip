import styled from "styled-components";

interface Props {
  primary: boolean;
}

const Button = styled.button<Props>`
  font-family: "Space Mono", monospace;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? "var(--strong__cyan)" : "transparent"};
  color: ${(props) =>
    props.primary ? "var(--very__dark__cyan)" : "var(--strong__cyan)"};
  font-weight: 700;
  border: ${(props) => (props.primary ? "none" : "1px solid")};
  border-radius: 4px;
  border-color: var(--strong__cyan);
  text-transform: uppercase;
  font-size: 20px;
  width: 100%;
  padding: 10px;
  margin-top: auto;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--light__grayish__cyan)" : "var(--strong__cyan)"};
    color: var(--very__dark__cyan);
  }
`;

const index = (props: Props) => {
  return <Button primary>reset</Button>;
};

export default index;
