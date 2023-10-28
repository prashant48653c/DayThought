import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import { useNavigate } from 'react-router-dom'
const PostBox = () => {

  let arr=[1,2,3,4,5,6]
  const navigate=useNavigate();

  const goToBlog=(e)=>{
   
    navigate("/blog")
}

  return (
    <Container sx={{
      margin:0,
      padding:0,
    
       maxWidth:"100%"
    }} >

      <Grid my={4}  sx={{
       maxWidth: "100%",
        display:"flex",
        justifyContent:"flex-start",
        gap:"6rem",
        alignItems:"center",
        
      }} height={"auto"} py={5} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


 {
  arr.map((elem,i)=>[


<Grid  key={i} ml={3} p={2} sm={3} sx={{
          


        }}>

          <Paper onClick={goToBlog}   sx={{
            padding:"1rem",
            height: "auto",
            width:"30rem",
            display: "flex",
            justifyContent:"center",
            flexDirection: "column",
            cursor:"pointer",
            background:"#F4EEFF"
          }} >
            <img className='post-box-img' src={f} alt="" />
            <Typography variant="p" py={1} color="initial">Business, Travel — July 2, 2020</Typography>
            <Typography variant="p" sx={{
              fontWeight: "700",
              fontSize: "1.8rem",
              lineHeight: "2.1rem"
            }} color="initial">How to be happy in life</Typography>

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
                }} variant="p" color="initial">Prashant Acharya</Typography>
                <Typography variant="p" color="initial">CEO and Developer</Typography>
              </div>
            </Box>

          </Paper>
        </Grid>


])
}

      
 
       


      </Grid>




    </Container>


  )
}

export default PostBox