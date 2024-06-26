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
import {setProfileData, setUserData} from '../Slices/homeSlicer'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Option() {
  const URL="http://localhost:4000/logout";
  const dispatch=useDispatch()
  const navigate=useNavigate()
const {profileData}=useSelector(state=>state.home)
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
     
      dispatch(setpopMessege(pop))
      dispatch(setToggle(true))
      dispatch(setUserData([]))
      dispatch(setProfileData([]))
      navigate("/")
      
    } catch (error) {
      console.log(error)
    }



  }
  const [selectedIndex, setSelectedIndex] = React.useState(1);

 if(profileData.profilePicture){
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
          <ListItemText onClick={()=>navigate("/profile")} primary="Profile" />
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
 
}