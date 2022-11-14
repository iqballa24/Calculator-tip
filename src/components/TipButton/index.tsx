import React, { useState, useMemo } from "react";
import styled from "styled-components";
import unChekedOption from "../../utils/uncheckedOption";

const elements = document.getElementsByTagName("input");

const TipButton = (props: { options: any }) => {
  const [customValue, setCustomValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);

  const customInputHandler = (e: any) => {
    const value = +e.target.value;
    setCustomValue((prev) => value);
    setSelectedOption((prev) => value);
    unChekedOption(elements);
  };

  const selectOptionHandler = (e: any) => {
    const value = +e.target.value;
    setSelectedOption((prev) => value);
  };

  const customInputIsEmpty = useMemo(() => {
    return customValue === 0;
  }, [customValue]);

  return (
    <Wrapper>
      {props.options.map((item: { id: any; value: number }) => (
        <li key={item.id}>
          <input
            type="radio"
            name="tipSelect"
            id={`select_${item.id}`}
            value={item.value}
            onChange={selectOptionHandler}
            disabled={customInputIsEmpty ? false : true}
          />
          <label htmlFor={`select_${item.id}`}>{item.value}%</label>
        </li>
      ))}
      <li>
        <input
          type="number"
          placeholder="Custom"
          value={customValue === 0 ? "" : customValue}
          onChange={customInputHandler}
        />
      </li>
    </Wrapper>
  );
};

export default React.memo(TipButton);

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0;

  li {
    padding: 5px;
    flex: 1;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: block;
    color: var(--white);
    font-size: 18px;
    background: var(--very__dark__cyan);
    border-radius: 8px;
    padding: 0.7rem 2rem;
    text-align: center;
    position: relative;
  }

  input[type="radio"]:checked ~ label {
    background: var(--strong__cyan);
    color: var(--white);
  }

  input[type="radio"]:disabled ~ label {
    background: var(--light__grayish__cyan);
  }

  input[type="radio"]:hover ~ label {
    background: var(--strong__cyan);
    color: var(--white);
  }

  input[type="number"] {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 18px;
    outline: none;
    border-radius: 4px;
    color: var(--very__dark__cyan);
    background-color: var(--very__light__grayish__cyan);
    text-align: center;
    font-weight: 700;
  }
`;
