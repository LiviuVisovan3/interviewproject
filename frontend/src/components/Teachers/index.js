import "./styles.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChalkboardTeacher,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";

export default function Teachers() {
  async function fetchTeachers() {
    const response = await fetch("http://localhost:3001/api/teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const teachers = await response.json();
    console.log("Teachers data:", teachers);
    return teachers;
  }
  const teachers = fetchTeachers();

  return (
    <div className="teachers">
      {teachers &&
        teachers.map((x) => (
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="logo"
            />
            <div>
              <span>{x.name}</span>
              <p>Subject: Geography</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>{" "}
          </div>
        ))}
    </div>
  );
}
