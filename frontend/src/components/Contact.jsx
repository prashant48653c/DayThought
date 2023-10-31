
import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Container, TextField } from '@mui/material'
import { Box, Paper } from '@mui/material'

const Contact = () => {
  return (
    <>
   
    <Box my={4} p={{ xs:2,sm:4,md:6,lg:8 }} sx={{
      background:"#F5F5F5",
      maxWidth:"100%",
   
    }} >
        <Typography mb={2} variant="h3" sx={{
          fontWeight: "700",
         
          fontSize:"3rem",
          lineHeight:"4.8rem"

        }} color="initial">Subscribe </Typography>
      <Box   sx={{
           display:"flex",
           justifyContent:"flex-start",
           flexDirection:{xs:"column",xl:"row",lg:"row",md:"row"},
           gap:"4rem"
      }}>
 <input placeholder='Enter your email' type="email" name="email" id="email" />
        <button className='btn-sub'> Subscribe</button>
      </Box>
       
       
    </Box>

    </>
  )
}

export default Contact