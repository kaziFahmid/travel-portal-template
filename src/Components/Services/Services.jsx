import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from './ServiceCard';
import { Box } from '@mui/material';
import ReusableButton from '../ReusableButton/ReusableButton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Services = () => {
   
  return (
    <>
    

    <Box  sx={{borderRadius:"8px"}}>
      

     
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {[1,2,3,4,5,6,5]?.map((data)=>  <SwiperSlide ><ServiceCard/></SwiperSlide>)}
      </Swiper>
    </Box>
    
    
    <Box sx={{textAlign:'center',mt:6}}>
        <ReusableButton/>
    </Box>
    
    </>
  )
}

export default Services