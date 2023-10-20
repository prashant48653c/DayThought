import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Box, Typography, Container } from '@mui/material';
const Popular = () => {
    return (
        <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Container maxWidth="lg">
              this is slide one
              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />
            </Container>
          </SwiperSlide>
          <SwiperSlide> 
          <Container maxWidth="lg">
              this is slide one
              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />
            </Container>
          </SwiperSlide>
          <SwiperSlide> 
          <Container maxWidth="lg">
              this is slide one
              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />
            </Container>
          </SwiperSlide> <SwiperSlide> 
          <Container maxWidth="lg">
              this is slide one
              <img src="https://thumbs.dreamstime.com/b/journal-notecopy-placed-outdoors-evening-against-defocused-lights-city-writing-blogging-student-concept-selective-169657469.jpg" alt="" />
            </Container>
          </SwiperSlide>
          
        </Swiper>
        <Box>
            <Typography variant="h4" color="initial">Trending</Typography>
        </Box>
        </>
      );
}

export default Popular





