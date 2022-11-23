import { Fragment } from "react";
import { Header, Main, Footer } from "../CommonUI/Style";

const index: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Fragment>
      <Header>
        <h1>
          spli
          <br />
          tter
        </h1>
      </Header>
      <Main>{props.children}</Main>
      <Footer>
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/iqballa24"
            target="_blank"
          >
            Iqballa24
          </a>
          .
        </p>
      </Footer>
    </Fragment>
  );
};

export default index;
