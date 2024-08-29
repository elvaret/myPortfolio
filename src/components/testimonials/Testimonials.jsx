import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Amalia Arifah",
      title: "Cloud Team",
      img: "assets/ava-ifa.jpg",
      // icon: "assets/twitter.png",
      desc: "We are good at teamwork and communicating well to create projects so that we can complete the product on time.",
    },
    {
      id: 2,
      name: "Ibnu Bayhaqi",
      title: "Front End Team",
      img: "assets/ava-ibnu.jpg",
      // icon: "assets/youtube.png",
      desc: "Working with Elvaret has been a truly collaborative and productive experience. His ability to communicate clearly and work effectively within a team has been instrumental in driving our projects forward.",
      featured: true,
    },
    {
      id: 3,
      name: "Hermawan",
      title: "IT Consultant Senior",
      img: "assets/hermawan.png",
      // icon: "assets/linkedin.png",
      desc: "Elvaret's teamwork and clear communication have significantly improved our project workflow, helping us meet deadlines and achieve our goals.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="font-bold text-orange-700">Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
