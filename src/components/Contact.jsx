import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material'
import { Box, Paper } from '@mui/material'

const Contact = () => {
  return (
    <>
    <Box>
        <Typography variant="h5" color="initial">Contact us</Typography>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
        <Button variant="contained"  >
  Send
</Button>
    </Box>

    </>
  )
}

export default Contact