import React from 'react';
import Avatar from "@mui/material/Avatar";
import {authUser} from "./fake-db";
import {ListItemIcon, ListItemText, ThemeProvider, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import JumboDdPopover from "./CustomPopover";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import './AuthDropdown.css'

// import useJumboTheme from "@jumbo/hooks/useJumboTheme";
// import useJumboAuth from "@jumbo/hooks/useJumboAuth";

import styled from "@mui/material/styles/styled";

const Div = styled('div')({});

const AuthUserDropdown = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        // <ThemeProvider theme={theme}>
            <JumboDdPopover
                triggerButton={
                    <PersonOutlinedIcon/>
                }
            >
                <Div sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: theme => theme.spacing(2.5),
                }}>
                    <Avatar src={authUser.profile_pic} alt={authUser.name} sx={{width: 60, height: 60, mb: 2}}/>
                    <Typography variant={"h5"}>{authUser.name}</Typography>
                    <Typography variant={"body1"} color="text.secondary">{authUser.handle}</Typography>
                </Div>
                <Divider/>
                <nav>
                    <List disablePadding sx={{pb: 1}}>
                        <ListItemButton>
                            <ListItemIcon sx={{minWidth: 36}}>
                                <PersonOutlineIcon/>
                            </ListItemIcon>
                            <Link to="/my-profile" className='link'><ListItemText primary="Profile" sx={{my: 0}}/></Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{minWidth: 36}}>
                                <EditOutlinedIcon/>
                            </ListItemIcon>
                            <Link to="/my-profile" underline='hover'><ListItemText primary="Edit Profile" sx={{my: 0}}/></Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{minWidth: 36}}>
                                <RepeatOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText onClick={() => navigate("/samples/content-layout")} primary="Switch User"
                                          sx={{my: 0}}/>
                        </ListItemButton>
                        <ListItemButton onClick={onLogout}>
                            <ListItemIcon sx={{minWidth: 36}}>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{my: 0}}/>
                        </ListItemButton>
                    </List>
                </nav>
            </JumboDdPopover>
        // </ThemeProvider>
    );
};

export default AuthUserDropdown;
