import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OnewayFlightFilter from '../OnewayFlightFilter/OnewayFlightFilter'
import OnewayFlightCard from '../OnewayFlightCard/OnewayFlightCard'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import OnewayModifySearch from '../OnewayModifySearch/OnewayModifySearch'

import OnewaySkeleton from '../OnewaySkeleton/OnewaySkeleton'
import AirlinesSlider from '../AirlineSlider/AirlineSlider'

const OnewaySearchResults = () => {
let [oneWayData,setOneWayData]=useState([])
let [data2,setData2]=useState([])
let [data,setData]=useState([])
const [isLoading,setIsLoading]=useState(true)
const location=useLocation()

let [selectedAirLines,setSelectedAirLines]=useState([])

const {  from,
  to,
  fromText,
  toText,
  fromAirport,
  toAirport,
  className,
  departureDate,
  adultCount,
  childCount,
  infantCount, flightOptions}=location.state?.searchBody
  useEffect(() => {
    let fetchDataOneway = async () => {

      try {
        const response = await fetch(`https://flyway.api.flyfarint.com/v.1.0.0/AirSearch/oneway.php?tripType=${flightOptions?.toLowerCase()}&journeyfrom=${from}&journeyto=${to}&departuredate=${departureDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}&agentId=FFA2654&cabinclass=${className}`);
        const data = await response.json();
        // Process the data here
        setOneWayData(data)
        setData2(data)
        setData(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchDataOneway();
  }, [from,
    to,
    fromText,
    toText,
    fromAirport,
    toAirport,
    className,
    departureDate,
    adultCount,
    childCount,
    infantCount,flightOptions,isLoading]);
  
  return (
    <Box sx={{bgcolor:"var(---background-color)",minHeight:"100vh"}} >
<Box sx={{ visibility: 'hidden'}}>
<Header/>
</Box>
    <Container maxWidth='xl' >
    <Box>
        <Grid container spacing={2}>
        <Grid item sm={12} lg={3} >
<OnewayFlightFilter  oneWayData={oneWayData} setOneWayData={setOneWayData} data2={data2}setData2={setData2}        


data={data}setData={setData}





/>
        </Grid>
        <Grid item sm={12} lg={9}>
<Box  >
 <OnewayModifySearch  

 from={from}
    to={ to}
    fromText={ fromText}
    toText={  toText}
    fromAirport={    fromAirport}
    toAirport={toAirport}
    className={   className}
    departureDate={    departureDate}
    adultCount={   adultCount}
    childCount={childCount}
    infantCount={  infantCount}
    flightOptions={ flightOptions}
 
 />

 
</Box>



<Box sx={{bgcolor:'var(--white-color)',mb:4}}>
  <AirlinesSlider          
  
  searchResult={ oneWayData}
selectedAirLines={selectedAirLines}
setSelectedAirLines={setSelectedAirLines}
  
  
  
  
  
  
  
  />
</Box>




{isLoading?
<Box>
  {[1,2,3,4,5]?.map((data)=><OnewaySkeleton/>)}
</Box>
:   <Box >
{oneWayData?.map((data,index)=><OnewayFlightCard data={data}/>)}
       
          </Box>
}











        </Grid>
        </Grid>
     
    </Box>
    </Container>
    </Box>
  )
}

export default OnewaySearchResults