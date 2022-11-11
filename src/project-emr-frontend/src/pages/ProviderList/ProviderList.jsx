import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Header from '../../components/Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from "@mui/material";
import VitalsService from "../../services/vitalService";
import { useAuth } from "../../context/auth.context";

import img6 from "../../assets/images/img6.jpeg"
import img2 from "../../assets/images/img2.jpeg"
import img3 from "../../assets/images/img3.jpeg"
import img4 from "../../assets/images/img4.jpeg"
import img7 from "../../assets/images/img7.jpeg"
import img1 from "../../assets/images/img1.jpeg"


import "./ProviderList.css";

export default function ProviderList() {
  return (
    <div>
      <Header title="Provider List" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={2}>
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
                experience.P
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
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
        <Grid item xs={12} md={4} lg={2}>
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
        <Grid item xs={12} md={4} lg={2}>
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
        <Grid item xs={12} md={4} lg={2}>
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
        <Grid item xs={12} md={4} lg={2}>
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
        <Grid item xs={12} md={4} lg={2}>
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
      <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", fontWeight: "550", minWidth: "100px",}} variant="contained" className='btn'>Go Back</Button></Link>
    </div>
  );
}







