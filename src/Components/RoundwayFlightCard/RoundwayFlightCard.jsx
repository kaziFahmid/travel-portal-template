import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import moment from "moment";
import FarePolicy from "../FarePolicy/FarePolicy";
const RoundwayFlightCard = (props) => {
  const{
    system,
    segment,
    triptype,
    career,
    careerName,
    basePrice,
    taxes,
    netfare,
    price,
    agentPrice,
    clientPrice,
    comission,
    comissiontype,
    comissionvalue,
    farecurrency,
    airlinescomref,
    pricebreakdown,
    goFareBasisCode,
    backFareBasisCode,
    godeparture,
    godepartureTime,
    godepartureDate,
    goarrival,
    goarrivalTime,
    goarrivalDate,
    backdeparture,
    backdepartureTime,
    backdepartureDate,
    backarrival,
    backarrivalTime,
    backarrivalDate,
    goflightduration,
    backflightduration,
    refundable,
    seat,
    cabinClass,
    segments,
    transit
  }=props?.data
  const [openDetails, setOpenDetails] = useState(false);
  const [value, setValue] = React.useState("1");
  const [value2, setValue2] = React.useState("1");
const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "var(--white-color)", borderRadius: "9px",mb:4 }}>
      <Box
        sx={{
          ".MuiContainer-root": { paddingRight: "12px", paddingLeft: "60px" },
          pb: 1.7,
        
        }}
      >
        <Container>
          <Grid
            sx={{ ".MuiGrid-item": { paddingTop: "12px", paddingLeft: "0px" } }}
            container
            spacing={2}
          >
            <Grid
              item
              md={9}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
              }}
            >
              {/* go */}
              <Grid
                sx={{
                  ".MuiGrid-item": { paddingTop: "0px", paddingLeft: "0px" },
                }}
                container
                spacing={2}
              >
                <Grid item md={3.8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                  <Box
                     
                     >
                       <img
                         src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                         width="38px"
                         height="38px"
                       />
                     </Box>

                    <Box>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                      {careerName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "var(--medium-gray-color)",
                        }}
                      >
                   {segments?.go.map((segment,indx)=><span> {indx!==0&&','} {segment?.operatingcareer} {segment?.operatingflight}</span>)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <AirplanemodeActiveIcon
                      sx={{
                        transform: "rotate(90deg)",
                        color: "var(--primary-color)",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        textWrap: "nowrap",
                      }}
                    >
                        {moment(godepartureDate).format('DD MMM YY')}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                    {godepartureTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "var(--medium-gray-color)",
                        fontSize: "14px",
                      }}
                    >
                    {godeparture}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <HorizontalRuleIcon />
                    <ArrowForwardIcon />
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                    {goarrivalTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "var(--medium-gray-color)",
                        fontSize: "14px",
                      }}
                    >
                          {goarrival}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "left" }}>
                  <Typography
                      sx={{
                        fontWeight: "18px",
                        fontWeight: "500",
                        color: "var(--medium-gray-color)",
                      }}
                    >
                      {goflightduration}
                    </Typography>
                    <Typography sx={{ fontWeight: "14px", fontWeight: "500" }}>
                      {segment==='1'&&'Direct Flight'||segment==='2'&&'On Stop Flight'||segment==='3'&&'2 Stop Flight'}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>



              {/* return */}

              <Grid
                sx={{
                  ".MuiGrid-item": { paddingTop: "0px", paddingLeft: "0px" },
                }}
                container
                spacing={2}
              >
                <Grid item md={3.8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                  <Box
                     
                     >
                       <img
                         src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                         width="38px"
                         height="38px"
                       />
                     </Box>

                    <Box>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                      {careerName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "var(--medium-gray-color)",
                        }}
                      >
                   {segments?.back.map((segment,indx)=><span> {indx!==0&&','} {segment?.operatingcareer} {segment?.operatingflight}</span>)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <AirplanemodeActiveIcon
                      sx={{
                        transform: "rotate(90deg)",
                        color: "var(--primary-color)",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        textWrap: "nowrap",
                      }}
                    >
                        {moment(backdepartureDate).format('DD MMM YY')}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                    {backdepartureTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "var(--medium-gray-color)",
                        fontSize: "14px",
                      }}
                    >
                    {backdeparture}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <HorizontalRuleIcon />
                    <ArrowForwardIcon />
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                    {backarrivalTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "var(--medium-gray-color)",
                        fontSize: "14px",
                      }}
                    >
                          {backarrival}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "left" }}>
                  <Typography
                      sx={{
                        fontWeight: "18px",
                        fontWeight: "500",
                        color: "var(--medium-gray-color)",
                      }}
                    >
                      {backflightduration}
                    </Typography>
                    <Typography sx={{ fontWeight: "14px", fontWeight: "500" }}>
                      {segment==='1'&&'Direct Flight'||segment==='2'&&'On Stop Flight'||segment==='3'&&'2 Stop Flight'}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={3}>
              <Box
                sx={{
                  ".MuiContainer-root": {
                    paddingRight: "24px",
                    paddingLeft: "24px",
                  },
                  pb: 1.3,
                  borderRadius: "9px",
                  border: "1px solid var( --darkgrey-color)",
                }}
              >
                <Container sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                    BDT {agentPrice}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500" ,color:refundable==='Refundable'?"var(--green-color)":"var(--red-color)"}}>
                  {refundable}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                  {seat} Seats Available
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "8px",
                      flexDirection: "column",
                      mt: 2,
                    }}
                  >
                    <Button
                      onClick={() => setOpenDetails(!openDetails)}
                      variant="contained"
                      endIcon={<ArrowDropDownIcon />}
                      sx={{
                        bgcolor: "var(--mate-color)",
                        px: 3,
                        py: 1,
                        borderRadius: "8px",
                        boxShadow: "none",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      Open details
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: "var(--primary-color)",
                        px: 3,
                        py: 1,
                        borderRadius: "8px",
                        boxShadow: "none",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      Select
                    </Button>
                  </Box>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ boxShadow: "none", borderRadius: "12px" }}>
        <Accordion
          expanded={openDetails}
          sx={{ boxShadow: "none", borderRadius: "20px" }}
        >
          <AccordionSummary
            sx={{ display: "none" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          ></AccordionSummary>
          <AccordionDetails sx={{padding:"0px",  ".MuiContainer-root": { paddingRight: "12px", },paddingBottom:"15px"}}
          >
            <Container>
              <Grid container spacing={1}>
                <Grid item md={8}>
                  <Box
                    sx={{
                      width: "100%",
                      bgcolor: "#F9FAFE",
                      borderRadius: "9px",
                    }}
                  >
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <TabContext value={value}>
                        <Box>
                          <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            style={{ justifyContent: "flex-start" }}
                          >
                            <Tab
                              label={
                                <Box sx={{ textAlign: "left" }}>
                                  <Typography sx={{ fontSize: "13px",textTransform:"capitalize", }}>
                                    Departure
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "start",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                      }}
                                    >
                                     {godeparture}
                                    </Typography>
                                    <AirplanemodeActiveIcon
                                      sx={{ transform: "rotate(90deg)" }}
                                    />
                                    <Typography
                                      sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      {goarrival}
                                    </Typography>
                                  </Box>
                                </Box>
                              }
                              value="1"
                              sx={{
                                flex: 1,
                                alignItems: "start",
                                borderRight:
                                  "2px solid var(  --medium-gray-color)",
                                borderBottom:
                                  "2px solid var(  --medium-gray-color)",
                              }}
                            />

