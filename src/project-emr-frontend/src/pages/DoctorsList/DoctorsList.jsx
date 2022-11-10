import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import img6 from "../../assets/images/img6.jpeg"
import img2 from "../../assets/images/img2.jpeg"
import img3 from "../../assets/images/img3.jpeg"
import img4 from "../../assets/images/img4.jpeg"
import img7 from "../../assets/images/img7.jpeg"
import img1 from "../../assets/images/img1.jpeg"

import PageTitle from '../../components/PageTitle';
import "./DoctorsList.css";
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
          <Card sx={{ maxWidth: 180 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img6}
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
          </Card>
        </Grid>
        <Grid item lg={2} xs={3} md={2.4}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img6}
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
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img1}
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
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img7}
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
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img3}
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
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img2}
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
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 190 }}className="cardList">
            <CardActionArea></CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img4}
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

// export default DoctorsList
// {/* // import * as React from 'react'; */}