import styled from "styled-components";

const DisplayText = (props: { title: string; text: string }) => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--white);
    font-size: 18px;
  }
  p {
    font-size: 16px;
    color: var(--grayish__cyan);
  }
`;

export default DisplayText;
