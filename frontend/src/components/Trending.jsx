import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic from '../assets/ph.webp'
import 'swiper/css';
import 'swiper/css/bundle';

import { Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setAllUser, setBlog, setUserData } from '../Slices/homeSlicer';


const Trending = () => {
  const { allUser, blog } = useSelector((state) => state.home)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const goToBlog = (e, elem, user) => {
    e.preventDefault()
    dispatch(setBlog(user))
    navigate("/blog")
  }

  const goToProfile = (e, elem, user) => {

    e.preventDefault()
    console.log("going to profile")
    dispatch(setUserData(elem))
    

    navigate("/profile")
  }
  const URL = "http://localhost:4000/alldata";

  const getData = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true
      });

      const data = await response.data;
      dispatch(setAllUser(data))

    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {

    getData()
    console.log(allUser);
  }, [])








  if (allUser.data) {
    return (
      <Box sx={{
        margin: 0,
        padding: 0,
       
        width: "100%"
      }} >
        <Box py={8} sx={{
          textAlign: "center",

          width: "100%"
        }} >
          <Typography variant="h3" sx={{
            fontWeight: "700",

            fontSize: "4rem",
            lineHeight: "4.8rem",
            width: "100%"

          }} color="initial">Trending</Typography>
        </Box>


        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}



          style={{
            width: "100%",
            height: "35rem",
          }}

        >

          {
            allUser.data.map((elem, i) => {
              return (
                elem.blogs.map((user, j) => {
                  return (



                    <SwiperSlide key={j} style={{
                      width: "100%",
                      height: "35rem",

                    }}>
                      {
                        console.log(user)
                      }


                      <Grid container style={{
                        width: "100%",
                        height: "35rem",
                        cursor: "pointer"
                      }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} onClick={(e) => goToBlog(e, elem, user)}   >

                        <Grid item xs={6}>

                          <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" className='swiper-img' alt="" />

                        </Grid>
                        <Grid item xs={6}>

                          <Typography variant="p" sx={{
                            fontSize: "1.7rem",
                            margin: "  1rem  0"
                          }} color="initial">
                            <b>Business-Travel</b>  <em>July 05</em>
                          </Typography>


                          <Typography variant="h3" sx={{
                            fontWeight: "700",
                            margin: " 1rem 0",
                            fontSize: "4rem",
                            lineHeight: "4.8rem",
                            maxWidth: "95%"
                          }} color="initial">
                            <code dangerouslySetInnerHTML={{ __html: user.heading }} />

                          </Typography>



                          <Typography variant="p" sx={{
                            fontSize: "1.4rem",
                            fontWeight: 400,
                            color: "rgb(136, 136, 136)",

                            margin: "1rem 0"
                          }} color="initial">
                            <code dangerouslySetInnerHTML={{ __html: (user.blog).slice(0, 300) + " . . . ." }} />

                          </Typography>


                          <Box py={2} sx={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            margin: " 1rem 0",
                         
                          }}
                            onClick={(e) => goToProfile(e, elem)}
                          >
                            <img src={profilePic} className='profile-pic' alt="" />
                            <div>
                              <Typography sx={{
                                display: "block"
                              }} variant="p" color="initial">{elem.name}</Typography>
                              <Typography variant="p" color="initial">CEO and Developer</Typography>
                            </div>
                          </Box>

                        </Grid>

                      </Grid>


                    </SwiperSlide>
                  )

                })
              )
            })
          }












        </Swiper>

      </Box>
    );
  }

}

export default Trending





