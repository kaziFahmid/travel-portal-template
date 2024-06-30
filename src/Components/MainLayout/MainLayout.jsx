import { Box } from '@mui/material'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  const location=useLocation()
  return (
    <>
<Box sx={{position:"relative",width:'100%'}}>
  <Box sx={{position:'fixed',top:"0%",zIndex:"1500",width:'100%'}}>
  <Header/>
  </Box>
</Box>
<Box sx={{minHeight:"100vh"}}>


     <Outlet/> 
     </Box>
{location?.pathname==='/onewaysearchresults'||location?.pathname==='/roundwaysearchresults'?<></>:<Footer/>}
    </>
  )
}

export default MainLayout