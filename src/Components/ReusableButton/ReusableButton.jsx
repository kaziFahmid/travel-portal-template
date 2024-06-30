import { Button } from '@mui/material'
import React from 'react'

const ReusableButton = () => {
  return (
    <Button variant='contained'
    sx={{bgcolor:"var(--primary-color)",boxShadow:"none",textTransform:"capitalize",px:5,borderRadius:"50px",fontSize:"14px"}}>Join us</Button>
  )
}

export default ReusableButton