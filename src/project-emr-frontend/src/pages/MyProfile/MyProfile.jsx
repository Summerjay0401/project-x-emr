import React from "react";
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
import BpIcon from "../../assets/images/bp-icon.jpg";
import BSugarIcon from "../../assets/images/bsugar-icon.jpg";
import PulseIcon from "../../assets/images/pulse-icon.png";

export default function myProfile() {
  return (
    <div>
      <PageTitle title="My Profile" />

      {/* testing grid */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <Grid sx={{ margin: "5px" }} container spacing={2}>
                <Grid item xs={6}>
                  <CardContent>
                    <Avatar
                      alt="dan"
                      src={ProfilePic}
                      sx={{ width: 100, height: 100 }}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      {" "}
                      Name <br></br>
                      Dan Ross
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxWidth: 170,
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      <List>
                        <ListItemText> Date of Birth </ListItemText>
                        <ListItemText> 12/31/1999 </ListItemText>
                      </List>
                      <List>
                        <ListItemText> Gender </ListItemText>
                        <ListItemText> Male </ListItemText>
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

                <Grid item xs={6}>
                  <CardContent>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxWidth: 300,
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      <List>
                        <ListItemText> Address </ListItemText>
                        <ListItemText> 12/31/1999 </ListItemText>
                      </List>
                      <List>
                        <ListItemText> Primary Phone Number </ListItemText>
                        <ListItemText> 917-778-9881 </ListItemText>
                      </List>
                      <List>
                        <ListItemText> Alternative Phone Number </ListItemText>
                        <ListItemText> 347-654-9876 </ListItemText>
                      </List>
                      <List>
                        <ListItemText> E-mail </ListItemText>
                        <ListItemText> testing@email.com </ListItemText>
                      </List>
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  Diagnosis{" "}
                </Typography>
                <Typography
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
                    <ListItemText> ICD10 Code: </ListItemText>
                    <ListItemText> Diagnosis: </ListItemText>
                    <ListItemText> Date of Diagnosis: </ListItemText>
                    <ListItemText> Provider Name: </ListItemText>
                    <ListItemText> Provider Phone Number: </ListItemText>
                  </List>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  Notes{" "}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  Current Medications{" "}
                </Typography>
                <Typography
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
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  Vitals{" "}
                </Typography>
                <Typography
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
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ListItemText
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Avatar
                        alt="blood pressure"
                        src={BpIcon}
                        variant="square"
                        sx={{ width: 100, height: 100 }}
                      />{" "}
                      Blood Pressure <br />
                      150/80
                    </ListItemText>
                    <ListItemText
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {" "}
                      <Avatar
                        alt="pulse"
                        src={PulseIcon}
                        variant="square"
                        sx={{ width: 100, height: 100 }}
                      />{" "}
                      Pulse <br />
                      120bpm
                    </ListItemText>
                    <ListItemText
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {" "}
                      <Avatar
                        alt="blood sugar"
                        src={BSugarIcon}
                        variant="square"
                        sx={{ width: 100, height: 100 }}
                      />{" "}
                      Blood Sugar <br />
                      130 mg/dL
                    </ListItemText>
                  </List>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: "flex", margin: "5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  Insurance Information{" "}
                </Typography>
                <Typography
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
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Link to="/">
        <Button sx={{ margin: "15px" }} variant="outlined">
          Go Back
        </Button>
      </Link>
    </div>
  );
}