<Tab
                              label={
                                <Box sx={{ textAlign: "left" }}>
                                  <Typography sx={{ fontSize: "13px",textTransform:"capitalize", }}>
                                  Return
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "start",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                      }}
                                    >
                                     {backdeparture}
                                    </Typography>
                                    <AirplanemodeActiveIcon
                                      sx={{ transform: "rotate(90deg)" }}
                                    />
                                    <Typography
                                      sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      {backarrival}
                                    </Typography>
                                  </Box>
                                </Box>
                              }
                              value="2"
                              sx={{
                                flex: 1,
                                alignItems: "start",
                                borderRight:
                                  "2px solid var(  --medium-gray-color)",
                                borderBottom:
                                  "2px solid var(  --medium-gray-color)",
                              }}
                            />
                            <Tab
                      label="Fare Policy"
                              value="3"
                              sx={{textTransform:"capitalize",flex: 1,alignItems: 'start',borderBottom:'2px solid var(  --medium-gray-color)'  }}
                            />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                        {segments?.go.map((segment,index)=> <>  
     <Box sx={{display:'flex',justifyContent:'start',alignItems:"flex-start",gap:"8px"}}>
        <Box >
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segment?.marketingcareer}.png`}
                        width="38px"
                        style={{objectFit:"cover",}}
                        height="38px"
                      />
                    </Box>
         <Box>
         <Box sx={{display:'flex',justifyContent:'start',placeItems:'center',gap:"17px"}}>
                    <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:"5px"}}>
                 <Typography sx={{fontWeight:"600",fontSize:'16px',color:"var(--mate-color)"}}>{moment(segment?.departureTime).format('hh:mm')}</Typography>
                 <Typography sx={{fontSize:"13px"}}>{moment(segment?.departureTime).format('DD MMM YY')}</Typography>
                        </Box>

                        <Box sx={{mt:1}}>
                     <ArrowForwardIcon/>
                        </Box>

                        <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:"5px"}}>
                 <Typography sx={{fontWeight:"600",fontSize:'16px',color:"var(--mate-color)"}}>{moment(segment?.arrivalTime).format('hh:mm')}</Typography>
                 <Typography sx={{fontSize:"13px"}}>{moment(segment?.arrivalTime).format('DD MMM YY')}</Typography>
                        </Box>
                    </Box>

<Typography sx={{mb:1,fontSize:'13px',fontWeight:"500",color:"var(--mate-color)"}}>{segment?.flightduration}</Typography>

                <Box sx={{display:'flex',flexDirection:'column',gap:"6px"}}>
                <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.departure} - {segment?.departureAirport},{segment?.departureLocation}  to  {segment?.arrival} - {segment?.arrivalAirport} ,{segment?.arrivalLocation}</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.marketingcareerName}-{segment?.operatingcareer} {segment?.operatingflight}</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.CabinClass} / {segment?.bookingcode} Class</Typography>
                    </Box>

                </Box>
         </Box>

        </Box>
        
        {index<segments?.go.length-1&&<Box sx={{bgcolor:"rgb(224,231,239)",textAlign:'center',fontSize:'12px',py:0.4,my:2}}>
Change plane at {segment?.arrivalAirport}   ||  {segment?.arrivalLocation}   ||  Transit Time : {transit?.go[`transit${index+1}`]}
</Box>
}
        
        
        </>)}
                        </TabPanel>
                        <TabPanel value="2">

                        {segments?.back.map((segment,index)=> <>  
     <Box sx={{display:'flex',justifyContent:'start',alignItems:"flex-start",gap:"8px"}}>
        <Box >
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segment?.marketingcareer}.png`}
                        width="38px"
                        style={{objectFit:"cover",}}
                        height="38px"
                      />
                    </Box>
         <Box>
         <Box sx={{display:'flex',justifyContent:'start',placeItems:'center',gap:"17px"}}>
                    <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:"5px"}}>
                 <Typography sx={{fontWeight:"600",fontSize:'16px',color:"var(--mate-color)"}}>{moment(segment?.departureTime).format('hh:mm')}</Typography>
                 <Typography sx={{fontSize:"13px"}}>{moment(segment?.departureTime).format('DD MMM YY')}</Typography>
                        </Box>

                        <Box sx={{mt:1}}>
                     <ArrowForwardIcon/>
                        </Box>

                        <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:"5px"}}>
                 <Typography sx={{fontWeight:"600",fontSize:'16px',color:"var(--mate-color)"}}>{moment(segment?.arrivalTime).format('hh:mm')}</Typography>
                 <Typography sx={{fontSize:"13px"}}>{moment(segment?.arrivalTime).format('DD MMM YY')}</Typography>
                        </Box>
                    </Box>

