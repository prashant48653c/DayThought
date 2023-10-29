import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Typography } from '@mui/material';
import f from '../assets/f.jpeg'
import profilePic from '../assets/ph.webp'

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
        <Paper style={{   border: '1px solid #ddd', height:"100%",margin:"2rem 0", padding: '16px',position:"absolute",display:"flex",justifyContent:"center"}}>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKRcNcXI4eKhrWGp2k9h6TGyyEUNKGZ91qQ&usqp=CAU"} style={{
            maxWidth:"100%"
          }} alt="" />
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
}

export default Result;
