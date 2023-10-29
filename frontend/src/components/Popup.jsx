import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../Slices/popSlicer';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
  
    const {popMessege,toggle}=useSelector((state)=> state.pop)
const handleCLick=()=>[
dispatch(setToggle(false))
]

    if(toggle){

        return (
    
            <Paper className='slide-top' elevation={4} sx={{
                textAlign:"left",
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                position: 'absolute',
                top: "11%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                width:"auto",
                maxWidth:"23%",
                height:"auto",
                padding:"2rem "
        
            }} >
        
        <Typography sx={{
            fontSize:"1.6rem",
            padding:".7rem 0"
        }} variant="p" color="initial"> {popMessege} </Typography>
        <Button onClick={handleCLick} variant='contained' >Continue</Button>
            </Paper>
          )
    }
}

export default Popup