import * as React from 'react';
 
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Paper, TextareaAutosize, Typography } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
 
 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/base';


export default function Profile() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form  >
    
    <Paper 
    elevation={4}
     sx={ {
   
     display:"flex",
     flexDirection:"column",
     width:"32rem",
     gap:"2rem",
   position:"absolute",
   top:"50%",
   left:"50%",
   transform: "translate(-50%, -50%)",
     margin:"1rem ",
     padding:"1rem",
     zIndex:222

    
     
     
     }}>
       
       <Typography variant="h4" color="initial">Edit Profile</Typography>

       <TextField 
        id="input-with-icon-textfield"
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />


<TextField
 
        id="input-with-icon-textfield"
        label="Description"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PermContactCalendarIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

<FormControl sx={{  maxWidth:"100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>


            }


            
          />
        </FormControl>


<TextareaAutosize 
  InputProps={{
    style: { padding: '10px' }, 
  }}
  inputProps={{ style: { padding: '10px' }}}
aria-label="minimum height" sx={{margin:"1rem"}} minRows={10} placeholder="Write about yourself" />
      
      
<Button
        variant="contained"
        color="primary"
        
      >
        Submit
      </Button>

     
   
    </Paper>
    </form>
  );
}
