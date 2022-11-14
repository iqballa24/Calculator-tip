import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  font-size: 24px;
  outline: none;
  border-radius: 4px;
  color: var(--very__dark__cyan);
  background-color: var(--very__light__grayish__cyan);
  padding: 12px;
  text-align: right;
  font-weight: 700;

  #bill {
    background-image: url(/public/icon-dollar.svg);
    background-repeat: no-repeat;
    background-position-x: 5%;
    background-position-y: center;
  }
  #number_people {
    background-image: url(/public/icon-person.svg);
    background-repeat: no-repeat;
    background-position-x: 5%;
    background-position-y: center;
  }
`;

const InputNumber = (props: {
  id: string | undefined;
  name: string | undefined;
  className: any;
  onChangeValueBill: any;
}) => {
  const onChangeHandler = (e: any) => {
    const value = +e.target.value;
    props.onChangeValueBill(value);
  };
  return (
    <Input
      min={0}
      id={props.id}
      name={props.name}
      type="number"
      placeholder="0"
      className={props.className || ""}
      onChange={onChangeHandler}
    />
  );
};

export default React.memo(InputNumber);
