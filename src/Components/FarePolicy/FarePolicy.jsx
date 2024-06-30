import { Box, Typography } from '@mui/material'
import React from 'react'

const FarePolicy = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'start',flexDirection:'column',gap:"25px"}}>
        <Box>
            <span style={{fontSize:"14px",background:'var(--primary-color)',color:"var(--white-color)",padding:"3px 50px"}} >
            Cancellation
            </span>
            <Typography sx={{mt:1,fontSize:"14px"}}>Refund Amount = Paid Amount - Airline Cancellation Fee</Typography>
        </Box>

        <Box>

        <span style={{fontSize:"14px",background:'var(--primary-color)',color:"var(--white-color)",padding:"3px 50px"}} >
        Re-Issue
            </span>
    
            <Typography sx={{mt:1,fontSize:"14px"}}>Re-issue Fee = Airline’s Fee + Fare Difference + Tax Difference + Service Charge</Typography>
        </Box>



        <Box>
        <span style={{fontSize:"14px",background:'var(--primary-color)',color:"var(--white-color)",padding:"3px 50px"}} >
        Refund
            </span>

            
            <Typography sx={{mt:1,fontSize:"14px"}}>Refund Fee = Airline’s Fee + Service Charge</Typography>
        </Box>






        
        <Box>
        <span style={{fontSize:"14px",background:'var(--primary-color)',color:"var(--white-color)",padding:"3px 50px"}} >
        Void
            </span>
            <Typography sx={{mt:1,fontSize:"14px"}}>Void Fee = Airline’s Fee</Typography>
        </Box>
    </Box>
  )
}

export default FarePolicy