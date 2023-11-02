import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, ButtonGroup, Divider, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
//  import SearchIcon from '@mui/icons-material/SearchIcon';

import Option from './Option';
import Search from './Search';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { userData } = useSelector(state => state.home)

  const navigate = useNavigate();
  const [option, setOption] = useState(false)

console.log(userData)







  return (
    <>
      <AppBar color='default' sx={{
        width: "100%",
      }} position="sticky">
        <Toolbar>


          <IconButton onClick={() => navigate("/")} edge="start" color="inherit" aria-label="menu">
            DayThought
          </IconButton>

          <Stack spacing={1} >
          {
            userData.profilePicture ?
     (
          <>
            <Button  onClick={() => navigate("/write")} color="inherit">Write</Button>

          </>
          )
          :
          (
          <>
            <Button onClick={() => navigate("/join")} color="inherit">Join</Button>

          </>
          )
    }
          </Stack>
     



       
        <Box display={"flex"} alignItems={"center"} gap={2} justifyContent={"flex-end"} width={"100%"} >
        <Search />
          <IconButton  onClick={() => setOption(option === true ? false : true)} >
            {
              userData ?
              <img className="profile-pic"  aria-label="menu button" src={userData.profilePicture} alt="dd" />
              :
              <Person2OutlinedIcon sx={{
                cursor: "pointer"
              }}  />
            }
         

          </IconButton>
       
        
        </Box>
           



        </Toolbar>


      </AppBar>

      {
        option &&
        <Option />
      }

    </>
  )
}

export default Navbar