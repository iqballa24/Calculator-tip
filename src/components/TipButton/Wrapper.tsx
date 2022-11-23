import styled from "styled-components";

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
    cursor: not-allowed;
    background: var(--light__grayish__cyan);

    &:hover {
      background: var(--light__grayish__cyan);
    }
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

  input:focus {
    outline: 3px solid var(--strong__cyan);
  }
`;

export default Wrapper;
