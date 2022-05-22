import * as React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landingpage from './routes/Landingpage';

function App() {
  return (
    <div>
        {/* <Navbar/> */}
        <h3>app</h3>
      <Landingpage/>
      <Outlet />
    </div>
  );
}

export default App;
