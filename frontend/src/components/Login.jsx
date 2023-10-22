import React from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

function Login() {
  return (
    <Container  sx={{
        marginTop:"4rem"
      }} maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Login</Typography>
        <form>
          <TextField label="Email" fullWidth margin="normal" variant="outlined" />
          <TextField label="Password" fullWidth margin="normal" variant="outlined" type="password" />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
