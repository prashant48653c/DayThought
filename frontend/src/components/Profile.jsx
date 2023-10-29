import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import PostBox from './PostBox'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUserData, setBlog } from '../Slices/homeSlicer'


const Profile = () => {

  const { userData, blog } = useSelector((state) => state.home)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToBlog = (e, elem) => {
    e.preventDefault()
    dispatch(setBlog(elem))
    navigate("/blog")
  }
  const [fetchToggle,setFetchToggle]=useState(true)

  const URL = "http://localhost:4000/getdata";

  const getData = async () => {
    try {
    
      const response = await axios.get(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true
      });

      const data = response.data;
      dispatch(setUserData(data))
      setFetchToggle(false)
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }  

  useEffect(() => {
    if(fetchToggle){
      getData();
     
    }
  
   

  }, [getData])




  if (userData.blogs) {
    return (
      <>





        <Container sx={{
          margin: "0rem 2rem"
        }} maxWidth="xl">

          <Box py={4} pb={3} sx={{
            display: "flex",
            gap: "2rem",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center"
          }} >
            <img src={userData.profilePicture} className='profile-pic-blog edit-blog ' alt="" />
            <div  >
              <Typography sx={{
                display: "block",
                fontWeight: 700,
                fontSize: "2rem"
              }} variant="p" color="initial">{userData.name}</Typography>
              <Typography variant="p" p={1} sx={{
                fontSize: "1.5rem"
              }} color="initial">{userData.description}</Typography>
              <Link
                to={"/editor"}
                sx={{
                  color: "green",

                }} >Edit Profile</Link>
            </div>



          </Box>

          <Grid my={4} sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-start",
            gap: "6rem",
            alignItems: "center",

          }} height={"auto"} py={5} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
              userData.blogs.map((elem, i) => {


                return (



                  <Grid key={i} ml={3} p={2} sm={3}>

                    <Paper onClick={(e) => goToBlog(e, elem)} sx={{
                      padding: "1rem",
                      height: "auto",
                      width: "30rem",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      cursor: "pointer"
                    }} >
                      <img className='post-box-img' src={f} alt="" />
                      <Typography variant="p" py={1} color="initial">Business, Travel — July 2, 2020</Typography>
                      <Typography variant="p" sx={{
                        fontWeight: "700",
                        fontSize: "1.8rem",
                        lineHeight: "2.1rem"
                      }} color="initial">
                        
                        <code dangerouslySetInnerHTML={{ __html: elem.heading }} />
                        
                        
                        </Typography>

                      <Typography py={1} variant="p" sx={{
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        color: "rgb(136, 136, 136)"
                      }} color="initial">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>

                      <Box py={1} pb={3} sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center"
                      }} >
                        <img src={profilePic} className='profile-pic' alt="" />
                        <div>
                          <Typography sx={{
                            display: "block"
                          }} variant="p" color="initial">{userData.name}</Typography>
                          <Typography variant="p" color="initial">{userData.description}</Typography>
                        </div>
                      </Box>

                    </Paper>
                  </Grid>
                )

              })
            }
          </Grid>

        </Container>


      </>
    )
  }

}

export default Profile