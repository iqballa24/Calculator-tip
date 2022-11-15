import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
} from "react";
import styled from "styled-components";

const WrapperCard = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  background-color: var(--white);
  border-radius: 15px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  section {
    

    &.display_tip{
        background-color: var(--very__dark__cyan);
        border-radius: 15px;
    }
`;

const Card = (props: {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment;
}) => {
  return <WrapperCard>{props.children}</WrapperCard>;
};

export default Card;
