import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic from '../assets/ph.webp'
import 'swiper/css';
import 'swiper/css/bundle'; 
 
import { Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
 
const Popular = () => {
  const navigate=useNavigate();

  const goToBlog=()=>[
    navigate("/blog")
  ]
    return (
      <Box sx={{
        margin:0,
        padding:0,
        border:"1px solid black",
        width:"100%"
      }} >
        <Box py={8} sx={{
          textAlign: "center",
          background:"red",
          width:"100%"
        }} >
          <Typography variant="h3" sx={{
            fontWeight: "700",
           
            fontSize:"4rem",
            lineHeight:"4.8rem",
            width:"100%"
  
          }} color="initial">Trending</Typography>
        </Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
        
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            width: "100%",
            height:"35rem",
          }}
         
        >
  
  
  
          <SwiperSlide style={{
            width: "100%",
            height:"35rem",
            
          }}>
            <Grid container onClick={goToBlog}  style={{
            width: "100%",
            height:"35rem",
          }}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              <Grid item xs={6}>
  
                <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" className='swiper-img' alt="" />
  
              </Grid>
              <Grid item py={9} mt={3} xs={6}>
  
                <Typography variant="p" sx={{
                  fontSize: "1.7rem"
                }} color="initial">
                  <b>Business-Travel</b>  <em>July 05</em>
                </Typography>
  
  
                <Typography variant="h3" sx={{
                 fontWeight: "700",
                
                 fontSize:"4rem",
                 lineHeight:"4.8rem",
                  maxWidth: "100%"
                }} color="initial">
                  How to make yourself happy without any tension and anxiety
                </Typography>
  
                <Typography variant="p" sx={{
                  fontSize:"1.4rem",
                  fontWeight:400,
                  color:"rgb(136, 136, 136)"
                }} color="initial">
                  Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
                </Typography>
  
  
                <Box py={2}   sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
              }} >
                <img src={profilePic} className='profile-pic' alt="" />
                <div>
                  <Typography sx={{
                    display: "block"
                  }} variant="p" color="initial">Prashant Acharya</Typography>
                  <Typography variant="p" color="initial">CEO and Developer</Typography>
                </div>
              </Box>
  
              </Grid>
  
            </Grid>
          </SwiperSlide>
   
  
          <SwiperSlide style={{
            width: "100%",
            height:"35rem",
            
          }}>
            <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              <Grid item xs={6}>
  
                <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" className='swiper-img' alt="" />
  
              </Grid>
              <Grid item p={9} mt={3} xs={6}>
  
                <Typography variant="p" sx={{
                  fontSize: "1.7rem"
                }} color="initial">
                  <b>Business-Travel</b>  <em>July 05</em>
                </Typography>
  
  
                <Typography variant="h3" sx={{
                 fontWeight: "700",
                
                 fontSize:"4rem",
                 lineHeight:"4.8rem",
                 maxWidth: "100%"
                }} color="initial">
                  How to make yourself happy without any tension and anxiety
                </Typography>
  
                <Typography variant="p" sx={{
                  fontSize:"1.4rem",
                  fontWeight:400,
                  color:"rgb(136, 136, 136)"
                }} color="initial">
                  Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
                </Typography>
  
  
                <Box py={2}   sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
              }} >
                <img src={profilePic} className='profile-pic' alt="" />
                <div>
                  <Typography sx={{
                    display: "block"
                  }} variant="p" color="initial">Prashant Acharya</Typography>
                  <Typography variant="p" color="initial">CEO and Developer</Typography>
                </div>
              </Box>
  
              </Grid>
  
            </Grid>
          </SwiperSlide>
   
  
          <SwiperSlide style={{
            width: "100%",
            height:"35rem",
            
          }}>
            <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              <Grid item xs={6}>
  
                <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" className='swiper-img' alt="" />
  
              </Grid>
              <Grid item p={9} mt={3} xs={6}>
  
                <Typography variant="p" sx={{
                  fontSize: "1.7rem"
                }} color="initial">
                  <b>Business-Travel</b>  <em>July 05</em>
                </Typography>
  
  
                <Typography variant="h3" sx={{
                 fontWeight: "700",
                
                 fontSize:"4rem",
                 lineHeight:"4.8rem",
                 maxWidth: "100%"
                }} color="initial">
                  How to make yourself happy without any tension and anxiety
                </Typography>
  
                <Typography variant="p" sx={{
                  fontSize:"1.4rem",
                  fontWeight:400,
                  color:"rgb(136, 136, 136)"
                }} color="initial">
                  Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
                </Typography>
  
  
                <Box py={2}   sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
              }} >
                <img src={profilePic} className='profile-pic' alt="" />
                <div>
                  <Typography sx={{
                    display: "block"
                  }} variant="p" color="initial">Prashant Acharya</Typography>
                  <Typography variant="p" color="initial">CEO and Developer</Typography>
                </div>
              </Box>
  
              </Grid>
  
            </Grid>
          </SwiperSlide>
   
  
  
          <SwiperSlide style={{
            width: "100%",
            height:"35rem",
            
          }}>
            <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              <Grid item xs={6}>
  
                <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" className='swiper-img' alt="" />
  
              </Grid>
              <Grid item p={9} mt={3} xs={6}>
  
                <Typography variant="p" sx={{
                  fontSize: "1.7rem"
                }} color="initial">
                  <b>Business-Travel</b>  <em>July 05</em>
                </Typography>
  
  
                <Typography variant="h3" sx={{
                 fontWeight: "700",
                
                 fontSize:"4rem",
                 lineHeight:"4.8rem",
                  maxWidth: "100%"
                }} color="initial">
                  How to make yourself happy without any tension and anxiety
                </Typography>
  
                <Typography variant="p" sx={{
                  fontSize:"1.4rem",
                  fontWeight:400,
                  color:"rgb(136, 136, 136)"
                }} color="initial">
                  Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
                </Typography>
  
  
                <Box py={2}   sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
              }} >
                <img src={profilePic} className='profile-pic' alt="" />
                <div>
                  <Typography sx={{
                    display: "block"
                  }} variant="p" color="initial">Prashant Acharya</Typography>
                  <Typography variant="p" color="initial">CEO and Developer</Typography>
                </div>
              </Box>
  
              </Grid>
  
            </Grid>
          </SwiperSlide>
   
  
         
  
  
  
  
        </Swiper>
  
      </Box>
      )
}

export default Popular





