import React from 'react'
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PageTitle from "../../components/PageTitle";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MedicationIcon from "@mui/icons-material/Medication";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

import ProfilePic from "../../assets/images/dan-profile-pic.png";

import Vitals from './Vitals';

export default function MyProfile() {

  return (
    <div>
      <PageTitle title="My Profile" />

      {/* testing grid */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  padding: "30px",
                  justifyContent: "center",
                }}
              >
                <Grid sx={{ margin: "5px" }} container spacing={2}>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={12}
                  >
                    <Avatar
                      alt="dan"
                      src={ProfilePic}
                      sx={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Typography
                      sx={{ textAlign: "center" }}
                      gutterBottom
                      variant="h3"
                      component="div"
                    >
                      {" "}
                      Name <br />
                      Dan Ross
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    item
                    xs={12}
                    md={12}
                    lg={6}
                  >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxWidth: 300,
                      }}
                      variant="body2"
                      color="text.secondary">
                      <List>
                          <ListItemText> Date of Birth </ListItemText>
                          <ListItemText> 12/31/1999 </ListItemText>
                          <br />
                          <ListItemText> Gender </ListItemText>
                          <ListItemText> Male </ListItemText>
                          <br />
                          <ListItemText> Weight </ListItemText>
                          <ListItemText> 195lbs </ListItemText>
                          <br />
                          <ListItemText> Age </ListItemText>
                          <ListItemText> 45 </ListItemText>
                          <br />
                          <ListItemText> Height </ListItemText>
                          <ListItemText> 6'7 </ListItemText>
                        </List>
                      </Box>
                  </Grid>

                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    item
                    xs={12}
                    md={12}
                    lg={6}
                  >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxWidth: 300,
                      }}
                      variant="body2"
                      color="text.secondary">
                      <List>
                        <ListItemText> Address </ListItemText>
                        <ListItemText> 123 Main St </ListItemText>
                        <ListItemText> Brooklyn, NY 11532 </ListItemText>
                        <br />
                        <ListItemText> Primary Phone Number </ListItemText>
                        <ListItemText> 917-778-9881 </ListItemText>
                        <br />
                        <ListItemText> Alternative Phone Number </ListItemText>
                        <ListItemText> 347-654-9876 </ListItemText>
                        <br />
                        <ListItemText> E-mail </ListItemText>
                        <ListItemText> testing@email.com </ListItemText>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid>
              <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "5px",
                    padding: "30px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography gutterBottom variant="h3" component="div">
                    {" "}
                    Vitals{" "}
                  </Typography>
                  <Vitals/>
                </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  padding: "30px",
                  justifyContent: "center",
                  height: "250px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  Notes{" "}
                </Typography>
                <Box variant="body2" color="text.secondary">
                  <List>
                    <ListItemText> 10/27/2022 </ListItemText>
                    <ListItemText>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Hic aperiam voluptate neque excepturi amet voluptatum
                      molestiae, voluptates, cumque similique dolorem nesciunt
                      quae dicta unde ab non quis recusandae autem. Corrupti?{" "}
                    </ListItemText>
                  </List>
                </Box>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  padding: "30px",
                  justifyContent: "center",
                  height: "250px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  {" "}
                  Current Medications{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <List>
                    <ListItemText>
                      <MedicationIcon /> Aspirin{" "}
                    </ListItemText>
                    <ListItemText>
                      <MedicationIcon /> Lipitor{" "}
                    </ListItemText>
                    <ListItemText>
                      <MedicationIcon /> Novolog{" "}
                    </ListItemText>
                    <ListItemText>
                      <MedicationIcon /> Metoprolol{" "}
                    </ListItemText>
                  </List>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  padding: "30px",
                  justifyContent: "center",
                  height: "250px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  {" "}
                  Diagnosis{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    maxWidth: 400,
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                    }}
                  >
                    <ListItemText> ICD10 Code: </ListItemText>
                    <ListItemText> Diagnosis: </ListItemText>
                    <ListItemText> Date of Diagnosis: </ListItemText>
                    <ListItemText> Provider Name: </ListItemText>
                    <ListItemText> Provider Phone Number: </ListItemText>
                  </List>
                </Box>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  padding: "30px",
                  justifyContent: "center",
                  height: "250px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  {" "}
                  Insurance Information{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    maxWidth: 400,
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <ListItemText> Insurance Plan </ListItemText>
                    <ListItemText> Member ID </ListItemText>
                    <ListItemText> Group ID </ListItemText>
                    <ListItemText> Provider Services # </ListItemText>
                  </List>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Link to="/">
        <Button
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "15px",
            fontWeight: "550",
            minWidth: "100px",
          }}
          variant="contained"
          className="btn"
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
}
