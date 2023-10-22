import React from 'react'
import Trending from './Trending'
import Navbar from './Navbar'
import PostBox from './PostBox'
import Container from '@mui/material/Container'
import Popular from './Popular'
 
import Contact from './Contact'
import Footer from './Footer'
import Blog from './Blog'
const Home = () => {
  return (
    <>
     
      <Container  sx={{
       margin:"0rem 2rem"
      }} maxWidth="xl"  >

<Trending />
        <PostBox />
        <Popular />
      </Container>
      <Contact />
 
        

    
    </>
  )
}

export default Home