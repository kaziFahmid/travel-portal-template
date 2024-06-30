import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SignupCard = () => {
  return (
    <Box sx={{bgcolor:"var(--white-color)"}}>
        <Box sx={{textAlign:'center'}}>
            <Typography sx={{fontSize:"30px",fontWeight:'600',color:'var(--primary-color)'}}>Registar Now</Typography>
        </Box>
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

      <Box sx={{textAlign:'right'}}>
       
      <Typography sx={{color:"var(  --darkgrey-color)",}}>Forgot Password</Typography>
     </Box>



     <Box sx={{textAlign:'center'}}>
       
      <Button type='submit' variant='contained' sx={{boxShadow:'none',px:8,py:2,fontSize:'16px'}}>Login</Button>
     </Box>
</form>
    </Box>
  )
}

export default SignupCard