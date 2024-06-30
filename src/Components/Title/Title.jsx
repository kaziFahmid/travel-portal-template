import { Box, Typography } from '@mui/material'
import React from 'react'

const Title = ({title,text}) => {
  return (
    <Box sx={{textAlign:'center'}}>
    <Typography sx={{fontSize:"30px",color:"var(--mate-color)",fontWeight:"600"}}>{title}</Typography>
    <Typography sx={{fontSize:"14px",color:"var( --medium-gray-color)"}}>{text}</Typography>
    </Box>
  )
}

export default Title