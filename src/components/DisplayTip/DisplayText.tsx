import styled from "styled-components";

const DisplayText = (props: { title: string; text: string }) => {
  return (
    <Wrapper>
      <strong>{props.title}</strong>
      <p>{props.text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--white);
    font-size: 18px;
  }
  p {
    font-size: 16px;
    color: var(--grayish__cyan);
  }
`;

export default DisplayText;
