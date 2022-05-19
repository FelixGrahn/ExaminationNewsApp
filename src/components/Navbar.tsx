import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: #7bc17e;
    height: 64px;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: black;
    }
  }
  .navbar-brand {
    font-size: 4px;
    color: white;
    &:hover {
      color: black;
    }
  }

  .navbar-home {
    position: relative;
    font-size: 1.25rem;
    bottom: 5%;
    left: 6%;
  }
  .navbar-categories {
    position: absolute;
    left: 12%;
    top: 11%;
    font-size: 1.25rem;
  }
  .navbar-latest {
    position: absolute;
    left: 22%;
    top: 11%;
    font-size: 1.25rem;
  }
  .navbar-form {
    position: absolute !important;
    top: 16%;
    left: 73%;
    width: 9rem;
  }
  
  .navbar-login {
    font-size: 1.25rem;
    position: absolute;
    left: 87%;
    top: 11%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <div></div>
      <Navbar.Brand href="/" className="navbar-home">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/" className="navbar-categories">
              Categories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="navbar-latest">
              Latest
            </Nav.Link>
          </Nav.Item>
          <Form className="navbar-form">
            <FormControl
              type="text"
              placeholder="Search"
              className="navbar-search"
            />
          </Form>
          <Nav.Item>
            <Nav.Link href="/about" className="navbar-login">
              Log in
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
