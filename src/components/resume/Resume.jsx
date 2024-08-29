// import "./resume.scss";
import React, { useState } from "react";
import "../../index.css";

export default function Resume() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="bg-slate-50 flex flex-row space-x-8" id="resume">
      <div className="basis-1/2 border-amber-500 rounded-3xl border-4 p-5">
        <h1 className="text-center mb-10 text-3xl font-bold text-orange-500">
          Work Experience
        </h1>
        <h3>
          <strong>
            IT Consultant – KAP Heliantono dan Rekan (Parker Russel Indonesia)
            February 2024 – July 2024
          </strong>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Assisted senior consultants with ICoFR IT assessments, ensuring
            compliance with BUMN regulations, especially for the client's
            financial systems, and improving IT processes.
          </li>
          <li>
            Enhanced communication skills through client interactions, teamwork,
            and managing multiple clients.
          </li>
          <li>
            Acquired expertise in quality assurance, IT security, and COBIT 2019
            across program development, change management, computer operations,
            and access/security.
          </li>
        </ul>
        <h3 className="mt-5"></h3>
        <h3>
          <strong>
            Website Admin - Toko Aksesoris Mobil OTOPART.ID Auto Workshop August
            2021 – January 2022
          </strong>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Manage web (uploading products, managing stocks and prices, update
            banner)
          </li>
          <li>
            Implement the web campaign plan and strategy (according to the
            schedule given, organizing promotions, setting prices, etc)
          </li>
          <li>
            Monitor and make report (daily, weekly, monthly) the sales, orders
            and performance of campaigns
          </li>
        </ul>
        {/* <h3 className="mt-5">
          <strong>
            BANGKIT ACADEMY 2023 BY GOOGLE, GOTO, TRAVELOKA February – July 2023
          </strong>
        </h3>
        <ul className="list-disc list-inside">
          <li>Machine Learning Path</li>
          <li>
            Relevant Coursework: Python, TensorFlow, Deep Learning, Data
            Analysis, Leadership, Public Speaking, Teamwork
          </li>
        </ul> */}
      </div>

      <div className="basis-1/2 border-amber-500 rounded-3xl border-4 p-5">
        <h1 className="text-center mb-10 text-3xl font-bold text-orange-500">
          Education
        </h1>
        <h3>
          <strong>
            Esa Unggul University (September 2020 – February 2024)
          </strong>
        </h3>
        <ul className="list-disc list-inside">
          <li>Bachelor of Informatics Engineering</li>
          <li>Cumulative GPA: 3.92/4.0</li>
          <li>
            Relevant Cousework: Statistic, Machine Learning, Algebra, Calculus,
            Algorithm & Data Structures, WebProgramming
          </li>
        </ul>
        <h3 className="mt-5">
          <strong>Coursera</strong>
        </h3>
        <div>
          <ul className="list-disc list-inside">
            <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/VDFM59FVJSKN"
                target="_blank"
                rel="noopener noreferrer"
                className={isHovered ? "hovered" : ""}
              >
                Natural Language Processing
              </a>
            </li>
            <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/HABHNADMU6JB"
                target="_blank"
                rel="noopener noreferrer"
                className={isHovered ? "hovered" : ""}
              >
                Google Data Analytics
              </a>
            </li>
            {/* <li>Tensorflow: Data and Deployment</li> */}
            <li>Tensorflow: Advanced Tecniques</li>
            <li>Google IT Automation with Python</li>
            <li>etc</li>
          </ul>
        </div>
        <h3 className="mt-5">
          <strong>Dicoding & Udemy</strong>
        </h3>
        <div className="buletin">
          <ul className="list-disc list-inside">
            <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <a
                href="https://www.dicoding.com/certificates/1OP81W1L1ZQK"
                target="_blank"
                rel="noopener noreferrer"
                className={isHovered ? "hovered" : ""}
              >
                Machine Learning Terapan
              </a>
            </li>
            <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <a
                href="https://www.dicoding.com/certificates/81P230118XOY"
                target="_blank"
                rel="noopener noreferrer"
                className={isHovered ? "hovered" : ""}
              >
                Belajar Analisis Data dengan Python
              </a>
            </li>
            {/* <li>Belajar Dasar Visualisasi Data</li> */}
            <li>
              The Data Science Course: Complete Data Science Bootcamp 2024
            </li>
            {/* <li>Python Programming for Beginners in Data Science</li> */}
            <li>SQL-MySQL for Data Analytics and Business Intelligence</li>
            <li>etc</li>
            {/* <li>The Complete JavaScript Course 2024: From Zero to Expert!</li> */}
            {/* <li>etc</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
