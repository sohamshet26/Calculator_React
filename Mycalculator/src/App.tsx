import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
import { useState } from "react";



const App = () => {

  function handler():void{
    setCal("scientfic")
  }
  const [Cal,setCal]=useState("Standard");
  return (

    <Box>
      <Sidebar t={handler}/>
      <Outlet/>
    </Box>


  );
}

export default App;