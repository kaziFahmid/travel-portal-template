
import React from 'react'
import { Box, Button, Container, Grid, Skeleton, Typography } from "@mui/material";

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
const OnewaySkeleton = () => {
  return (
    <Box sx={{  bgcolor: "var(--white-color)",
    borderRadius: "9px",mb:4}}>
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
              }}
            >
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
                 <Skeleton variant="circular" width={45} height={45} />
                    </Box>
         
                    <Box sx={{width:"100%"}}>
                    <Skeleton animation="wave" sx={{width:'70%'}} />
                    <Skeleton animation="wave" sx={{width:'40%'}} />
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
                  <Box sx={{width:"100%"}}>
           
                    <Skeleton animation="wave" sx={{width:'60%'}} />
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
            <Box sx={{width:"100%",textAlign:'center'}}>
            <Skeleton animation="wave" sx={{width:'80%'}} />
            <Skeleton animation="wave" sx={{width:'80%'}} />
           </Box>

           <Box sx={{width:"100%",textAlign:'center'}}>
            <Skeleton animation="wave" sx={{width:'80%'}} />
            <Skeleton animation="wave" sx={{width:'80%'}} />
           </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
               
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "var(--medium-gray-color)",
                        fontSize: "14px",
                      }}
                    >
                    
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
                  <Box sx={{width:"100%",textAlign:'center'}}>
            <Skeleton animation="wave" sx={{width:'80%'}} />
            <Skeleton animation="wave" sx={{width:'80%'}} />
           </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  // ".MuiContainer-root": {
                  //   paddingRight: "24px",
                  //   paddingLeft: "24px",
                  // },
                  pb: 1.3,
                  borderRadius: "9px",
                 
                }}
              >
                <Box sx={{ textAlign: "right",pl:3 ,display:"flex",justifyContent:'end',flexDirection:'column'}}>
                <Box sx={{width:"100%",textAlign:'center',display:"flex",justifyContent:'end',flexDirection:'column'}}>
            <Skeleton animation="wave" sx={{width:'100%'}} />
            <Box sx={{display:"flex",justifyContent:'end'}}>
            <Skeleton animation="wave" sx={{width:'60%'}} />
            </Box>
           </Box>
           <Skeleton animation="wave" sx={{width:'100%',height:"60px"}} />
                    <Skeleton animation="wave" sx={{width:'100%',height:"60px"}} />
                </Box>
              </Box>
            </Grid>
          </Grid>

          
        </Container>













      </Box>




    </Box>
  )
}

export default OnewaySkeleton