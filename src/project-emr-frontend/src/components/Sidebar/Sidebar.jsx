import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faUser, faCalendarDays, faClipboard, faFlask, faPills, faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used

import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

import "./Sidebar.css";

const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">E M R</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/scheduler" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <span>Appointments</span>
            </li>
          </Link>
          <Link to="/progress-notes" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faClipboard} className="icon" />
            <span>Progress Notes</span>
            </li>
          </Link>
          <Link to="/lab-results" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faFlask} className="icon" />
            <span>Lab Results</span>
            </li>
          </Link>
          <Link to="/my-medications" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faPills} className="icon" />
            <span>My Medications</span>
            </li>
          </Link>
          <Link to="/messages" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>My Messages</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <Link to="/telehealth" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faUserDoctor} className="icon" />
            <span>Chat with my Provider</span>
            </li>
          </Link>
          <Link to="/payments" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            <span>Payments</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/my-profile" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span>My Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
