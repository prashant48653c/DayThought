import { useState } from 'react'
import Trending from './components/Trending'
import Navbar from './components/Navbar'
import PostBox from './components/PostBox'
import Container from '@mui/material/Container'
import Popular from './components/Popular'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container sx={{
        marginX:"3rem"
      }} maxWidth="xl">


        <Trending />
        <PostBox />
        <Popular />
        <BlogList />
        <Contact />
        <Footer />

        {/* <Blog/> */}



      </Container>

    </>
  )
}

export default App
