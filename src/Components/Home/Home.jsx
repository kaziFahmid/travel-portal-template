import { Box, Container } from '@mui/material'
import React from 'react'
import BannerText from '../BannerText/BannerText'
import HomeSearchBox from '../HomeSearchBox/HomeSearchBox'
import Title from '../Title/Title'
import Services from '../Services/Services'

const Home = () => {
  return (
    <>
    <Box className='banner'>
<Container maxWidth='xl' >

<BannerText/>
<Box sx={{marginTop:"50px",}}>

<HomeSearchBox/>
    
</Box>




</Container>

    </Box>
   <Container maxWidth='xl'>

<Box sx={{mt:5}}>
<Title title={'Services'} text={'asdfdsaf'}/>
<Box sx={{mt:5}}>
<Services/>
</Box>
</Box>




</Container>
    
    </>
  )
}

export default Home