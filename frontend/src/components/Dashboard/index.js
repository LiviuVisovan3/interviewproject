import "./styles.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChalkboardTeacher,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../Sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data3 = {
  labels: ["Class 11", "Class 05", "Class 01", "Class 07", "Class 12"],
  datasets: [
    {
      label: "Filled",
      data: [80, 75, 70, 60, 50],
      backgroundColor: "rgba(54,113, 244, 1)",
      borderRadius: 5,
    },
    {
      label: "Empty",
      data: [20, 25, 30, 40, 50],
      backgroundColor: "rgba(54,113, 244, 0.5)",
      borderRadius: 5,
    },
  ],
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Present",
      data: [50, 75, 30, 90, 60, 80],
      backgroundColor: "rgba(126,62, 230, 1)",
      borderRadius: 5,
    },
    {
      label: "Absent",
      data: [30, 15, 40, 20, 25, 20],
      backgroundColor: "rgba(255, 205, 86, 1)",
      borderRadius: 5,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Attendance",
      position: "top",
      align: "start",
      color: "black",
      font: {
        size: 20,
        weight: "bold",
      },
      padding: {
        bottom: -10,
      },
    },
    legend: {
      position: "top",
      align: "center",
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${tooltipItem.dataset.label}: ${percentage}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,

      grid: {
        display: true,
        borderDash: [5, 5],
        color: "rgba(0, 0, 0, 0.1)",
      },
      border: {
        display: false,
      },
      ticks: {
        stepSize: 25,
      },
    },
  },
  barThickness: 20,
};

const options2 = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top Performer Classroom",
      position: "top",
      align: "start",
      color: "black",
      padding: {
        bottom: 35,
      },

      font: {
        size: 20,
        weight: "bold",
      },
    },
    legend: {
      display: false,
    },

    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${tooltipItem.dataset.label}: ${percentage}`;
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,

      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
      stacked: true,

      grid: {
        display: true,
        borderDash: [5, 5],
        color: "rgba(0, 0, 0, 0.1)",
      },
      border: {
        display: false,
      },
      ticks: {
        stepSize: 25,
      },
    },
  },
  barThickness: 15,
};

const totals = [
  { "Total Students": 3350, icon: faUser },
  { "Total Teachers": 165, icon: faChalkboardTeacher },
  { "Total Parents": 1450, icon: faUserFriends },
];

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="totals-wrapper">
          {totals.map((x, index) => {
            const [key, value] = Object.entries(x)[0];
            const [icon, value2] = Object.entries(x)[1];
            console.log(icon);
            return (
              <div className="total-box" key={index}>
                <div className="svg-wrapper">
                  <FontAwesomeIcon icon={value2} />
                </div>
                <div>
                  <p>{key}</p>
                  <span>{value}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="attendance">
          <Bar data={data} options={options} />
        </div>
        <div className="topteachers">
          <h2>Top Rated Teachers</h2>
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="logo"
            />
            <div>
              <span>Theresa Webb</span>
              <p>Subject: Mathematics</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>
          </div>
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="logo"
            />
            <div>
              <span>Ronald Richards</span>
              <p>Subject: English</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>
          </div>
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="logo"
            />
            <div>
              <span>Ralph Edwards</span>
              <p>Subject: Arabic</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>
          </div>
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="logo"
            />
            <div>
              <span>Annette Black</span>
              <p>Subject: History</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>
          </div>
          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="logo"
            />
            <div>
              <span>Tiffany Alenxander</span>
              <p>Subject: Geography</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>{" "}
          </div>

          <div className="teacher-box">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="logo"
            />
            <div>
              <span>Laslie Alenxander</span>
              <p>Subject: English</p>
            </div>
            <div className="grade">
              <span style={{ fontSize: "24px", color: "rgb(255,187,11)" }}>
                ★
              </span>
              4.8
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <div className="topfive">
            <h2>Top 5 Students</h2>
            <table>
              <thead>
                <th>Student</th>
                <th>Grade</th>
                <th>Reward (%)</th>
                <th>Absences</th>
              </thead>
              <tbody>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/women/7.jpg"
                    alt="logo"
                  />
                  Kathryn Murphy
                </td>
                <td>9.8</td>
                <td>95%</td>
                <td>12</td>
              </tbody>
              <tbody>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/men/6.jpg"
                    alt="logo"
                  />
                  Darell Steward
                </td>
                <td>9.6</td>
                <td>92%</td>
                <td>16</td>
              </tbody>
              <tbody>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/women/6.jpg"
                    alt="logo"
                  />
                  Arlene McCoy
                </td>
                <td>9.2</td>
                <td>89%</td>
                <td>20</td>
              </tbody>
              <tbody>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/women/5.jpg"
                    alt="logo"
                  />
                  Eleanor Pena
                </td>
                <td>8.9</td>
                <td>85%</td>
                <td>28</td>
              </tbody>
              <tbody>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt="logo"
                  />
                  Guy Hawkins
                </td>
                <td>8.7</td>
                <td>82%</td>
                <td>32</td>
              </tbody>
            </table>
          </div>
          <div className="topclass">
            <Bar data={data3} options={options2} />
          </div>
        </div>
      </div>
    </div>
  );
}
