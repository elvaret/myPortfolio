// import "./profile.scss";
import "../../index.css";
import React from "react";

export default function Profile() {
  return (
    <div className="bg-slate-50" id="profile">
      <section>
        <h1 className="text-3xl font-bold text-center py-10 text-amber-900">About Me</h1>
        <div className="flex flex-row space-x-8 mx-24 my-12 max-w-screen-xl mx-auto">
          <div className="basis-1/2 border-amber-900 rounded-3xl border-4 p-5">
            <p className="text-justify" style={{ textIndent: "2rem" }}>
              I graduated from Esa Unggul University, majoring in informatics
              engineering and I am a Bangkit Graduate of 2023. I have experience
              in data science and backend development, and I am proficient in
              programming languages such as Python and JavaScript. Additionally,
              I am familiar with frameworks like TensorFlow and React.js. I have
              successfully built and deployed a deep learning model on the web
              using the React.js framework. With an enthusiastic and proactive
              mindset, I constantly seek new programming challenges and projects
              that ignite my curiosity. As a lifelong learner, I thrive on
              exploring novel concepts and diligently pursuing solutions to
              complex problems.
            </p>
          </div>

          <div className="basis-1/2 border-amber-900 rounded-3xl border-4 p-5">
            <p className="text-justify mb-4" style={{ textIndent: "2rem" }}>
              My positive mindset and adaptability enable me to create a stable
              and collaborative environment that fosters progress and
              innovation. If you share a passion for pushing the boundaries of
              knowledge and harnessing technology to drive transformative
              change, I would be delighted to connect with you. Let's
              collaborate, exchange insights, and explore new avenues together.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Age:</strong> 21 years old
              </li>
              <li>
                <strong>Languages:</strong> Indonesian, English, and Chinese
              </li>
              <li>
                <strong>Hobbies:</strong> Piano and Basketball
              </li>
              <li>
                <strong>Music Genre:</strong> Jazz and Classical
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
