import { useState } from 'react'
import Trending from './components/Trending'
import Navbar from './components/Navbar'
import PostBox from './components/PostBox'
import Container from '@mui/material/Container'
import Popular from './components/Popular'
 
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container sx={{
       margin:"0rem 2rem"
      }} maxWidth="xl">


        {/* <Trending />
        <PostBox />
        <Popular /> */}
      
      

        <Blog/>



      </Container>
      <Contact />
        <Footer />
    </>
  )
}

export default App
