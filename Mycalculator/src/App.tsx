import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline"

console.log("hh");
const App = () => {
  return (

    <Box>
      {/* <Grid container sx={{border:1,borderColor:"primary.main"}} columns={10} rowSpacing={2}  columnSpacing={{xs:1,sm:2,md:3}} >
            <Grid size={{md:2,sm:2,xs:2}}>
            <Box sx={{border:1,borderColor:"text.primary",height:50}} >Item 1</Box>
            </Grid>
       </Grid> */}
        <Timeline/>
    </Box>


  );
}

export default App;