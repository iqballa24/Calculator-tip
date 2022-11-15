import styled from "styled-components";

const DisplayNumber = (props: { total: number }) => {
  const totalOfNumber = props.total.toFixed(2);
  return (
    <Wrapper>
      <strong>${totalOfNumber}</strong>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  strong {
    color: var(--strong__cyan);
    font-size: 38px;
  }
`;

export default DisplayNumber;
