import React from "react";
import { Main, Div, Paragraph, Img } from "../styles/About";
import Us from "../images/us.jpeg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <Main>
      <Navbar></Navbar>
      <Div>
        Welcome to Wits Innovation Lab. We're glad and greatful u are here.
      </Div>
      <Img src={Us} alt="us" />
      <Paragraph>
        We don’t believe in innovation for the sake of innovation. No new idea
        can work if it does not promise value to its customers, and even worse
        off if it doesn’t deliver the value it had promised. Ours is
        market-driven innovation that promises and delivers value.
      </Paragraph>
      <Footer></Footer>
    </Main>
  );
};

export default About;
