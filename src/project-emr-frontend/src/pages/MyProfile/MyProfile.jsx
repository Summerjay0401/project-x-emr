import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import PageTitle from '../../components/PageTitle';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function myProfile() {
    return (
      <div>
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <Box 
          sx={{
            width: 200,
            height: 200,
            border: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            }}>
              <p>PICTURE GOES HERE</p>
        </Box>

        <Box>
          <List>
            <ListItem>
              <ListItemText> Patient ID </ListItemText>
              <ListItemText> ID here </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> First Name </ListItemText>
              <ListItemText> First Name Here </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Last Name </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Gender </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Date of Birth </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Address </ListItemText>
                <ListItemText>
                  <ListItemText>Line 1</ListItemText>
                  <ListItemText>Line 2</ListItemText>
                </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Primary Phone </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Alternative Phone </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Emergency Contact </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

          </List>

          <Divider />

          <List>
            <ListItem>
              <ListItemText> Height </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Weight </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Blood Pressure </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Pulse </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

          </List>

          <Divider />
          
          <List>
            <ListItem>
              <ListItemText> PCP </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Diagnosis </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> ICD10 Code </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Date of Diagnosis </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

          </List>

          <Divider />
          
          <List>
            <ListItem>
              <ListItemText> Insurance Name </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Member ID </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Group ID (if applicable) </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText> Provider Services # </ListItemText>
              <ListItemText> 123123 </ListItemText>
            </ListItem>

          </List>
          </Box>
          </Container>
        </React.Fragment>

        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }