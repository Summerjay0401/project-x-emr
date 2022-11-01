import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faUser, faCalendarDays, faClipboard, faFlask, faPills, faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used

import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  E M R
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Dan Ross
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Teacher
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Lists
            </Typography>
            <Item
              title="Appointments"
              to="/scheduler"
              icon={<FontAwesomeIcon icon={faCalendarDays} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Progress Notes"
              to="/progress-notes"
              icon={<FontAwesomeIcon icon={faClipboard} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lab Results"
              to="/lab-results"
              icon={<FontAwesomeIcon icon={faFlask} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Medications"
              to="/my-medications"
              icon={<FontAwesomeIcon icon={faPills} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Messages"
              to="/messages"
              icon={<FontAwesomeIcon icon={faEnvelope} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Useful
            </Typography>
            <Item
              title="Notifications"
              to="/notifications"
              icon={<NotificationsNoneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Services
            </Typography>
            <Item
              title="Chat with my Provider"
              to="/telehealth"
              icon={<FontAwesomeIcon icon={faUserDoctor} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Billing"
              to="/billing"
              icon={<FontAwesomeIcon icon={faCreditCard} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              User
            </Typography>
            <Item
              title="My Profile"
              to="/my-profile"
              icon={<FontAwesomeIcon icon={faUser} className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              to="/login"
              icon={<ExitToAppIcon className="icon" />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
