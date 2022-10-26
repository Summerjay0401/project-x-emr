import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faUser, faCalendarDays, faClipboard, faFlask, faPills, faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used

import { useNavigate } from "react-router-dom";

import "./Widget.css";

const Widget = ({ type }) => {
  const navigate = useNavigate();
  let data;

  const handleLinks = (link) => {
    navigate(link);
  }

  switch (type) {
    case "my-profile":
      data = {
        title: "MY PROFILE",
        link: "/my-profile",
        icon: (
            <FontAwesomeIcon icon={faUser}
            className="icon"
            style={{
              color: "#0089D0"
            }}
          />
        ),
      };
      break;
    case "appointments":
      data = {
        title: "APPOINTMENTS",
        link: "/appointments",
        icon: (
            <FontAwesomeIcon icon={faCalendarDays}
            className="icon"
            style={{
              color: "#F6911B"
            }}
          />
        ),
      };
      break;
    case "progress-notes":
      data = {
        title: "PROGRESS NOTES",
        link: "/progress-notes",
        icon: (
            <FontAwesomeIcon icon={faClipboard} 
            className="icon"
                style={{
                    color: "green"
                }}
          />
        ),
      };
      break;
    case "laboratory-results":
      data = {
        title: "LAB RESULTS",
        link: "lab-results",
        icon: (
            <FontAwesomeIcon icon={faFlask}
            className="icon"
            style={{
              color: "purple"
            }}
          />
        ),
      };
        break;
    case "my-medications":
    data = {
      title: "MY MEDICATIONS",
      link: "my-medications",
        icon: (
            <FontAwesomeIcon icon={faPills}             
                className="icon"
                size="lg"
            style={{
            color: "crimson"
            }} />
        ),
    };
    break;  
    case "messages":
    data = {
      title: "MY MESSAGES",
      link: "messages",
        icon: (
            <FontAwesomeIcon icon={faEnvelope}
            className="icon"
            style={{
            color: "#6460AA"
            }}
        />
        ),
    };
    break;  
    case "telehealth":
    data = {
      title: "CHAT WITH MY PROVIDER",
      link: "telehealth",
        icon: (
            <FontAwesomeIcon icon={faUserDoctor}
            className="icon"
            style={{
            color: "#00A9A4"
            }}
        />
        ),
    };
    break;  
    case "payments":
    data = {
      title: "PAYMENTS",
      link: "payments",
        icon: (
            <FontAwesomeIcon icon={faCreditCard}
            className="icon"
            style={{
            color: "#434343"
            }}
        />
        ),
    };
    break;  
    default:
    break;
  }

  return (
    <div className="widget" onClick={() => handleLinks(data.link)}>
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
      </div>
    </div>
  );
};

export default Widget;
