import styled from "styled-components";

import Wood from "../images/wood.jpeg";

const Main = styled.div`
  background-image: url(${Wood});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Div = styled.div`
  font-size: 100px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 200px;
  /* padding-top: 250px; */
  color: navy;
  text-shadow: 8px 8px 10px white;
  padding-top: 50px;
`;
const Paragraph = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  /* padding-top: 250px; */
  height: 20vh;
  font-size: 70px;
  color: black;
  text-shadow: 4px 4px 8px white;
  padding-left: 50px;
`;
const Img = styled.img`
  width: 500px;
  height: 300px;
  padding-left: 650px;
`;

export { Div, Paragraph, Main, Img };
