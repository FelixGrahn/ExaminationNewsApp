import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/Card/ArticleCard";
import CustomHeader from "../Components/Headers/CustomHeader";
import axios from "axios";
import styled from "styled-components";
import LinkText from "../Components/Link/LinkText";



const Form = styled.form`

`;

const TextInput = styled.input`
  position: relative;
  left: 100%;
  top: 40px;
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  @media (max-width: 414px) {
    width: 200px;
    height: 50px;
    left: 4%;
    top: 150px;
  }
`;

const Label = styled.label`

`;

const Button = styled.button`
  position: relative;
  width: 30%;
  height: 40px;
  top: 110px;
  left: 55%;
  @media (max-width: 414px) {
    width: 160px;
    height: 50px;
    left: -40%;
    top: 220px;
  }
`;
const ButtonRegister = styled.button`
  position: relative;
  width: 30%;
  height: 40px;
  top: 114px;
  left: 115%;
  @media (max-width: 414px) {
    width: 160px;
    height: 50px;
    left: -40%;
    top: 220px;
  }
`;

const Title = styled.h1`
  position: relative;
  left: 120%;
  top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 414px) {
    width: 160px;
    height: 50px;
    left: 56%;
    top: 60px;
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
    <div>
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
        <Button id="submit" type="button" onClick={handleSubmit}>
          Login
        </Button>
        <ButtonRegister>
        <LinkText label={"Register"} urladress={"Register"} />
        </ButtonRegister>
      </Form>
    </div>
  );
}

export default Login;
