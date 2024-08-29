import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Profile from "./components/profile/Profiles"
import Resume from "./components/resume/Resume"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Certification from "./components/certification/Certification";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Profile/>
       <Resume/>
       <Portfolio/>
       <Certification/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
