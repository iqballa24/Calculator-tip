import React, { useState, useMemo, useEffect } from "react";
import unChekedOption from "../../utils/uncheckedOption";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";

const elements = document.getElementsByTagName("input");

interface ItemOptions {
  id: string | number;
  value: number;
}
interface Props {
  options: Array<ItemOptions>;
  onChangeSelectedTip: (e: number) => void;
}

const TipButton: React.FC<Props> = (props) => {
  const selectTip = useSelector((state: any) => state.calculator.selectTip);
  const [customValue, setCustomValue] = useState(0);

  const customInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setCustomValue(value);
    props.onChangeSelectedTip(value);
    unChekedOption(elements);
  };

  const selectOptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    props.onChangeSelectedTip(value);
  };

  const customInputIsEmpty = useMemo(() => {
    return customValue === 0;
  }, [customValue]);

  useEffect(() => {
    if (selectTip === 0) {
      unChekedOption(elements);
      setCustomValue(0);
    }
  }, [selectTip]);

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
          min={0}
        />
      </li>
    </Wrapper>
  );
};

export default React.memo(TipButton);
