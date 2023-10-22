import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import {ImFacebook} from 'react-icons/im'
import {ImLinkedin2} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
<>
<Box sx={{
    display:"flex",
    gap:"2rem",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    margin:"3rem 0",
    height:"16rem"
}} >

    <Box sx={{
         display:"flex",
         gap:"2rem",
    }}>
        
    <IconButton sx={{
         display:"flex",
         gap:"2rem",
    }}>
 <AiOutlineInstagram size={35}/>


    </IconButton>

    <IconButton sx={{
         display:"flex",
         gap:"2rem",
    }}>
 
 <ImLinkedin2 size={35}/>


    </IconButton>


    <IconButton sx={{
         display:"flex",
         gap:"2rem",
    }}>
    <ImFacebook size={35}/>


    </IconButton>
    </Box>

   

  <Typography variant="p" color="initial"  align='center'>
  Copyright ©2023 All rights reserved | This website is made by Prashant Acharya
  </Typography>

  <Typography variant="p" color="initial"  align='center'>

  Terms & Conditions/ Privacy Policy
  </Typography>

  <Typography variant="p" color="initial"  align='center'>

 Template from Colorlib
  </Typography>

 
</Box>

</>
  )
}

export default Footer