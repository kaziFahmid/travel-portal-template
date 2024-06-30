import { Box, Typography } from '@mui/material'
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FlightIcon from '@mui/icons-material/Flight';
import FlightSearchBox from './FlightSearchBox/FlightSearchBox';

const HomeSearchBox = () => {
    const [value, setValue] = React.useState('1');
   
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <Box>
 <Box sx={{ width: '100%', typography: 'body1',borderBottom:"3px solid var(--primary-color)" }}>
      <TabContext value={value}>
        <Box  sx={{display:'flex',justifyContent:"center"}}  >
          <TabList       onChange={handleChange} aria-label="lab API tabs example" >
            <Tab  sx={{px:5,bgcolor:'var(--white-color)',minHeight:"50px",borderTopLeftRadius:"50px"}} icon={<FlightIcon sx={{transform:"rotate(40deg)"}}/>} iconPosition='start'label='Flights' value="1" />
            <Tab sx={{px:5,bgcolor:'var(--white-color)' ,minHeight:"50px"}}  icon={<FlightIcon/>} iconPosition='start' label="Hotels" value="2" />
            <Tab  sx={{px:5,bgcolor:'var(--white-color)' ,minHeight:"50px",borderTopRightRadius:"50px"}}  icon={<FlightIcon/>} iconPosition='start' label="Visas" value="3" />
          </TabList>
        </Box>
   <Box sx={{bgcolor:"var(--white-color)",zIndex:1300}}>
   <TabPanel value="1">
    <FlightSearchBox/>
   </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
   </Box>
      </TabContext>
    </Box>
    </Box>
  )
}

export default HomeSearchBox