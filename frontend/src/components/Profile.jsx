import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import PostBox from './PostBox'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Profile = () => {

const [userData,setUserData]=useState([])

const URL="http://localhost:4000/getdata";


const getData = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true
    });
    
    const data = response.data;
    setUserData(data)
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

useEffect(()=>{
  getData()
},[])












  return (
    <>

    



  <Container sx={{
       margin:"0rem 2rem"
      }} maxWidth="xl">

<Box py={4} pb={3} sx={{
              display: "flex",
              gap: "2rem",
              textAlign:"center",
             flexDirection:"column",
             alignItems:"center"
            }} >
              <img src={userData.profilePicture} className='profile-pic-blog edit-blog ' alt="" />
              <div  >
                <Typography sx={{
                  display: "block",
                  fontWeight:700,
                  fontSize:"2rem"
                }} variant="h4" color="initial">{userData.name}</Typography>
                <Typography variant="h6" p={1} sx={{
                    fontSize:"1.5rem"
                }} color="initial">{userData.description}</Typography>
                <Link
                to={"/editor"}
                sx={{
                    color:"green",
                    
                }} >Edit Profile</Link>
              </div>

 

            </Box>

<PostBox/>
        </Container>


    </>
  )
}

export default Profile