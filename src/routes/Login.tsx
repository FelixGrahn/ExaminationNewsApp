import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/Card/ArticleCard";
import CustomHeader from "../Components/Headers/CustomHeader";
import axios from "axios";
import styled from "styled-components";
import LinkText from "../Components/Link/LinkText";




const Form = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    margin-top:60px;
    margin-left: 40px;
  }
`;

const TextInput = styled.input`
  top: 2.5rem;
  width: 60%;
  padding: 0.75rem 1.25rem;
  margin: 0.5;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-sizing: border-box;

  @media (max-width: 414px) {
    width: 12.5rem;
    height: 3.125rem;
   margin-left: 22px;
    top: 9.375rem;
  }
`;

const Label = styled.label`

`;
const ButtonParent = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  @media (max-width: 414px) {
    display:block;
    margin-top: 20px;
    margin-right: 130px;
    width:30px;
  }
`;

const Button = styled.button`
  width: 30%;
  height: 2.5rem;
  top: 7.125rem;
  left: 115%;
  @media (max-width: 414px) {
    width: 180px;
    height: 40px;
    left: -40%;
    top: 13.75rem;
  }
`;
const RegisterContainer = styled.button`
  width: 30%;
  height: 2.5rem;
  top: 7.125rem;
  left: 115%;
  @media (max-width: 414px) {
    width: 180px;
    height: 3.125rem;
    margin-left: 0px;
    top: 13.75rem;
  }
`;

const Title = styled.h1`
  position: relative;
  left: 120%;
  top: 0.625rem;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 414px) {
    width: 10rem;
    height: 3.125;
    left: 56%;
    top: 3.75;
  }
`;



function Login() {

  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (event) => {
    Apicall();

  };

  const Apicall = () => {
    console.log("Apicall");
   
    axios
      .post("/Auth/login", { user,password })
        .then((response) => {
            window.localStorage.setItem("token", response.data)
            window.location.replace("http://localhost:3000")
        }).catch(error => {

           setLabel("Incorrect username or password")
        });
          
      
    //.then((data) => setData(data));
  };

  useEffect(() => {
    console.log("useEffect");

    /*Apicall();*/
  }, []);

  return (
   
      <Form>
        <TextInput
          id="user"
          type="email"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        ></TextInput>

        <TextInput
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextInput>

        <Label id="label">{label}</Label>
        <ButtonParent>
          <Button id="submit" type="button" onClick={handleSubmit}>
            Login
          </Button>
          <RegisterContainer>
             <LinkText label={"Register"} urladress={"Register"} />
         </RegisterContainer>

          
        </ButtonParent>
      </Form>
   
  );
}

export default Login;
