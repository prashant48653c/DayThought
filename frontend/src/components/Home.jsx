import React from 'react'
import Trending from './Trending'
import Navbar from './Navbar'
import PostBox from './PostBox'
import Container from '@mui/material/Container'
import Popular from './Popular'
 
import Contact from './Contact'
import Footer from './Footer'
import Blog from './Blog'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <>
     
      <Box  sx={{
        width:"100%",
       
        padding:"0 2rem",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        
    
      }}    >

<Trending />
        <PostBox />
        <Popular />
      </Box>
      <Contact />
 
        

    
    </>
  )
}

export default Home