import React from 'react';
import PageTitle from '../../components/PageTitle';
import {Card, CardContent, ListItem, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Div from "../../components/Div/Div";
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';


const Billing = () => {
    const {t} = useTranslation();
    return (
        <div>
            <PageTitle title="Billing" />
            <Box sx={{display:"flex", justifyContent:"space-evenly"}}>
            <Card>
            <CardContent>
                <Stack direction={"column"} spacing={2}>
                    <Grid item xs={7}>
                        <Typography
                            component={"div"}
                            variant={"body1"}
                            mb={1}
                            >
                            <Typography sx={{display:"flex", justifyContent:"center", color:"gray"}} variant={"h4"}>University of Pennsylvania Medical Center</Typography>
                                    <List>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Diagnostic Services</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Guarantor #27382764 (Dan Ross)</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Patients included: You</ListItem>
                                </List>
                            <Typography sx={{display:"flex", justifyContent:"center"}} variant={"h1"}>$190</Typography>
                            </Typography>
                            <Typography sx={{display:"flex", justifyContent:"center"}}
                                    variant={"h6"}
                                    color={"text.secondary"}
                                    mb={2}                          
                            >
                                OUTSTANDING BALANCE
                                </Typography>
                                <Div sx={{textAlign: 'center'}}>
                                <Typography variant={"h6"} color={"error"} my={1.5}>PAST DUE</Typography>
                                <Link to="/payments"><Button sx={{ fontSize: "medium", backgroundColor:"#6870fa" }} variant={"contained"}>Pay Now</Button></Link>
                            </Div>
                    </Grid>
                </Stack>
            </CardContent>
                </Card>
                <Card>
            <CardContent>
                <Stack direction={"column"} spacing={2}>
                    <Grid item xs={7}>
                        <Typography
                            component={"div"}
                            variant={"body1"}
                            mb={1}
                            >
                            <Typography sx={{display:"flex", justifyContent:"center", color:"gray"}} variant={"h4"}>University of Pennsylvania Medical Center</Typography>
                                    <List>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Emergency Services</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Guarantor #27382764 (Dan Ross)</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Patients included: You</ListItem>
                                </List>
                            <Typography sx={{display:"flex", justifyContent:"center"}} variant={"h1"}>$500</Typography>
                            </Typography>
                            <Typography sx={{display:"flex", justifyContent:"center"}}
                                    variant={"h6"}
                                    color={"text.secondary"}
                                    mb={2}                          
                            >
                                OUTSTANDING BALANCE
                                </Typography>
                                <Div sx={{textAlign: 'center'}}>
                                <Typography variant={"h6"} color={"error"} my={1.5}>PAST DUE</Typography>
                                <Link to="/payments"><Button sx={{ fontSize: "medium", backgroundColor:"#6870fa" }} variant={"contained"}>Pay Now</Button></Link>
                            </Div>
                    </Grid>
                </Stack>
            </CardContent>
                </Card>
                <Card>
            <CardContent>
                <Stack direction={"column"} spacing={2}>
                    <Grid item xs={7}>
                        <Typography
                            component={"div"}
                            variant={"body1"}
                            mb={1}
                            >
                            <Typography sx={{display:"flex", justifyContent:"center", color:"gray"}} variant={"h4"}>University of Pennsylvania Medical Center</Typography>
                                    <List>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Surgery</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Guarantor #27382764 (Dan Ross)</ListItem>
                                    <ListItem sx={{display:"flex", justifyContent:"center"}}>Patients included: You</ListItem>
                                </List>
                            <Typography sx={{display:"flex", justifyContent:"center"}} variant={"h1"}>$1200</Typography>
                            </Typography>
                            <Typography sx={{display:"flex", justifyContent:"center"}}
                                    variant={"h6"}
                                    color={"text.secondary"}
                                    mb={2}                          
                            >
                                OUTSTANDING BALANCE
                                </Typography>
                                <Div sx={{textAlign: 'center'}}>
                                <Typography variant={"h6"} color={"error"} my={1.5}>PAST DUE</Typography>
                                <Link to="/payments"><Button sx={{ fontSize: "medium", backgroundColor:"#6870fa" }} variant={"contained"}>Pay Now</Button></Link>
                            </Div>
                    </Grid>
                </Stack>
            </CardContent>
             </Card>   
        </Box>
        <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", fontWeight: "550", minWidth: "100px",}} variant="contained" className='btn'>Go Back</Button></Link>
        </div>
    );
};

export default Billing;