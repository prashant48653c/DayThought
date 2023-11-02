import * as React from 'react';
 
import InputAdornment from '@mui/material/InputAdornment';
import profilePic from '../assets/ph.webp'
 
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
 
import Paper from '@mui/material/Paper';
 
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
 
import Button from '@mui/material/Button';
import { useState } from 'react'; 
import axios from 'axios'; // 
import { Box, Input } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setToggle, setpopMessege } from '../Slices/popSlicer';

export default function Profile() {
const dispatch=useDispatch()
  const URL = "http://localhost:4000/updateProfile";
  const ppURL = "http://localhost:4000/profile";
 
  const [user, setUser] = useState({
    name: '',
    description: '',
    
  });

  const fileInputRef = React.useRef(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('profilePicture', file); 
  
        const response = await axios.patch(ppURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',  
          },
          withCredentials: true,
        });
        const pop="Updated profile picture"
        dispatch(setToggle(true))
        dispatch(setpopMessege(pop ))
  
        console.log(response);
      } catch (err) {
        console.error(`Error at update profile picture request: ${err}`);
      }
    }
  };
  
  

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


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
          height:"auto",
          gap: "2rem",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "1rem",
          padding: "1rem",
          zIndex: 222
        }}>
        <Typography variant="h4" color="initial">Edit Profile</Typography>

        <Box sx={{
          minWidth:"100%",
          display:'flex',
          flexDirection:'column',
          gap:"2rem"
           
        }} >

        <Box sx={{
            minWidth:"100%",
            display:'flex',
            justifyContent:"center"
        }} >
  
  <div>
      <div
        onClick={triggerFileInput}
        style={{
          border: '2px solid #ccc',
          padding: '10px',
          cursor: 'pointer',
          width: '200px',
          textAlign: 'center',
        }}
      >
       <img className='profile-pic-blog edit-blog '  src={profilePic} alt="" />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        ref={fileInputRef}
      />
      </div>
        </Box>
         
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

         

     

        <Button
          variant="contained"
          color="primary"
          onClick={updateUser}
        >
          Submit
        </Button>


        </Box>
      
      </Paper>
    </form>
  )
        
        } 

    