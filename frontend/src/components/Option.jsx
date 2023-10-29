import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Paper } from '@mui/material';
import axios from 'axios';
import {setToggle,setpopMessege} from '../Slices/popSlicer'
import { useDispatch } from 'react-redux';

export default function Option() {
  const URL="http://localhost:4000/logout";
  const dispatch=useDispatch()

  const logout=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.get(URL, {
        withCredentials: true, // Include this to send cookies
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const pop=await response.data.messege
      console.log(response.data); 
      dispatch(setpopMessege(pop))
      dispatch(setToggle(true))
      console.log("Successfully logged out", response);
    } catch (error) {
      console.log(error)
    }



  }
  const [selectedIndex, setSelectedIndex] = React.useState(1);

 
  return (
    <Paper elevation={4} sx={{ width: '100%',
     maxWidth: 200,
      bgcolor: 'background.paper',
      position:"fixed",
      zIndex:111,
      top:90,
      right:22
       }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
     
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Messege" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={logout}
        >
         
          <ListItemText  primary="Logout" />
        </ListItemButton>
      </List>
    </Paper>
  );
}