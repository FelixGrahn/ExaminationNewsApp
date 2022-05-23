import * as React from 'react'
import styled from "styled-components";
import LinkText from '../Link/LinkText';


const NavbarStyling = styled.div`
    background-color: lightgreen;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    top: 0;
`;

const LinkStyling = styled.div`
  justify-content: space-evenly;
    width: 70%;
    display: flex;
`;

const LongoutStyling = styled.div`
    width: 30%;
    justify-content: center;
    display: flex;
`;

interface props {
    
}

const Navbar = ({}: props) => {
  return (
    <NavbarStyling>
      <LinkStyling>
      <LinkText label={"Home"} urladress={""}/>
      <LinkText label={"Article"} urladress={"Article"}/>
      </LinkStyling>
      <LongoutStyling>
        <h3>Logout</h3>
      </LongoutStyling>
    </NavbarStyling>
  )
}

export default Navbar