<Typography sx={{mb:1,fontSize:'13px',fontWeight:"500",color:"var(--mate-color)"}}>{segment?.flightduration}</Typography>

                <Box sx={{display:'flex',flexDirection:'column',gap:"6px"}}>
                <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.departure} - {segment?.departureAirport},{segment?.departureLocation}  to  {segment?.arrival} - {segment?.arrivalAirport} ,{segment?.arrivalLocation}</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.marketingcareerName}-{segment?.operatingcareer} {segment?.operatingflight}</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:"start",alignItems:'center',gap:"4px"}}>
                    <FiberManualRecordIcon sx={{fontSize:"16px",color:"var(  --darkgrey-color)"}}/>
                    <Typography sx={{fontSize:'12px',minWidth:"fit-content"}}>{segment?.CabinClass} / {segment?.bookingcode} Class</Typography>
                    </Box>

                </Box>
         </Box>

        </Box>
        
        {index<segments?.back.length-1&&<Box sx={{bgcolor:"rgb(224,231,239)",textAlign:'center',fontSize:'12px',py:0.4,my:2}}>
Change plane at {segment?.arrivalAirport}   ||  {segment?.arrivalLocation}   ||  Transit Time : {transit?.back[`transit${index+1}`]}
</Box>
}
        
        
        </>)}







                        </TabPanel>











