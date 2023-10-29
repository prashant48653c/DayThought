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
 <a href="https://www.instagram.com/prashant34223/" target="_blank" rel="noopener noreferrer">

 <AiOutlineInstagram size={35}/>

</a>
    </IconButton>

    <IconButton sx={{
         display:"flex",
         gap:"2rem",
    }}>
 <a href="https://www.linkedin.com/in/prashant-acharya1/" target="_blank" rel="noopener noreferrer">
  <ImLinkedin2 size={35} />
</a>

    </IconButton>


    <IconButton sx={{
         display:"flex",
         gap:"2rem",
    }}>
 <a href="https://www.facebook.com/prashant.acharya.28" target="_blank" rel="noopener noreferrer">

    <ImFacebook size={35}/>
</a>

    </IconButton>
    </Box>

   

  <Typography variant="p" color="initial"  align='center'>
  Copyright ©2023 All rights reserved | This website is made by Prashant Acharya
  </Typography>

  <Typography variant="p" color="initial"  align='center'>

  Terms & Conditions/ Privacy Policy
  </Typography>

  <Typography variant="p" color="initial"  align='center'>

 Thank You
  </Typography>

 
</Box>

</>
  )
}

export default Footer