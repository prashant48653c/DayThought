import { useState } from 'react'
import Trending from './components/Trending'
import Navbar from './components/Navbar'
import PostBox from './components/PostBox'
import Container from '@mui/material/Container'
import Popular from './components/Popular'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">


        <Trending />
        <PostBox />
        <Popular />
        <BlogList />
        <Contact />
        <Footer />



      </Container>

    </>
  )
}

export default App
