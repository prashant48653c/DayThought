import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Typography } from '@mui/material';
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBlog, setUserData } from '../Slices/homeSlicer';

function Result() {
  const dispatch = useDispatch()

  const goToBlog = (e, blog, user) => {
    e.preventDefault()

    dispatch(setUserData(user))
    dispatch(setBlog(blog))
    navigate("/blog")
  }


  const navigate = useNavigate()
  const { result } = useSelector((state) => state.result);
  console.log(result)


  if (result.length <= 0) {
    console.log("No result")
    return (

      <Box sx={{
        width: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


      }}    >
        <Typography variant="subtitle1" color="initial">No result</Typography>


      </Box>



    )
  }

  if (result) {
    return (





      <Box sx={{
        width: "100%",

        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


      }}    >

        {
          result.map((user, i) => {

            return (

              user.blogs.map((blog, j) => {
                return (



                  <Paper onClick={(e) => goToBlog(e, blog, user)} key={j} style={{ width: '100%', minHeight: "15rem", height: 'auto', border: '1px solid #ddd', padding: '1.9rem', cursor: "pointer", display: "flex", gap: "1.4rem", margin: "3rem 0" }}>
                    <img style={{
                      maxWidth: "30%",
                      display: "inline-block",

                    }} src={f} alt="img" />
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column"
                    }} >
                      <Typography variant="p" sx={{
                        fontWeight: "700",
                        fontSize: "1.8rem",
                        lineHeight: "2.1rem"
                      }} color="initial">
                        <code dangerouslySetInnerHTML={{ __html: blog.heading }} />
                      </Typography>

                      <Typography py={1} variant="p" sx={{
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        color: "rgb(136, 136, 136)"
                      }} color="initial">
                        <code dangerouslySetInnerHTML={{ __html: (blog.blog).slice(0, 200) + " . . . ." }} />
                      </Typography>




                      <Box py={1} pb={3} sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center"
                      }} >
                        <img src={profilePic} className='profile-pic' alt="" />
                        <div>
                          <Typography sx={{
                            display: "block"
                          }} variant="p" color="initial">{user.name}</Typography>
                          <Typography variant="p" color="initial">{user.description}</Typography>
                        </div>
                      </Box>
                    </Box>
                  </Paper>
                )
              })
            )



          })
        }












      </Box>
    );
  }


}

export default Result;
