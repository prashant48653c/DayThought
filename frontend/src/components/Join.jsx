import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Box, Button, ButtonGroup } from '@mui/material'
import Popup from './Popup'
import { useDispatch, useSelector } from 'react-redux'
import { setJoinSwitch } from '../Slices/popSlicer'

const Join = () => {
   const dispatch=useDispatch()
    const [status,setStatus]=useState(false)
    const {joinSwitch}=useSelector(state=>state.pop)
  return (
    <>
    <Box sx={{
        width:"100%",
        marginTop:"2rem",
        textAlign:"center"
    }} >
 <ButtonGroup  >
    <Button onClick={()=>dispatch(setJoinSwitch(true))} >Login</Button>
    <Button  onClick={()=>dispatch(setJoinSwitch(false))} >Signup</Button>
    </ButtonGroup>



    {
   
   joinSwitch ?
   <Login/> :
   <Signup/>

}


    </Box>

   
 <Popup/>



    </>
  )
}

export default Join