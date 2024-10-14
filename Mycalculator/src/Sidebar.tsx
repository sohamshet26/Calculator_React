
import { ListItem, ListItemButton,List,Box, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Drawer, Divider, Stack, Typography} from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalculateIcon from '@mui/icons-material/Calculate';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Calculate } from "@mui/icons-material";

const Sidebar=(props:()=>void)=>{

    console.log(props)
    const [Open,setOpen]=useState(false);

    const sidebar=( <List>
        <ListItem>
            <ListItemText primary="Calculator"></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemButton onClick={()=>{}}>
                <ListItemIcon>
                    <CalculateIcon/>
                </ListItemIcon>
                <ListItemText primary="Standard"></ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton onClick={()=>{}}>
                <ListItemIcon>
                    <ScienceIcon></ScienceIcon>
                </ListItemIcon>
                <ListItemText primary="Scientifc"></ListItemText>
            </ListItemButton>
        </ListItem>
        <Divider variant="middle"/>
        <ListItem>
            <ListItemText primary="Converter"></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemButton onClick={()=>{}}>
                <ListItemIcon><CurrencyExchangeIcon/></ListItemIcon>
                <ListItemText primary="Currency"></ListItemText>
            </ListItemButton>
        </ListItem>
    </List>);
   
    return (
     <Box sx={{display:"flex",flexDirection:"column"}}>
        <Box>
          <AppBar sx={{position:"fixed"}}>
            <Toolbar>
            <IconButton  color="inherit" sx={{mr:2}} onClick={()=>{
                setOpen(true);
            }}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">klkl</Typography>
            </Toolbar>
          </AppBar>
          </Box>
               
        <Box sx={{margin:8}}>
            <Drawer open={Open} onClose={()=>{
                setOpen(false)
            }}>
                {sidebar}
            </Drawer>
        </Box>
        </Box>
    );
}

export default Sidebar;