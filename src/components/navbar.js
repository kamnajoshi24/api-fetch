import React from "react";
import { MainContainer, Navitems, Li, Link } from "../styles/navbar";

function Navbar() {
  return (
    <MainContainer>
      <Navitems>
        <Li>
          <Link href="/">Home</Link>
        </Li>
        <Li>
          <Link href="/contact">Contact</Link>
        </Li>
        <Li>
          <Link href="/about">About Us</Link>
        </Li>
        <Li>
          <Link href="/table">Table</Link>
        </Li>
        
      </Navitems>
    </MainContainer>
  );
}

export default Navbar;
