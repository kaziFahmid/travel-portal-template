import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ServiceCard() {
  return (
    <Card sx={{borderRadius:"8px"}}>
    <CardMedia
    
          component="img"
          height="300px"
          image="https://i.ibb.co/YWVXqQd/travel.jpg"
          alt="green iguana"
        />
    </Card>
  );
}