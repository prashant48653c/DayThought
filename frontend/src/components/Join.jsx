import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Box, Button, ButtonGroup } from '@mui/material'

const Join = () => {
    const [status,setStatus]=useState(false)
  return (
    <>
    <Box sx={{
        width:"100%",
        marginTop:"2rem",
        textAlign:"center"
    }} >
 <ButtonGroup  >
    <Button onClick={()=>setStatus(true)} >Login</Button>
    <Button  onClick={()=>setStatus(false)} >Signup</Button>
    </ButtonGroup>



    {
   
   status ?
   <Login/> :
   <Signup/>

}


    </Box>

   
 



    </>
  )
}

export default Join