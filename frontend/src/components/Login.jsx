import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import axios from 'axios'
function Login() {
  const URL="http://localhost:4000/login";
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
    console.log("Registering the user")
    try{
      const response=await axios.post(URL,userData)
      console.log(response)
    }catch(err){
      console.log(`Error at post in login ${err}`)
    }

  }


  return (
    <Container  sx={{
        marginTop:"4rem"
      }} maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={sendCredential} method='POST' >
        <TextField label="Email" name='email' value={userData.email} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" />

<TextField label="Password" value={userData.password} onChange={handleInputChange} fullWidth name='password' margin="normal" variant="outlined" type="password" />


          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
