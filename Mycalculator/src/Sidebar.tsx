
import { ListItem, ListItemButton,List,Box, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Drawer, Divider, Stack} from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalculateIcon from '@mui/icons-material/Calculate';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Grid from "@mui/material/Grid2";

const Sidebar=()=>{

    // const [Open,setOpen]=useState(false);

    // const sidebar=( <List>
    //     <ListItem>
    //         <ListItemText primary="Calculator"></ListItemText>
    //     </ListItem>
    //     <ListItem>
    //         <ListItemButton>
    //             <ListItemIcon>
    //                 <CalculateIcon/>
    //             </ListItemIcon>
    //             <ListItemText primary="Standard"></ListItemText>
    //         </ListItemButton>
    //     </ListItem>
    //     <ListItem>
    //         <ListItemButton>
    //             <ListItemIcon>
    //                 <ScienceIcon></ScienceIcon>
    //             </ListItemIcon>
    //             <ListItemText primary="Scientifc"></ListItemText>
    //         </ListItemButton>
    //     </ListItem>
    //     <Divider variant="middle"/>
    //     <ListItem>
    //         <ListItemText primary="Converter"></ListItemText>
    //     </ListItem>
    //     <ListItem>
    //         <ListItemButton>
    //             <ListItemIcon><CurrencyExchangeIcon/></ListItemIcon>
    //             <ListItemText primary="Currency"></ListItemText>
    //         </ListItemButton>
    //     </ListItem>
    // </List>);
   
    // return (
    //  <Box sx={{display:"flex",flexDirection:"column"}}>
    //     <Box>
    //       <AppBar sx={{position:"fixed"}}>
    //         <Toolbar>
    //         <IconButton  color="inherit" sx={{mr:2}} onClick={()=>{
    //             setOpen(true);
    //         }}>
    //             <MenuIcon/>
    //         </IconButton>
    //         </Toolbar>
    //       </AppBar>
    //       </Box>
               
    //     <Box sx={{margin:8}}>
    //         <Drawer open={Open} onClose={()=>{
    //             setOpen(false)
    //         }}>
    //             {sidebar}
    //         </Drawer>
        
            
         
    //     </Box>
    //     </Box>
        

    // );
  
    const d=[1,2,3,4,5,6];
    return (
        <Grid container direction="row">
         {
            d.map((t)=>{
                if(t!=6){
                    return (
                       <Grid container direction="column">
                      <Grid>
                        <Stack>
                            <Box>{t}</Box>
                        </Stack>
                      </Grid>
                      </Grid>
                    )
                }
            })
         }
        </Grid>
    );
}

export default Sidebar;