import React from "react";
import styled from "styled-components";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  className: string;
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  invalid: boolean;
}

const InputNumber: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {props.invalid && <InvalidText>Can't be zero</InvalidText>}
      <Input
        min={0}
        id={props.id}
        name={props.name}
        type="number"
        placeholder="0"
        className={props.className || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e)}
        value={props.value === 0 ? "" : props.value}
        invalid={props.invalid}
      />
    </React.Fragment>
  );
};

const Input = styled.input<Props>`
  border: none;
  font-size: 24px;
  outline: ${(props) => (props.invalid ? "3px solid red" : "none")};
  border-radius: 4px;
  color: var(--very__dark__cyan);
  background-color: var(--very__light__grayish__cyan);
  padding: 12px;
  text-align: right;
  font-weight: 700;

  &:focus {
    outline: ${(props) =>
      props.invalid ? "3px solid red" : "3px solid var(--strong__cyan)"};
  }

  &#bill {
    background-image: url(/icon-dollar.svg);
    background-repeat: no-repeat;
    background-position-x: 5%;
    background-position-y: center;
  }
  &#number_people {
    background-image: url(/icon-person.svg);
    background-repeat: no-repeat;
    background-position-x: 5%;
    background-position-y: center;
  }
`;

const InvalidText = styled.p`
  position: absolute;
  right: 0;
  top: 5px;
  color: red;
`;

export default React.memo(InputNumber);
