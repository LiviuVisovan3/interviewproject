import "./styles.css";
import { Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faChalkboardTeacher,
  faUserGraduate,
  faSchool,
  faCalendarAlt,
  faGraduationCap,
  faComments,
  faMedal,
  faBookOpen,
  faBrain,
  faCog,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <div className="title">
          <img src="logo.png" alt="logo" />
          <h1>Logoipsum</h1>
        </div>
        <input placeholder="Search"></input>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faGauge} />
          <div className="menu-option" onClick={() => navigate("/home")}>
            Dashboard
          </div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <div className="menu-option" onClick={() => navigate("/teachers")}>
            Teachers
          </div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faUserGraduate} />
          <div className="menu-option">Students</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faSchool} />
          <div className="menu-option">Classroom</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <div className="menu-option">Calendars</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="menu-option">Grades</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faComments} />
          <div className="menu-option">Chats</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faMedal} />
          <div className="menu-option">Rewards</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faBookOpen} />
          <div className="menu-option">Curriculum setup</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faBrain} />
          <div className="menu-option">Psychological test</div>
        </div>
        <div className="option-wrapper">
          <FontAwesomeIcon icon={faCog} />
          <div className="menu-option">Settings</div>
        </div>

        <div className="account-box">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="logo"
          />
          <div className="account-info">
            <span>Jane Cooper</span>
            <p>janecooper@gmail.com</p>
          </div>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
