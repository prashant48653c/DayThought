import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import profilePic from '../assets/ph.webp';
import f from '../assets/f.jpeg';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';

const Blog = () => {
  const dispatch=useDispatch()
  const {userData,blog} = useSelector((state) => state.home);

   

  if(!blog && !userData){
return <h1>LOading</h1>
  }

  return (
    <>
      <Box mt={5} pt={5} mx={{xs:3,sm:5,md:7,lg:9,xl:12}}>
        <Box py={4} pb={3} sx={{
          display: "flex",
          gap: "1rem",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <img src={profilePic} className='profile-pic-blog' alt="" />
          <div>
            <Typography sx={{
              display: "block",
              fontWeight: 600
            }} variant="h4" color="initial">{userData.name}</Typography>
            <Typography variant="h6" color="initial">{userData.description}</Typography>
          </div>
        </Box>

        <Box my={5} textAlign={"center"}>
         
          <pre className='pre'>
          <Typography align='center' variant="h2" color="initial">
          <code dangerouslySetInnerHTML={{__html:blog.heading}} />
          </Typography>
        </pre>
            
          

          <img src={f} className=' blog-img' alt="" />
        </Box>

        <pre className='pre'><code dangerouslySetInnerHTML={{__html:blog.blog}}/></pre>
      </Box>

      <Contact />
    </>
  );
}

export default Blog;
