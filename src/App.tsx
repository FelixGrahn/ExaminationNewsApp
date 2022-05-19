import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Categories from "./Categories";
import Home from "./Home";
import Latest from "./Latest";
import Login from "./Login";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
