import { Button } from '@mui/material'
import React from 'react'

const FlightSearchButton = ({handleSubmit}) => {
  return (
    <Button  type='submit' variant='contained' sx={{borderRadius:"50px",boxShadow:'none',px:10,py:0.8,background:"var(--primary-color)",border:'2px solid var(--primary-color)',fontSize:"18px",textTransform:'capitalize'}}>Search</Button>
  )
}

export default FlightSearchButton