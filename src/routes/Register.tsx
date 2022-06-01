import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/Card/ArticleCard";
import CustomHeader from "../Components/Headers/CustomHeader";
import axios from "axios";
import styled from "styled-components";

const handleSubmit = (event) => {
  console.log();
};

const Form = styled.form`
  display: flex;
  flex-flow: column;
  /* background-color: #787878; */
`;

const TextInput = styled.input`
  /* position: relative; */
  left: 40%;
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  @media (max-width: 414px) {
    /* top: 7.5rem; */
    width: 12.5rem;
    height: 3.125rem;
    /* left: 4%; */
  }
`;

const Label = styled.label``;

const Button = styled.button`
  /* position: relative; */
  width: 30%;
  height: 2.5rem;
  top: 3.75rem;
  /* left: -4%; */
  @media (max-width: 414px) {
    width: 10rem;
    height: 3.125rem;
    /* top: 180px; */
    /* left: -42%; */

  }
`;

const Title = styled.h1`
  position: relative;
  left: 62%;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 414px) {
    left: 50%;
    top: 6.25rem;
  }
`;

function Register() {
  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (event) => {
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(confirmpassword);

    if (password == confirmpassword) {
      Apicall();
    } else if (password !== confirmpassword) {
      setLabel("Passwords do not match!");
    }
  };

  const Apicall = () => {
    console.log("Apicall");

    axios
      .post("/Auth/register", { email, username, password })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          alert(response.data);
        } else {
          setLabel(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        setLabel(error.response.data);
      });
    //.then((data) => setData(data));
  };

  useEffect(() => {
    console.log("useEffect");

    /*Apicall();*/
  }, []);

  return (
    <div className="form-content">

      <Form>
        <TextInput
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></TextInput>
        <TextInput
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></TextInput>
        <TextInput
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextInput>
        <TextInput
          id="confirm"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></TextInput>

        <Label id="label">{label}</Label>
        <Button id="submit" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
