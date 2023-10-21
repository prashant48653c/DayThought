import { Button } from '@mui/material';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('Share your thoughts of the day!');
    console.log(value)
  return (
    <>
<ReactQuill placeholder='Your Title' className='write-blog-heading'  value={"Enter the title"} theme="snow"  />;

<ReactQuill   className='write-blog'  theme="snow" value={value} onChange={setValue} />;
<Button sx={{
    margin:"2rem"
}} variant='contained'>Publish</Button>
    </>
  )
}

export default Write