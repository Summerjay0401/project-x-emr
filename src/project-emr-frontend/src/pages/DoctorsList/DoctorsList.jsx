import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import PageTitle from '../../components/PageTitle';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DoctorsList() {
  return (
  <Card sx={{ maxWidth: 180 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="https://source.unsplash.com/random"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Dr. Dan Ross
      </Typography>
      <Typography variant="body2" color="text.secondary">
       BDS MDS - Periodontology 
        and Oral implantology. 20 Years 
        experience.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
}
// export default DoctorsList

// import * as React from 'react';
