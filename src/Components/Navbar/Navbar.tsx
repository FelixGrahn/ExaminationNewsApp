import * as React from 'react'
import styled from "styled-components";
import LinkText from '../Link/LinkText';


const NavbarStyling = styled.div`
  background-color: #6bd870;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  top: 0%;
  border: 1rem;
  border-radius: 1px;
`;

const LinkStyling = styled.div`
  justify-content: space-evenly;
  width: 50%;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: white;
  }
`;

const LogoutStyling = styled.div`
  position: absolute;
  width: 30%;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  display: flex;
  left: 40%;
  margin-right: 0.125rem;
  a:hover {
    color: white;
  }
`;

interface props {
    
}




const Navbar = ({}: props) => {
  return (
    <NavbarStyling>
      <LinkStyling>
      <LinkText label={"Home"} urladress={""}/>
      <LinkText label={"Article"} urladress={"Article"}/>
      <LinkText label={"Searchresults"} urladress={"Searchresults"}/>
      </LinkStyling>
      <LogoutStyling>
        <h3>Logout</h3>
      </LogoutStyling>
    </NavbarStyling>
  )
}

export default Navbar
