import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function myProfile() {
    return (
      <div>
        <Box 
          sx={{
            width: 200,
            height: 200,
            border: 'solid',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            }}>
              <h1>PICTURE GOES HERE</h1>
          </Box>

          <Box sx={{width: '300px', maxWidth: '300px', bgcolor: 'background.paper' }}>
        <List>
        <ListItem>
            <ListItemText sx={{ width: '150px'}}> Patient ID </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> First Name </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Last Name </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Gender </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Date of Birth </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Address </ListItemText>
            <ListItemText>
              <ListItemText>Line 1</ListItemText>
              <ListItemText>Line 2</ListItemText>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Primary Phone </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '150px'}}> Alternative Phone </ListItemText>
            <ListItemText> 123123 </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText sx={{ width: '500px'}}> Emergency Contact 
              <ListItemText> Name </ListItemText>
              <ListItemText> Number </ListItemText>
            </ListItemText>
            <ListItemText sx={{ width: '500px'}}> Emergency Contact 
              <ListItemText> Name </ListItemText>
              <ListItemText> Number </ListItemText>
            </ListItemText>
          </ListItem>


        </List>
        <Divider />
      </Box>

        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }