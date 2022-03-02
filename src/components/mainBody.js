import React from "react";
import { Div, Paragraph, Main } from "../styles/mainBody";

// import pic from "../images/pic.jpeg";
const mainBody = () => (
  <Main>
    <Div>Welcome to WIL'S family !</Div>;
    <Paragraph>
      Wits Innovation Lab is the hub of innovative technology that helps you
      create solutions, products and services for businesses big and small.
    </Paragraph>
    {/* <Img src={pic} alt="pic" />; */}
  </Main>
);

export default mainBody;
