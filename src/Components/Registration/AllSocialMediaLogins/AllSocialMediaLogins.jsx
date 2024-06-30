import { Apple, Facebook, Google } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

const AllSocialMediaLogins = () => {
const socialLogin=[<Google/>,<Facebook/>,<Apple/>]
  return (
    <>



    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"10px"}}>
        <Button variant='contained' sx={{ '&:hover': {
       bgcolor: 'none', // Example hover background color
        },px:8,bgcolor:"#E7F2F5",boxShadow:"none",py:2}}><Google sx={{color:'var(--red-color)'}}/></Button>
        <Button variant='contained' sx={{'&:hover': {
         bgcolor: 'none', // Example hover background color
        },px:8,bgcolor:"#E7F2F5",boxShadow:"none",py:2}}><Facebook sx={{color:"var(--primary-color)"}}/></Button>
        <Button variant='contained' sx={{'&:hover': {
          bgcolor: 'none', // Example hover background color
        },px:8,bgcolor:"#E7F2F5",boxShadow:"none",py:2}}><Apple sx={{color:"var(--mate-color)"}}/></Button>
    </Box>
    
    
    
    
    </>
  )
}

export default AllSocialMediaLogins