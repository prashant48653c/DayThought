import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import PostBox from './PostBox'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUserData, setBlog, setProfileData } from '../Slices/homeSlicer'


const Profile = () => {

  const { userData, blog, profileData } = useSelector((state) => state.home)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToBlog = (e, elem) => {

    console.log(elem)
    dispatch(setBlog(elem))
    navigate("/blog")
  }










  if (profileData.blogs) {
    return (
      <>





        <Box sx={{
          width: "100%",

          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"


        }}    >

          <Box py={4} pb={3} sx={{
            display: "flex",
            gap: "2rem",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center"
          }} >
            <div className='profile-pic-blog   ' >
              <img src={profileData.profilePicture} alt="" />
            </div>


            <div  >
              <Typography sx={{
                display: "block",
                fontWeight: 700,
                fontSize: "2rem"
              }} variant="p" color="initial">{profileData.name}</Typography>
              <Typography gutterBottom variant="p" p={1} sx={{
                fontSize: "1.5rem"
              }} color="initial">{profileData.description}</Typography>
              <div>
                <Link
                  to={"/editor"}
                  sx={{
                    color: "green",


                  }} >Edit Profile</Link>
              </div>

            </div>



          </Box>



          <Grid my={2} sx={{
            columnGap: {
              xs: 1, sm: 2, md: 1, lg: 6
            },



            position: "relative",
            display: "flex",
            justifyContent: {
              xs: "center", sm: "center", md: "center", lg: "center"
            }

          }} height={"auto"} py={5} container columnSpacing={0}>

{
              (!profileData?.blogs?.blog <= 0 ) ?
              (
                <p>No blog posted yet</p>
              ):
            
              profileData.blogs.map((elem, i) => {

return(
  <Grid key={i} p={2} sx={{
    padding: "1rem 1rem",
    height: "auto",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    width: {
      xs: "40rem", sm: "30rem", md: "28rem", lg: "28rem", xl: "32rem"
    },

  }}>
    <Paper onClick={(e) => goToBlog(e, elem)} sx={{
      padding: "1.5rem 1rem",
      height: "auto",

      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      cursor: "pointer",
      background: "#f8f9fa"
    }} >
      <div style={{
        display: "flex",
        justifyContent: "center"
      }} >
        <img className='post-box-img' src={f} alt="" />
      </div>

      <Typography variant="p" py={1} color="initial">{elem.uploadDate}</Typography>
      <Typography variant="p" sx={{
        fontWeight: "700",
        fontSize: "1.8rem",
        lineHeight: "2.1rem"
      }} color="initial">
        {
          ((elem.heading).length > 26) ? (
            <code dangerouslySetInnerHTML={{ __html: (elem.heading).slice(0, 26).concat("...") }} />

          ) :

            <code dangerouslySetInnerHTML={{ __html: (elem.heading).slice(0, 26) }} />
        }
      </Typography>

      <Typography py={1} variant="p" sx={{
        fontSize: "1.4rem",
        fontWeight: 400,
        color: "rgb(136, 136, 136)"
      }} color="initial">


        <code dangerouslySetInnerHTML={{ __html: (elem.blog).slice(0, 94).concat("...") }} />


      </Typography>

      <Box py={1} pb={3} sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }} >
        <img src={profileData.profilePicture} className='profile-pic' alt="" />
        <div>
          <Typography sx={{
            display: "block"
          }} variant="p" color="initial">{profileData.name}</Typography>
          <Typography variant="p" color="initial">{profileData.description}</Typography>
        </div>
      </Box>

    </Paper>
  </Grid>

)
             


                      })
            }

           






          </Grid>




        </Box>





      </>
    )
  }

}

export default Profile