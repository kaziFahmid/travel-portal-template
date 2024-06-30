import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import AllSocialMediaLogins from '../AllSocialMediaLogins/AllSocialMediaLogins';
import { Link } from 'react-router-dom';

const StyledHr = styled('hr')({
  flex: 1,
  border: 'none',
  borderTop: '1px solid var(  --darkgrey-color)',
  margin: '0 10px',
});
const Signup = () => {
  return (
    <>
    <Box sx={{height:"100vh",display:'flex',}}>
     

<Box className='leftsideSignup' sx={{display:{xs:'none',lg:"block"},flexGrow:1,paddingTop:"76px"}}>
<Box sx={{textAlign:'center'}}>
<Typography sx={{color:"var(--white-color)",fontWeight:"600",fontSize:"60px"}}>Travelista Tours</Typography>
    <Typography sx={{color:"var(--white-color)",fontWeight:"500",fontSize:"17px"}}>Travel is the only purchase that enriches you in ways
beyond material wealth</Typography>
</Box>
</Box>
<Box className='rightsideSignup' sx={{flexGrow:1,paddingTop:"115px"}}>
<Box sx={{textAlign:'center'}}>
<Typography sx={{color:"var(--primary-color)",fontWeight:"600",fontSize:"80px"}}>Register Now</Typography>
   
</Box>


<Box sx={{mt:5}}>
<Container maxWidth='sm'>
<form style={{display:'flex',flexDirection:'column',gap:"24px"}} >
<Box>
       
       <TextField
       type='text'
       name='name'
         id="outlined-error-helper-text"
         label="Enter your Your Name"
         defaultValue="Hello World"
         sx={{width:'100%'}}
      
       />
     </Box>











<Box>
       
        <TextField
        type='email'
        name='email'
          id="outlined-error-helper-text"
          label="Enter your email"
          defaultValue="Hello World"
          sx={{width:'100%'}}
       
        />
      </Box>








      <Box>
       
       <TextField
       type='text'
       name='number'
         id="outlined-error-helper-text"
         label="Enter your Contact Number"
         defaultValue="Hello World"
         sx={{width:'100%'}}
      
       />
     </Box>










      <Box>
       
        <TextField
              name='password'
          id="outlined-error-helper-text"
          label="Enter your password"
          defaultValue="Hello World"
          sx={{width:'100%'}}
          type='password'
       
        />
      </Box>



     <Box sx={{textAlign:'center'}}>
       
      <Button type='submit' variant='contained' sx={{boxShadow:'none',px:8,py:2,fontSize:'16px'}}>Signup</Button>
     </Box>
</form>







<Box sx={{textAlign:'center',mt:2}}>
    <Typography sx={{color:'var(--mate-color)',fontWeight:"500"}}>Already have an account? <strong><Link to='/login' style={{color:"none"}}>Signin</Link></strong></Typography>
</Box>

</Container>
</Box>




</Box>







    </Box>
    
    
    
    
    
    </>
  )
}

export default Signup