import React, { useEffect } from 'react'
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
import BpIcon from "../../assets/images/bp-icon.png";
import BSugarIcon from "../../assets/images/bsugar-icon.jpg";
import PulseIcon from "../../assets/images/pulse-icon.png";
import O2SatIcon from "../../assets/images/o2-sat-icon.png";
import BodyTempIcon from "../../assets/images/body-temp-icon.jpg";

import VitalsService from "../../services/vitalService";
import { useAuth } from "../../context/auth.context";

export default function MyProfile() {

  let [state, dispatch] = useAuth();
  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    const vitals = VitalsService.getAllByUser(1);
    console.log(vitals);
  }, [])

  return (
    <div>
      <PageTitle title="My Profile" />

      {/* testing grid */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={6}>
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
          <Grid item xs={12} md={12} lg={6}>
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
              <Grid container spacing={3} sx={{ padding: "57px" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Card>
                    <Avatar
                      alt="blood pressure"
                      src={BpIcon}
                      variant="square"
                      sx={{ width: 150, height: 150 }}
                    />{" "}
                    Blood Pressure <br />
                    150/80
                  </Card>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Card>
                    <Avatar
                      alt="pulse"
                      src={PulseIcon}
                      variant="square"
                      sx={{ width: 150, height: 150 }}
                    />{" "}
                    Pulse <br />
                    120bpm
                  </Card>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Card>
                    <Avatar
                      alt="blood sugar"
                      src={BSugarIcon}
                      variant="square"
                      sx={{ width: 150, height: 150 }}
                    />{" "}
                    Blood Sugar <br />
                    130 mg/dL
                  </Card>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <Card>
                    <Avatar
                      alt="blood pressure"
                      src={O2SatIcon}
                      variant="square"
                      sx={{ width: 150, height: 150 }}
                    />{" "}
                    Oxygen Saturation <br />
                    95%
                  </Card>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <Card>
                    <Avatar
                      alt="blood pressure"
                      src={BodyTempIcon}
                      variant="square"
                      sx={{ width: 150, height: 150 }}
                    />{" "}
                    Temperature <br />
                    97.5 F
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
          <Grid item xs={12} md={6} lg={4}>
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
          <Grid item xs={12} md={6} lg={4}>
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
          <Grid item xs={12} md={6} lg={4}>
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
