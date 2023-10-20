import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, ButtonGroup } from '@mui/material';
 
 
const Navbar = () => {
  return (
    <>
    <AppBar color='default' position="static">
      <Toolbar>
     

        <IconButton edge="start" color="inherit" aria-label="menu">
       TheDayThought
        </IconButton>
    
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
       
       
      </Toolbar>
    </AppBar>

    </>
  )
}

export default Navbar