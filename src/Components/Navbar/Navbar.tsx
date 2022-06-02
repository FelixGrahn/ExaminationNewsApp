import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import LinkText from "../Link/LinkText";

const NavbarStyling = styled.div`
  position: sticky;
  background-color: #4db159;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  top: 0%;
  border: 1rem;
  border-radius: 1px;
  @media (max-width: 414px) {
    position: fixed;
    width: 100%;
    left: 0px;
    z-index: 1;
  }
`;

const LinkStyling = styled.div`
  justify-content: space-evenly;
  margin-left: 130px;
  margin-right: 330px;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  place-content: space-evenly;
  a:link {
    color: black;
    text-decoration: none;
    font-size: 1.17em;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 414px) {
    position: fixed;
    margin-left: 46px;
    justify-content: space-around;
    z-index: 1;
    /* left: 2%; */
    display: flex;
    /* margin: 2px; det såg inte ut som det behövdes men jag kan ha fel*/
  }
`;

// display: flex;
//     justify-content: center;
//     width: 100%;
//     place-content: space-evenly;

const LogoutStyling = styled.div`
  position: absolute;
  width: 30%;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  display: flex;
  left: 40%;
  margin-right: 0.125rem;
  h3:hover {
    color: white;
  }
  @media (max-width: 414px) {
    position: relative;
    left: 10%;
    display: flex;
    margin-left: auto;
  }
`;

const LogoutButton = styled.button`
  position: absolute;
  cursor: pointer;
  width: 30%;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  background-color: transparent;
  font-size: 1.22rem;
  display: flex;
  left: 74%;
  top: 4%;

  h3:hover {
    color: white;
  }
  @media (max-width: 414px) {
    position: absolute;
    left: 68%;
    top: -84%;
    align-self:center;
    display: flex;
    margin-left: auto;
  }
`;

interface props {}

function Logout() {
  window.localStorage.removeItem("token");
  window.location.replace("http://localhost:3000");
}

const Navbar = ({}: props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLoggedin(true);
    }
  });

  return (
    <NavbarStyling>
      <LinkStyling>
        <LinkText label={"Home"} urladress={""} />
        <LinkText label={"Article"} urladress={"Article"} />
        {isLoggedin ? (
          <LogoutButton
            className="logout-button"
            type="button"
            onClick={Logout}
          >
            <h3>Logout</h3>
          </LogoutButton>
        ) : (
          <LinkText label={"Login"} urladress={"Login"} />
        )}
      </LinkStyling>
      {/*  <LogoutStyling>
        <h3>Logout</h3>
      </LogoutStyling> */}
    </NavbarStyling>
  );
};

export default Navbar;
