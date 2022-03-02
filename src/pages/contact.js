import React from "react";
import {
  Main,
  Div,
  Input,
  Button,
  IconContainer,
  Icon,
} from "../styles/Contact";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// import { Button } from "../styles/login";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <container>
      <Navbar></Navbar>

      <Main>
        <Div>Contact us</Div>
        <Input type="text" placeholder="Name" className="name" />
        <Input type="email" placeholder="Email" className="email" />
        <Input type="text" placeholder="message" className="message" />
        <div className="contact">Contact</div>

        <IconContainer>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </IconContainer>
        <Button>contact us</Button>
      </Main>
      <Footer></Footer>
    </container>
  );
};
export default Contact;
