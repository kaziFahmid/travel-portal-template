import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Grid, Rating } from '@mui/material';

export default function HotelCard() {
  const theme = useTheme();

  return (
<Box  sx={{bgcolor:"var(--white-color)",boxShadow:2}}>
   <Grid container spacing={2}>
<Grid item sm={9}>

<Grid container spacing={2} sx={{   ".MuiGrid-item": { paddingTop: "0px"}}}>
<Grid item sm={4}>
  <Box sx={{height:'200px'}}>
    <img src='https://mir-s3-cdn-cf.behance.net/projects/404/55c526157640527.Y3JvcCwxMjgwLDEwMDEsNzYsMTk.png'style={{objectFit:"cover",width:"100%",height:'100%'}}/>
  </Box>
</Grid>
<Grid item sm={8}>
  <Typography >sadsfasdfdsaf</Typography>
  <Typography>sadf</Typography>

</Grid>
   </Grid>



</Grid>
<Grid item sm={3} sx={{bgcolor:"var(--white-color)",boxShadow:1,textAlign:'right'}}>

 <Typography>adsf</Typography>
</Grid>
   </Grid>















</Box>
  );
}