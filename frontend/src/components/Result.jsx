import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Typography } from '@mui/material';
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'
import { Link } from 'react-router-dom';

function Result() {
  return (


    <Box  sx={{
        width:"100%",
       
        padding:"0 2rem",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        
    
      }}    >
    <Grid container spacing={3} sx={{
        overflow:"hidden",
        
    }} >
      {/* First Column */}
      <Grid item xs={12} sm={8}>
        {/* Content for the first column */}
    
        <Paper  style={{ width: '100%', minHeight:"15rem", height: 'auto', border: '1px solid #ddd', padding: '1.4rem',display:"flex",gap:"1.4rem",margin:"2rem 0" }}>
         <img style={{
            maxWidth:"30%",
            display:"inline-block",
            
         }} src={f} alt="img" />
         <Box sx={{
            display:"flex",
            flexDirection:"column"
         }} >
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
            </Box>
        </Paper>

       
        <Paper  style={{ width: '100%', minHeight:"15rem", height: 'auto', border: '1px solid #ddd', padding: '1.4rem',display:"flex",gap:"1.4rem",margin:"2rem 0" }}>
         <img style={{
            maxWidth:"30%",
            display:"inline-block",
            
         }} src={f} alt="img" />
         <Box sx={{
            display:"flex",
            flexDirection:"column"
         }} >
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
            </Box>
        </Paper>


        <Paper  style={{ width: '100%', minHeight:"15rem", height: 'auto', border: '1px solid #ddd', padding: '1.4rem',display:"flex",gap:"1.4rem",margin:"2rem 0" }}>
         <img style={{
            maxWidth:"30%",
            display:"inline-block",
            
         }} src={f} alt="img" />
         <Box sx={{
            display:"flex",
            flexDirection:"column"
         }} >
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
            </Box>
        </Paper>

        <Paper  style={{ width: '100%', minHeight:"15rem", height: 'auto', border: '1px solid #ddd', padding: '1.4rem',display:"flex",gap:"1.4rem",margin:"2rem 0" }}>
         <img style={{
            maxWidth:"30%",
            display:"inline-block",
            
         }} src={f} alt="img" />
         <Box sx={{
            display:"flex",
            flexDirection:"column"
         }} >
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
            </Box>
        </Paper>

       


      </Grid>

      {/* Second Column */}
      <Grid item xs={12} sm={4} >
        {/* Content for the second column */}
        <Paper style={{ width:"31%",  border: '1px solid #ddd', height:"100%",margin:"2rem 0", padding: '16px',position:"absolute",display:"flex" ,flexDirection:"column"}}>
         <Typography pb={3} variant="h4" color="initial">Check out our other product </Typography>

                 
                <a href="https://streamzone25.netlify.app/">
                  <img src="https://stripe-camo.global.ssl.fastly.net/461f0b7deb2d032b33e1885dc64b8c36a58093617db119cd526def5058df919d/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546c51795232464d4f556c334f584a5959324a6166475a735833526c63335266646c464453586b344d57643255545a574d6e5246636e64705a324643576b526f30307264686166444474" alt="" />
                </a>
                <a href="https://streamzone25.netlify.app/" className='dex'>Dexgame</a>
                <a href="https://streamzone25.netlify.app/" className='link' >
                  
                  PRAXANT.
                  
                  </a>


              


        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
}

export default Result;
