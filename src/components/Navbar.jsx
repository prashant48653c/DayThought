import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField } from '@mui/material';
 
 
const Navbar = () => {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
       
        </IconButton>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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