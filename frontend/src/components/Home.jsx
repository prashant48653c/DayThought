import React, { useEffect, useState } from 'react'
import Trending from './Trending'
import Navbar from './Navbar'
import PostBox from './PostBox'
import Container from '@mui/material/Container'
import Popular from './Popular'

import Contact from './Contact'
import Footer from './Footer'
import Blog from './Blog'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProfileData } from '../Slices/homeSlicer'
import axios from 'axios'


const Home = () => {
 

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [fetchToggle,setFetchToggle]=useState(true)

  const URL = "https://daythought.vercel.app/getdata";

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
      dispatch(setProfileData(data))
      
    
    } catch (error) {
      console.error("An error occurred:", error);
    }
  } 

  useEffect(()=>{
    getData()

  },[])



















  return (
    <>

      <Box sx={{
        width: "100%",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        position:"relative"


      }}    >

        <Trending/>
        <PostBox />
        <Trending/>

      </Box>
      <Contact />
      





    </>
  )
}

export default Home