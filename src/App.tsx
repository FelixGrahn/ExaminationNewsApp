import * as React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Landingpage from './routes/Landingpage';



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
