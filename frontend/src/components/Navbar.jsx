import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, ButtonGroup } from '@mui/material';
 import { useNavigate } from 'react-router-dom';
 import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Option from './Option';
const Navbar = () => {

  const navigate=useNavigate();
  const [option,setOption]=useState(false)

  return (
    <>
    <AppBar color='default' sx={{
      maxWidth:"100%"
    }}  position="sticky">
      <Toolbar>
     

        <IconButton edge="start" color="inherit" aria-label="menu">
       TheDayThought
        </IconButton>
    
        <Button onClick={()=>navigate("/")} color="inherit">Home</Button>

        <Button onClick={()=>navigate("/blog")} color="inherit">Blog</Button>

        <Button onClick={()=>navigate("/profile")} color="inherit">Profile</Button>

        <Button onClick={()=>navigate("/write")} color="inherit">Write</Button>

        <Button onClick={()=>navigate("/join")} color="inherit">Join</Button>

        <IconButton edge="start" color="inherit" aria-label="menu">
      
        </IconButton>
     <Person2OutlinedIcon onClick={()=>setOption(option=== true ? false : true)} />
      </Toolbar>

      
    </AppBar>

    {
      option &&
      <Option/> 
    }

    </>
  )
}

export default Navbar