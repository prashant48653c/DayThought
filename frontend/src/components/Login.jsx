import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux';
import { setToggle, setpopMessege } from '../Slices/popSlicer';
import { useNavigate } from 'react-router-dom';
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const URL="https://daythought.vercel.app/login";
  const [userData, setUserData]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const sendCredential =async(e)=>{
    e.preventDefault()
    console.log("Logging the user")
    try {
  
      const response = await axios.post(URL, userData, {
        headers: {
          'Content-Type': 'application/json', 
          Authorization: 'Bearer YourAccessToken',  
        
        },
        withCredentials: true, 
      });
  const pop=await response.data.messege
  
      dispatch(setpopMessege(pop))
      dispatch(setToggle(true))
      navigate("/")
       
    } catch (err) {
      console.error(`Error at login POST request: ${err}`);
    }

  }


  return (
    <Container  sx={{
        marginTop:"4rem"
      }} maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4">Login</Typography>

        <form onSubmit={sendCredential} method='POST' >
        <TextField required label="Email" name='email' value={userData.email} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" />

<TextField required label="Password" value={userData.password} onChange={handleInputChange} fullWidth name='password' margin="normal" variant="outlined" type="password" />


          <Button   type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
