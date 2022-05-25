import * as React from "react";
import styled from "styled-components";
import LinkText from "../Link/LinkText";

const FooterNavbarStyling = styled.div`
background-color:#67aa69;

width: 99.4%;
height: 5rem;
display: flex;
align-items: center;
bottom: 0%;


position:absolute
left: 0%;
  
`;

const FooterText = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  left: 6%;
  padding-right: 1.25rem;
`;




interface props {}

const Footer = ({}: props) => {
  return (
    <FooterNavbarStyling>
      <FooterText>
        <h3>Contact</h3>
      </FooterText>
      <FooterText>
        <h3>About</h3>
      </FooterText>
      <FooterText>
        <h3>Our Team</h3>
      </FooterText>
      <FooterText>
        <h3>Jobs</h3>
      </FooterText>
    </FooterNavbarStyling>
  );
};

export default Footer;
