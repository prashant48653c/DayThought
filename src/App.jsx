import { useState } from 'react'
 import React from 'react'
import Navbar from './components/Navbar'
 
import Container from '@mui/material/Container'
 
 
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Write from './components/Write'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

<BrowserRouter>
<Navbar />
<Routes>

  <Route path='/' element={ <Home/> } />
  <Route path='/blog' element={ <Blog/> } />
<Route path='/write' element={ <Write/> } />

   
</Routes>


</BrowserRouter>

        
      
      

        {/* <Blog/> */}



   
        <Footer />
    </>
  )
}

export default App
