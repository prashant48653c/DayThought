import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, ButtonGroup, Divider } from '@mui/material';
 import { useNavigate } from 'react-router-dom';
 import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
//  import SearchIcon from '@mui/icons-material/SearchIcon';

import Option from './Option';
import Search from './Search';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const navigate=useNavigate();
  const [option,setOption]=useState(false)

 



 



  return (
    <>
    <AppBar color='default' sx={{
      width:"100%",
    }}  position="sticky">
      <Toolbar>
     

        <IconButton  onClick={()=>navigate("/")} edge="start" color="inherit" aria-label="menu">
       DayThought
        </IconButton>
    
     
        <Button onClick={()=>navigate("/write")} color="inherit">Write</Button>


    
           <Button onClick={()=>navigate("/join")} color="inherit">Join</Button>

      
 
        

      
       <Search/>
       <Divider orientation='center' >
       <Person2OutlinedIcon sx={{
        cursor:"pointer"
       }} onClick={()=>setOption(option=== true ? false : true)} />

       </Divider>
      
    
      
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