<TabPanel  value="3">
<FarePolicy/>
</TabPanel>











                      </TabContext>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4}>
<Box sx={{width:"100%",bgcolor:"#E9F0F8",borderRadius:"9px"}}>
<TabContext value={value2}>
        <Box >
          <TabList onChange={handleChange2} aria-label="lab API tabs example">
            <Tab  label="Fare Summary" value="1" sx={{textTransform:"capitalize", flex: 1,padding:" 26.50px",borderRight:'2px solid var(  --medium-gray-color)',borderBottom:'2px solid var(  --medium-gray-color)' }}  />
            <Tab  label="Baggage" value="2"  sx={{textTransform:"capitalize", flex: 1,padding:" 26.50px" ,borderBottom:'2px solid var(  --medium-gray-color)'}} />

          </TabList>
        </Box>
        <TabPanel value="1">
        <Box sx={{display:"flex",justifyContent:'space-between',alignItems:'center',mb:1}}>
        <Typography sx={{fontSize:"13px",fontWeight:'500',color:"var(  --medium-dark-blue)"}}>Fare Summary</Typography>
        <Typography sx={{fontSize:"13px",fontWeight:'500',color:"var(  --medium-dark-blue)"}}>Base Fare</Typography>





        </Box>
<Box sx={{borderBottom:"1px solid var(  --medium-dark-blue) ",pb:2}}>
{pricebreakdown?.map((prices,priceIndx)=>    
       <Box sx={{display:"flex",justifyContent:'space-between',alignItems:'center',mb:1}}>
        <Typography sx={{fontWeight:"500",color:"var(--mate-color)"}}>{prices?.PaxType} x {prices?.PaxCount}</Typography>
        <Typography sx={{fontWeight:"500",color:"var(--mate-color)"}}> {prices?.BaseFare}</Typography>
       </Box>
)}

</Box>
       
       




<Box sx={{display:"flex",justifyContent:'space-between',alignItems:'center',py:1,borderTop:"1px solid var(  --medium-dark-blue) ",borderBottom:"1px solid var(  --medium-dark-blue) "}}>
        <Typography sx={{fontWeight:"500",color:"var(  --medium-dark-blue)",fontSize:"12px"}}>Tax</Typography>
        <Typography sx={{fontWeight:"500",color:"var(--mate-color)"}}>BDT {pricebreakdown.reduce((acc, item) => {
  return acc + parseInt(item.Tax);
}, 0)}</Typography>
       </Box>


       <Box sx={{display:"flex",justifyContent:'space-between',mt:1}}>
      <Box>
        <Typography sx={{fontWeight:"500",color:"var(--mate-color)"}}>Total</Typography>
      <Typography sx={{fontWeight:"500",color:"var(  --medium-dark-blue)",fontSize:"12px"}}> {pricebreakdown.reduce((acc, item) => {
  return acc + parseInt(item.PaxCount);
}, 0)} Travellers </Typography>
      </Box>
        <Typography sx={{fontWeight:"500",color:"var(--mate-color)"}}> {}</Typography>
       </Box>



        </TabPanel>
        
        <TabPanel value="2">
   {pricebreakdown?.map((prices)=> <Box sx={ { pb:1,borderBottom:"1px solid var(  --medium-dark-blue) ",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
      <Box>
      <Typography sx={{fontSize:"16px",color:"var(  --mate-color)",fontWeight:"500"}}>{prices?.PaxType}</Typography>
      </Box>
      <Box sx={{textAlign:'right'}}>
        <Typography sx={{fontSize:"13px",color:"var(  --medium-dark-blue)",fontWeight:"500"}}>Baggage</Typography>
        <Typography sx={{fontSize:"14px",color:"var(  --mate-color)",fontWeight:"500"}}>{prices?.Bags}</Typography>
      </Box>
  
    </Box>)}
        </TabPanel>

      </TabContext>
    </Box>
</Grid>
              </Grid>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default RoundwayFlightCard;
