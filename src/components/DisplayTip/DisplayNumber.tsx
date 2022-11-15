import styled from "styled-components";

const DisplayNumber = (props: { total: number }) => {
  const totalOfNumber = props.total.toFixed(2);
  return (
    <Wrapper>
      <h1>$ {totalOfNumber}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: var(--strong__cyan);
    font-size: 38px;
  }
`;

export default DisplayNumber;
