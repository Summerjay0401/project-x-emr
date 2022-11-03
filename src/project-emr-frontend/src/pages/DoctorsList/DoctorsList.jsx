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
import { CardActionArea, Grid } from "@mui/material";

export default function DoctorsList() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={2} xs={3} md={2.4}>
          <Card sx={{ maxWidth: 180 }}>
            <CardActionArea></CardActionArea>
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
        </Grid>
        <Grid item lg={2} xs={3} md={2.4}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
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
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Summer Jade Rosal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BDS MDS - Dentist
                and Oral implantology. 20 Years
                experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Joseph Leano
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BDS MDS - Dermotologist
                and Oral implantology. 15 Years
                experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Ahmadu Jalloh
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BDS MDS - Cardiologist
                and Oral implantology. 15 Years
                experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Brittany Remus
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BDS MDS - Periodontology
                and Oral implantology. 15 Years
                experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}>
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Jovy Ira Naraga
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
        </Grid>
      </Grid>
    </div>
  );
}

// export default DoctorsList
// {/* // import * as React from 'react'; */}