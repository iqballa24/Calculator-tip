import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Column,
  Wrapper,
  Label,
  Section,
} from "../components/CommonUI/Style";
import { selectOption } from "../constant/selectOption";

import Card from "../components/Card";
import DisplayTip from "../components/DisplayTip";
import InputNumber from "../components/InputNumber";
import RadioButton from "../components/TipButton";

const Calculator = () => {
  const dataSelectOption = useMemo(() => selectOption, []);
  const totalBill = useSelector((state) => console.log(state));

  const onChangeValueBill = (val: number) => {
    console.log(val);
  };

  return (
    <Wrapper>
      <Header>
        <h1>
          spli
          <br />
          tter
        </h1>
      </Header>
      <Card>
        <Section>
          <Column>
            <Label>Bill</Label>
            <InputNumber
              id="bill"
              name="bill"
              className={""}
              onChangeValueBill={onChangeValueBill}
            />
          </Column>
          <Column>
            <Label>Select Tip %</Label>
            <RadioButton options={dataSelectOption} />
          </Column>
          <Column>
            <Label>Number of People</Label>
            <InputNumber
              id="bill"
              name="bill"
              className={""}
              onChangeValueBill={onChangeValueBill}
            />
          </Column>
        </Section>
        <Section>
          <DisplayTip />
        </Section>
      </Card>
    </Wrapper>
  );
};

export default Calculator;
