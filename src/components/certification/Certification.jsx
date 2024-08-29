import { useState } from "react";
import "./certification.scss";

export default function Certification() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "TensorFlow Certification",
      // desc:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/tensorflow_certification.jpg",
      link: "https://www.credential.net/7e066ff5-7a21-4071-955f-293bb32cbd5e",
    },
    {
      id: "2",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Sertifikasi Bangkit 2023",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Sertifikasi Bangkit 2023.jpg",
      link: "https://www.linkedin.com/company/bangkit-academy/posts/?feedView=all",
    },
    {
      id: "3",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Machine Learning Terapan",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/machineLearningTerapan.png",
      link: "https://www.dicoding.com/certificates/1OP81W1L1ZQK",
    },
    {
      id: "4",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Deep Learning AI TF Developer",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Coursera DeepLearning AI TF Developer.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SEK7K8D6WAJH",
    },
    {
      id: "5",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Machine Learning Stanford",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Coursera Machine Learning Stanford.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3YDVSCK7S4E2",
    },
    {
      id: "6",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Mathematics for Machine Learning",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Mathematics for Machine Learning.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZHF6JTLFKBZZ",
    },
    {
      id: "7",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Natural Language Processing",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Natural Language Processing.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/VDFM59FVJSKN",
    },
    {
      id: "8",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Structuring Machine Learning Projects",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Structuring Machine Learning Projects.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/MQSY86TKDEWC",
    },
    {
      id: "9",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "TensorFlow Advanced Techniques",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/TensorFlow Advanced Techniques.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FE9XDELWCX3N",
    },
    {
      id: "10",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "TensorFlow Data and Deployment",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/TensorFlow Data and Deployment.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3L48KR7JVGMZ",
    },
    {
      id: "11",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Belajar Dasar Visualisasi Data",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Belajar Dasar Visualisasi Data.png",
      link: "https://www.dicoding.com/certificates/N9ZO4QV1YZG5",
    },
    {
      id: "12",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Google Data Analytics",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Google Data Analytics.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HABHNADMU6JB",
    },
    {
      id: "13",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Belajar Analisis Data dengan Python",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/belajarAnalisisDatadenganPython.png",
      link: "https://www.dicoding.com/certificates/81P230118XOY",
    },
    {
      id: "14",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Google IT Automation with Python",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Google IT Automation with Python.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9ZP7WXDQDUDS",
    },
    {
      id: "15",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Belajar Dasar dengan Git dan Github",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img/Belajar Dasar dengan Git dan GitHub.jpg",
      link: "https://www.dicoding.com/certificates/72ZD9RVLVPYW",
    },
    {
      id: "16",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Memulai Dasar Pemrogramn untuk Menjadi Pengembang Software",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Memulai Dasar Pemrogramn untuk Menjadi Pengembang Software.png",
      link: "https://www.dicoding.com/certificates/2VX3YL42VPYQ",
    },
    {
      id: "17",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Memulai Pemrograman dengan Python",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Memulai Pemrograman dengan Python.png",
      link: "https://www.dicoding.com/certificates/6RPN6N8M9P2M",
    },
    {
      id: "18",
      icon: "./assets/certification_img/certificateIcon.png",
      title: "Pengenalan ke Logika Pemrograman",
      img:
        process.env.PUBLIC_URL +
        "assets/certification_img_2/Pengenalan ke Logika Pemrograman.png",
      link: "https://www.dicoding.com/certificates/MEPJKWOR6X3V",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {d.link && (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link underline underline-offset-4 hover:text-orange-500"
                    >
                      Show Credential
                    </a>
                  )}
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  // src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  // alt=""
                  src={d.img}
                  alt={d.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
