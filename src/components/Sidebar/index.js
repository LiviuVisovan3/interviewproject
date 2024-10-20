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

const menuOptions = [
  "Dashboard",
  "Teachers",
  "Students",
  "Classroom",
  "Calendars",
  "Grades",
  "Chats",
  "Rewards",
  "Curriculum setup",
  "Psychological test",
  "Settings",
];

const menuOptionsIcons = [
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
];

export default function Sidebar() {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <div className="title">
          <img src="logo.png" alt="logo" />
          <h1>Logoipsum</h1>
        </div>
        <input placeholder="Search"></input>
        {menuOptions.map((x, index) => (
          <div className="option-wrapper">
            <FontAwesomeIcon icon={menuOptionsIcons[index]} />
            <div className="menu-option">{x}</div>
          </div>
        ))}
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
