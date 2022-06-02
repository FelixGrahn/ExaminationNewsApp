import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Landingpage from "./routes/Landingpage";

const OriginDiv = styled.div`
  height: 100%;
  width: 100%;
  /* jusitfy-content: center; */
`;

function App() {
  return (
    <div>
      {/* <Navbar/> */}

      <Landingpage />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
