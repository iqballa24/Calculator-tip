import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../store/calculator-slice";
import { Column, Label, Section } from "../components/CommonUI/Style";
import { selectOption } from "../constant/selectOption";

import Card from "../components/Card";
import DisplayTip from "../components/DisplayTip";
import InputNumber from "../components/InputNumber";
import RadioButton from "../components/TipButton";

const Calculator = () => {
  const dispatch = useDispatch();
  const dataSelectOption = useMemo(() => selectOption, []);
  const calculatorState = useSelector((state: any) => state.calculator);
  const { inputBill, inputNumberPeople, selectTip, tipAmount, total } =
    calculatorState;

  const numberOfPeopleIsEmpty =
    inputBill !== 0 && selectTip !== 0 && inputNumberPeople === 0;

  console.log(numberOfPeopleIsEmpty);

  const onChangeValueBill = (val: number) => {
    dispatch(calculatorActions.changeInputBill(val));
  };

  const onChangeValuePeople = (val: number) => {
    dispatch(calculatorActions.changeInputPeople(val));
  };

  const onChangeSelectedTip = (val: number) => {
    dispatch(calculatorActions.changeSelectedTip(val));
  };

  const onClickResetHandler = () => [
    dispatch(calculatorActions.resetCalculator()),
  ];

  useEffect(() => {
    console.log("Dispatch will be run");
    dispatch(calculatorActions.calculateTipAmount());
    dispatch(calculatorActions.calculateTotal());
  }, [inputBill, inputNumberPeople, selectTip]);

  return (
    <Card>
      <Section>
        <Column>
          <Label>Bill</Label>
          <InputNumber
            id="bill"
            name="bill"
            className={""}
            onChangeValue={onChangeValueBill}
            value={inputBill}
            invalid={false}
          />
        </Column>
        <Column>
          <Label>Select Tip %</Label>
          <RadioButton
            options={dataSelectOption}
            onChangeSelectedTip={onChangeSelectedTip}
          />
        </Column>
        <Column>
          <Label>Number of People</Label>
          <InputNumber
            id="number_people"
            name="number_people"
            className={""}
            onChangeValue={onChangeValuePeople}
            value={inputNumberPeople}
            invalid={numberOfPeopleIsEmpty}
          />
        </Column>
      </Section>
      <Section>
        <DisplayTip
          tipAmount={tipAmount}
          total={total}
          onReset={onClickResetHandler}
        />
      </Section>
    </Card>
  );
};

export default Calculator;
