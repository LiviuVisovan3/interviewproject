import "./styles.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChalkboardTeacher,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";
import Sidebar from "../Sidebar";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  async function fetchTeachers() {
    const response = await fetch("http://localhost:3001/api/teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const teachersData = await response.json();
    console.log("Teachers data:", teachers);
    setTeachers(teachersData);
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="teachers">
      <Sidebar />
      <div className="content">
        <h1>Teachers</h1>
        <h3>
          Explore your teachers easily and check individual profiles with a
          click
        </h3>
        <table>
          <thead>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Number of Classes</th>
            <th>Review Score</th>
            <th>Action</th>
          </thead>
          <tbody>
            {teachers.map((x) => (
              <tr>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="logo"
                  />

                  <div className="name-id">
                    <span>{x.name}</span>
                    <span className="id">ID: {x.id}</span>
                  </div>
                </td>
                <td>
                  <p>{x.subject}</p>
                </td>
                <td>{x.classes}</td>
                <td>
                  <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                    ★
                  </span>
                  {x.review}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
