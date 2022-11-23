import styled from "styled-components";

interface Props {
  primary?: boolean;
  onReset?: () => void;
  disabled: boolean;
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

  &:disabled {
    background-color: var(--dark__grayish__cyan);
    cursor: not-allowed;

    &:hover {
      background-color: var(--dark__grayish__cyan);
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--light__grayish__cyan)" : "var(--strong__cyan)"};
    color: var(--very__dark__cyan);
  }
`;

const index = (props: Props) => {
  return (
    <Button primary onClick={props.onReset} disabled={props.disabled}>
      reset
    </Button>
  );
};

export default index;
