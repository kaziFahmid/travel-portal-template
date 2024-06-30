import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  const connectWithUs=[{title:"facebook" ,link:"/facebook"},{title:"insta",link:"/facebook"},{title:"linkedin",link:"/facebook"}]
  const aboutUs=[{title:"Who we are",link:"/facebook"},{title:"Privacy policy",link:"/facebook"},{title:"Partners",link:"/facebook"}]
  const supports=[{title:"Need help?",link:"/facebook"},{title:"Contact us",link:"/facebook"},{title:"Partners",link:"/facebook"}]
  const TravelWithUs=[{title:"Popular flight routes and destinations",link:"/facebook"},{title:"Hotel destinations A-Z",link:"/facebook"},{title:"Travel Inspiration",link:"/facebook"}]
  return (
    <footer style={{background:"var(---background-color)",paddingTop:"45px",paddingBottom:"35px"}}>
     <Container maxWidth='xl'>
<Box>
<Grid container spacing={0} sx={{gap:{xs:"20px",sm:'0px'}}} >
<Grid xs={12} md={3}>
  <Box>
    <Typography sx={{fontSize:"14px",color:"var(--mate-color)",fontWeight:"600"}}>Connect with us</Typography>
<Box>
{connectWithUs?.map((data,index)=><Typography sx={{color:"var(--medium-gray-color)",fontSize:"14px"}}>{data?.title}</Typography>)}
</Box>


  </Box>
</Grid>
<Grid  xs={12} md={3}>
<Box>
    <Typography sx={{fontSize:"14px",color:"var(--mate-color)",fontWeight:"600"}}>About us</Typography>
    <Box>
{aboutUs?.map((data,index)=><Typography sx={{color:"var(--medium-gray-color)",fontSize:"14px"}}>{data?.title}</Typography>)}
</Box>
  </Box>
</Grid>
<Grid  xs={12} md={3}>
<Box>
    <Typography sx={{fontSize:"14px",color:"var(--mate-color)",fontWeight:"600"}}>Support</Typography>
    <Box>
{ supports?.map((data,index)=><Typography sx={{color:"var(--medium-gray-color)",fontSize:"14px"}}>{data?.title}</Typography>)}
</Box>
  </Box>
</Grid>
<Grid  xs={12} md={3}>
<Box>
    <Typography sx={{fontSize:"14px",color:"var(--mate-color)",fontWeight:"600"}}>Travel with us</Typography>
    <Box>
{ TravelWithUs?.map((data,index)=><Typography  sx={{color:"var(--medium-gray-color)",fontSize:"14px"}}onClick={()=>navigate(data?.link)} >{data?.title}</Typography>)}
</Box>
  </Box>
</Grid>
</Grid>



<Box sx={{borderTop:"1px solid var(--medium-gray-color) ",mt:6,pt:3}}>
  <Typography sx={{color:"var(--medium-gray-color)",fontSize:"12px"}}>© Copyright 2024 by SDBDKA Solutions | B2C OTA Portal</Typography>
</Box>


</Box>

     </Container>
    </footer>
  )
}

export default Footer