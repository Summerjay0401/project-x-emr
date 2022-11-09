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
              color: "#D5D6EA"
            }}
          />
        ),
      };
      break;
    case "appointments":
      data = {
        title: "APPOINTMENTS",
        link: "/scheduler",
        icon: (
            <FontAwesomeIcon icon={faCalendarDays}
            className="icon"
            style={{
              color: "#D7ECD9"
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
                    color: "#F5D5CB"
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
              color: "#89C5D3"
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
            color: "#E8ACBD"
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
            color: "#8C9DCF"
            }}
        />
        ),
    };
    break;  
    case "provider-list":
    data = {
      title: "PROVIDER LIST",
      link: "provider-list",
        icon: (
            <FontAwesomeIcon icon={faUserDoctor}
            className="icon"
            style={{
            color: "#89C5D3"
            }}
        />
        ),
    };
    break;  
    case "billing":
    data = {
      title: "BILLING",
      link: "billing",
        icon: (
            <FontAwesomeIcon icon={faCreditCard}
            className="icon"
            style={{
            color: "#9F9BB0"
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
