import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FlightSearchBox from '../HomeSearchBox/FlightSearchBox/FlightSearchBox';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
const OnewayModifySearch = ({
    from,
    to,
    fromText,
    toText,
    fromAirport,
    toAirport,
    className,
    departureDate,
    adultCount,
    childCount,
    infantCount,flightOptions
}) => {
    const totalPassengers=adultCount+
    childCount+
    infantCount

const [openModifySearch,setOpenModifySearch]=useState(false)




  return (
    <Box >
    <Box sx={{bgcolor:'var(--white-color)',display:"flex",justifyContent:"space-between",alignItems:'center',px:1,py:1.8,borderRadius:"8px"}}>
        <Box>
       <Box sx={{display:"flex",justifyContent:"start",alignItems:'center',gap:"5px"}}>
        <Typography sx={{fontSize:"18px",fontWeight:"500"}}>{(fromText).split(',')[0]} ({from})</Typography>
        <Typography sx={{fontSize:"18px",fontWeight:"500"}}>—</Typography>
        <Typography sx={{fontSize:"18px",fontWeight:"500"}}>{(toText).split(',')[0]} ({to})</Typography>
       </Box>
<Box  sx={{display:"flex",justifyContent:"start",alignItems:'center',gap:"5px",mt:0.5}}>
    <Typography sx={{fontSize:'14px',fontWeight:"400"}}>{(flightOptions)} |</Typography>
    <Typography sx={{fontSize:'14px',fontWeight:"400"}}>{moment(departureDate)?.format('DD MMM YY')} |</Typography>
    <Typography sx={{fontSize:'14px',fontWeight:"400"}}>{totalPassengers} Traveller |</Typography>
    <Typography sx={{fontSize:'14px',fontWeight:"400"}}>{className}</Typography>
</Box>
        <Box>

        </Box>
        </Box>
        <Box>
            <Button onClick={()=>setOpenModifySearch(!openModifySearch)} variant='contained'  endIcon={<SearchIcon />} sx={{fontSize:"15px",bgcolor:"var(--secondary-color)",textTransform:'capitalize',px:4,py:1.6,boxShadow:"none"}}>Modify Search</Button>
            </Box>

    </Box>

 <Box sx={{borderRadius:"8px",mt:2,bgcolor:"var(--white-color)",borderRadius:"8px"}}>
 <Accordion expanded={openModifySearch} sx={{boxShadow:"none",borderRadius:"8px"}}>
        <AccordionSummary
        sx={{display:"none"}}
     
          aria-controls="panel1-content"
          id="panel1-header"
        >
        
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px",borderRadius:"8px",boxShadow:"none"}}>
        <Box sx={{bgcolor:'var(--white-color)',px:1,pb:3.5,pt:2}}>
<FlightSearchBox/>
</Box>

        </AccordionDetails>
      </Accordion>
 </Box>




    </Box>
  )
}

export default OnewayModifySearch