import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react'; 
import axios from 'axios'; // 
import { Input } from '@mui/material';

export default function Profile() {
  const URL = "http://localhost:4000/updateProfile";

  const [user, setUser] = useState({
    name: '',
    description: '',
    
  });

  const updateUser = async (e) => {
    e.preventDefault();
    console.log("Updating the profile");
    try {
      const response = await axios.patch(URL, user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (err) {
      console.error(`Error at update Patch request: ${err}`);
    }
  }

  
  return (
    <form>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "32rem",
          gap: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "1rem",
          padding: "1rem",
          zIndex: 222
        }}>
        <Typography variant="h4" color="initial">Edit Profile</Typography>

        <TextField
          id="input-with-icon-textfield"
          label="Username"
          name="name" // Add name attribute
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={user.name} // Set the value from the user state
          onChange={(e) => setUser({ ...user, name: e.target.value })} // Update the user state
        />

        <TextField
          id="input-with-icon-textfield"
          label="Description"
          name="description" // Add name attribute
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermContactCalendarIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={user.description} // Set the value from the user state
          onChange={(e) => setUser({ ...user, description: e.target.value })} // Update the user state
        />

         

        <TextareaAutosize
          InputProps={{
            style: { padding: '10px' },
          }}
          inputProps={{ style: { padding: '10px' }}
         } sx={{ margin: "1rem" }} minRows={10} placeholder="Write about yourself" />

        <Button
          variant="contained"
          color="primary"
          onClick={updateUser}
        >
          Submit
        </Button>
      </Paper>
    </form>
  );
}
