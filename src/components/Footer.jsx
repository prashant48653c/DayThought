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
    alignItems:"center"
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
  Copyright ©2023 All rights reserved | This template is made  by Prashant Acharya
  <br />

Terms & Conditions/ Privacy Policy
  </Typography>
</Box>

</>
  )
}

export default Footer