import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setToggle, setpopMessege } from '../Slices/popSlicer';
import { useDispatch } from 'react-redux';

const Write = () => {
  const dispatch=useDispatch()

   


  const URL="http://localhost:4000/postblog";

  const [blogdata, setBlogData] = useState({
    heading:"Your title",
    blog:"Share your thought of the day"
  });

  const postBlog =async(e)=>{
    e.preventDefault()
    console.log("Posting the blog")
    try {
  
      const response = await axios.post(URL, blogdata, {
        headers: {
          'Content-Type': 'application/json', 
        
 
        },
        withCredentials: true, 
      });
      const pop=await response.data.messege
      console.log(response.data); 
      dispatch(setToggle(true))
      dispatch(setpopMessege(pop))
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

<ReactQuill className='write-blog'  theme="snow" value={blogdata.blog}  onChange={(value) => setBlogData({ ...blogdata, blog: value })} />

<Button 
onClick={postBlog}
sx={{
    margin:"2rem"
}} variant='contained'>Publish</Button>
    </>
  )
}

export default Write