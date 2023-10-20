import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

const PostBox = () => {
  return (
    <>
    
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Paper>
        <img src="" alt="" />
    </Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper>2</Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper>3</Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper>4</Paper>
  </Grid>
</Grid>
    
    
    
    
    </>
   
     
  )
}

export default PostBox