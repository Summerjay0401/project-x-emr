import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function myProfile() {
    return (
      <div>
        <PageTitle title="My Profile"/>
        <Grid sx ={{margin: '5px'}} container spacing={2}>
        <Card sx={{ display: 'flex', maxWidth: 400, margin: '5px' }}>
        <Grid item xs={6} md={8}> 
          <CardContent>
            <Avatar alt="Remy Sharp" src="https://www.biography.com/.image/t_share/MTc5NjI0MTYxOTgxNzY4Nzgz/austin11.jpg" sx={{ width: 100, height: 100 }} />
            <Typography gutterBottom variant="h5" component="div"> Name </Typography>
            <Typography sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: 170 }} variant="body2" color="text.secondary">
              <List>
                <ListItemText> Date of Birth </ListItemText>
                <ListItemText> 12/31/1999 </ListItemText>
              </List>
              <List>
                <ListItemText> Weight </ListItemText>
                <ListItemText> 195lbs </ListItemText>
              </List>
              <List>
                <ListItemText> Age </ListItemText>
                <ListItemText> 45 </ListItemText>
              </List>
              <List>
                <ListItemText> Height </ListItemText>
                <ListItemText> 6'7 </ListItemText>
              </List>
            </Typography>
          </CardContent>
          </Grid>
          <Grid item xs={6} md={4}>
          <CardContent>
            <Typography sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 200 }} variant="body2" color="text.secondary">
              <List>
                <ListItemText> Address </ListItemText>
                <ListItemText> 12/31/1999 </ListItemText>
              </List>
              <List>
                <ListItemText> Primary Phone # </ListItemText>
                <ListItemText> 195lbs </ListItemText>
              </List>
              <List>
                <ListItemText> Alternative Phone # </ListItemText>
                <ListItemText> 45 </ListItemText>
              </List>
              <List>
                <ListItemText> E-mail </ListItemText>
                <ListItemText> 6'7 </ListItemText>
              </List>
            </Typography>
          </CardContent>
          </Grid>
        </Card>

        <Card sx={{ display: 'flex', maxWidth: 400, margin: '5px' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"> Notes </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
              <List>
                <ListItemText> 10/27/2022 </ListItemText>
                <ListItemText> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam voluptate neque excepturi amet voluptatum molestiae, voluptates, cumque similique dolorem nesciunt quae dicta unde ab non quis recusandae autem. Corrupti? </ListItemText>
              </List>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', maxWidth: 400, margin: '5px' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"> Current Medications </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
              <List>
                <ListItemText> Aspirin </ListItemText>
                <ListItemText> Lipitor </ListItemText>
                <ListItemText> Novolog </ListItemText>
                <ListItemText> Metoprolol </ListItemText>
              </List>
            </Typography>
          </CardContent>
        </Card>
        </Grid>

        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }