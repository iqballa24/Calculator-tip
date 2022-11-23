import Button from "../Button";
import styled from "styled-components";
import DisplayRow from "./DisplayRow";
import DisplayText from "./DisplayText";
import DisplayNumber from "./DisplayNumber";

const DisplayTip = (props: {
  tipAmount: number;
  total: number;
  onReset: () => void;
}) => {
  const totalIsEmpty = props.total === 0;
  return (
    <WrapperDisplayTip>
      <DisplayRow>
        <DisplayText title="Tip Amount" text="/ person" />
        <DisplayNumber total={props.tipAmount} />
      </DisplayRow>
      <DisplayRow>
        <DisplayText title="Total" text="/ person" />
        <DisplayNumber total={props.total} />
      </DisplayRow>
      <Button primary onReset={props.onReset} disabled={totalIsEmpty} />
    </WrapperDisplayTip>
  );
};

const WrapperDisplayTip = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--very__dark__cyan);
  border-radius: 15px;
  padding: 20px;
  height: 100%;
`;

export default DisplayTip;
