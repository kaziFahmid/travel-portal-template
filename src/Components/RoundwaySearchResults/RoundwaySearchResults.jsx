import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OnewayFlightFilter from '../OnewayFlightFilter/OnewayFlightFilter'
import RoundwayFlightCard from '../RoundwayFlightCard/RoundwayFlightCard'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import RoundwaySkeleton from '../RoundwaySkeleton/RoundwaySkeleton'
import RoundwayModifySearch from '../RoundwayModifySearch/RoundwayModifySearch'
import AirlinesSlider from '../AirlineSlider/AirlineSlider'
import RoundwayFlightFilter from '../RoundwayFlightFilter/RoundwayFlightFilter'


const RoundwaySearchResults = () => {

let [roundWayData,setRoundwayData]=useState([])
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
 returnDate,
  adultCount,
  childCount,
  infantCount, flightOptions}=location.state?.searchBody
  useEffect(() => {
    let fetchDataRoundway = async () => {

      try {
        const response = await fetch(`https://flyway.api.flyfarint.com/v.1.0.0/AirSearch/return.php?tripType=${flightOptions}&journeyfrom=${from}&journeyto=${to}&departuredate=${departureDate}&returndate=${returnDate}&adult=${adultCount}&child=${childCount}&infant=${infantCount}&agentId=FFA2654&cabinclass=${className}`);
        const data = await response.json();
        // Process the data here
        setRoundwayData(data)
        setData2(data)
        setData(data)
        setIsLoading(false)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchDataRoundway();
  }, [ from,
    to,
    fromText,
    toText,
    fromAirport,
    toAirport,
    className,
    departureDate,
   returnDate,
    adultCount,
    childCount,
    infantCount, flightOptions,isLoading]);
  
  return (
    <Box sx={{bgcolor:"var(---background-color)",minHeight:"100vh"}}>
      <Box sx={{ visibility: 'hidden'}}>
<Header/>
</Box>
    <Container maxWidth='xl' >
    <Box>
        <Grid container spacing={2}>
        <Grid item sm={12} lg={3}>
        <RoundwayFlightFilter  oneWayData={roundWayData} setOneWayData={setRoundwayData} data2={data2}setData2={setData2}        


data={data}setData={setData}





/>
        </Grid>
        <Grid item sm={12} lg={9}>

        <Box  >
 <RoundwayModifySearch  

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
  
  searchResult={roundWayData}
selectedAirLines={selectedAirLines}
setSelectedAirLines={setSelectedAirLines}
  
  
  
  
  
  
  
  />
</Box>


{isLoading?<Box>
 { [1,2,3,4,5]?.map((data)=> <RoundwaySkeleton/>)}
 
</Box>:
   <Box>
   {roundWayData?.map((data,index)=> <RoundwayFlightCard data={data}/>)}
   
          
          </Box>}

        </Grid>
        </Grid>
     
    </Box>
    </Container>
    </Box>
  )
}

export default RoundwaySearchResults