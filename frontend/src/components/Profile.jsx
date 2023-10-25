import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import PostBox from './PostBox'
import axios from 'axios'
const Profile = () => {

const [userData,setUserData]=useState([])
const URL="http://localhost:4000/getdata";

const getData=async()=>{
try{
  const response=await axios.get(URL);
  console.log(response)
}catch(err){
  console.log(err)
}
 


}
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
              <img src={"https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/271910032_1944517802386013_4212220958611674125_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xFrsIGgFKZ4AX_pZNa5&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAZTGeAh9N0s4DXH4Uz2AswHBDHqkhi7jVahrsgObQy3w&oe=65391392"} className='profile-pic-blog edit-blog ' alt="" />
              <div  >
                <Typography sx={{
                  display: "block",
                  fontWeight:700,
                  fontSize:"2rem"
                }} variant="h4" color="initial">Prashant Acharya</Typography>
                <Typography variant="h6" p={1} sx={{
                    fontSize:"1.5rem"
                }} color="initial">CEO and Developer</Typography>
                <Link sx={{
                    color:"green",
                    
                }} >Edit Profile</Link>
              </div>

 

            </Box>

{/* <PostBox/> */}
        </Container>


    </>
  )
}

export default Profile