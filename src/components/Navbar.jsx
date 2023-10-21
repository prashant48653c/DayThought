import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, ButtonGroup } from '@mui/material';
 import { useNavigate } from 'react-router-dom';
 
const Navbar = () => {

  const navigate=useNavigate();

  return (
    <>
    <AppBar color='default'  position="sticky">
      <Toolbar>
     

        <IconButton edge="start" color="inherit" aria-label="menu">
       TheDayThought
        </IconButton>
    
        <Button onClick={()=>navigate("/")} color="inherit">Home</Button>

        <Button onClick={()=>navigate("/blog")} color="inherit">Blog</Button>

        <Button onClick={()=>navigate("/profile")} color="inherit">Profile</Button>

        <Button onClick={()=>navigate("/write")} color="inherit">Write</Button>
       
       
      </Toolbar>
    </AppBar>

    </>
  )
}

export default Navbar