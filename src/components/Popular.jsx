import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic from '../assets/ph.webp'
import 'swiper/css';
import 'swiper/css/bundle'; 
 
import { Box, Typography, Container, Grid } from '@mui/material';
 
 
const Popular = () => {
    return (
        <>
         <Box p={8} sx={{
        textAlign: "center"
      }} >
        <Typography variant="h3" sx={{
          fontWeight: "700",
         
          fontSize:"4rem",
          lineHeight:"4.8rem"

        }} color="initial">Most Popular Post</Typography>
      </Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >



        <SwiperSlide style={{
          width: "100%"
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />

            </Grid>
            <Grid item p={9} xs={6}>

              <Typography variant="p" sx={{
                fontSize: "1.7rem"
              }} color="initial">
                <b>Business-Travel</b>  <em>July 05</em>
              </Typography>


              <Typography variant="h3" sx={{
               fontWeight: "700",
               letterSpacing: 0.6,
               fontSize:"4rem",
               lineHeight:"4.8rem",
                maxWidth: "95%"
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


              <Box py={1} pb={3} sx={{
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
          width: "100%"
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />

            </Grid>
            <Grid item p={9} xs={6}>

              <Typography variant="p" sx={{
                fontSize: "1.7rem"
              }} color="initial">
                <b>Business-Travel</b>  <em>July 05</em>
              </Typography>


              <Typography variant="h3" sx={{
                fontWeight: "800",
                maxWidth: "80%"
              }} color="initial">
                How to make yourself happy without any tension and anxiety
              </Typography>

              <Typography variant="p" sx={{
                fontWeight: "500",
                fontSize: "1.8rem",
                maxWidth: "80%"
              }} color="initial">
                Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
              </Typography>


              <Box>
                <Typography variant="p" color="initial">Prashant Acharya</Typography>
                <em>CEO and Founder</em>
              </Box>

            </Grid>

          </Grid>
        </SwiperSlide>

        <SwiperSlide style={{
          width: "100%"
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />

            </Grid>
            <Grid item p={9} xs={6}>

              <Typography variant="p" sx={{
                fontSize: "1.7rem"
              }} color="initial">
                <b>Business-Travel</b>  <em>July 05</em>
              </Typography>


              <Typography variant="h3" sx={{
                fontWeight: "800",
                maxWidth: "80%"
              }} color="initial">
                How to make yourself happy without any tension and anxiety
              </Typography>

              <Typography variant="p" sx={{
                fontWeight: "500",
                fontSize: "1.8rem",
                maxWidth: "80%"
              }} color="initial">
                Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
              </Typography>


              <Box>
                <Typography variant="p" color="initial">Prashant Acharya</Typography>
                <em>CEO and Founder</em>
              </Box>

            </Grid>

          </Grid>
        </SwiperSlide>

        <SwiperSlide style={{
          width: "100%"
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />

            </Grid>
            <Grid item p={9} xs={6}>

              <Typography variant="p" sx={{
                fontSize: "1.7rem"
              }} color="initial">
                <b>Business-Travel</b>  <em>July 05</em>
              </Typography>


              <Typography variant="h3" sx={{
                fontWeight: "800",
                maxWidth: "80%"
              }} color="initial">
                How to make yourself happy without any tension and anxiety
              </Typography>

              <Typography variant="p" sx={{
                fontWeight: "500",
                fontSize: "1.8rem",
                maxWidth: "80%"
              }} color="initial">
                Horses typically have a strong and muscular body with four long legs, a flowing mane, and a tail. Their coat can come in various colors and patterns, including bay, chestnut, black, white, and gray. Some horses have distinct markings on their faces or legs.
              </Typography>


              <Box>
                <Typography variant="p" color="initial">Prashant Acharya</Typography>
                <em>CEO and Founder</em>
              </Box>

            </Grid>

          </Grid>
        </SwiperSlide>





      </Swiper>
        </>
      );
}

export default Popular





