import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setToggle, setpopMessege } from '../Slices/popSlicer';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Category from './Category';
const Write = () => {
  const dispatch=useDispatch()
const navigate=useNavigate()
   


  const URL="http://localhost:4000/postblog";

  const [blogdata, setBlogData] = useState({
    heading:"  ",
    blog:" "
  });

  const postBlog =async(e)=>{
    e.preventDefault()
   
    try {
  
      const response = await axios.post(URL, blogdata, {
        headers: {
          'Content-Type': 'application/json', 
        
 
        },
        withCredentials: true, 
      });
      const pop=await response.data.messege
   
      dispatch(setToggle(true))
      dispatch(setpopMessege(pop))
      navigate("/")
    } catch (err) {
      console.error(`Error at login POST request: ${err}`);
    }

  }

  // useEffect(() => {
    // console.log(blogdata);
  // }, [blogdata]);
  
  return (
    <>
   
<ReactQuill placeholder='Your Title' className='write-blog-heading' onChange={(value) => setBlogData({ ...blogdata, heading: value })} value={blogdata.heading} theme="snow"  />

<ReactQuill placeholder='Your Thought'  className='write-blog'  theme="snow" value={blogdata.blog}  onChange={(value) => setBlogData({ ...blogdata, blog: value })} />



<Button color='inherit'
endIcon={ <SendIcon /> }
onClick={postBlog}
sx={{
    margin:" 3rem 2rem ",
    textAlign:"center"
}} variant='contained'>Publish</Button>
    </>
  )
}

export default Write