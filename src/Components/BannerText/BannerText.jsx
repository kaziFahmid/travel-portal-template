import { Box, Typography } from '@mui/material'
import React from 'react'

const BannerText = () => {
  return (
    <Box sx={{display:'flex',flexDirection:"column",gap:"16px"}}>
      <Typography>
      <span style={{background:"var(--banner-bg-color)",padding:"5px 15px",color:"var(--white-color)",fontSize:'30px',fontWeight:"500"}}>Welcome To Our</span>
      </Typography>
      <Typography>
      <span style={{background:"var(--banner-bg-color)",padding:"5px 15px",color:"var(--white-color)",fontSize:'45px',fontWeight:"800"}}>Travel Agency</span>
      </Typography>
      <Typography>
      <span style={{background:"var(--banner-bg-color)",padding:"5px 15px",color:"var(--white-color)",fontSize:'18px',fontWeight:"400"}}>Welcome To Our
TRAVEL AGENCY
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.</span>
      </Typography>
    </Box>
  )
}

export default BannerText