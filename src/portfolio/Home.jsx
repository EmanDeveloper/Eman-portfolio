import "./Home.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import Resume from "../assets/resuma1.pdf";
import Typewriter from "typewriter-effect";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import React,{useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {

  const [click,setClick]=useState(false);
  function handelslick()
{
  setClick(!click);
}

useEffect(()=>{
  AOS.init();
},[])
  return (
    <>
      <nav>
        <div className="left">
        <Link to="/"><img src={logo} alt="logo" /></Link>
          
        </div>
        
        <div className={click?"right":"hid"}>
        <div className="menu" onClick={handelslick}>{click?<GiCrossedSabres/>:<TiThMenu/>}</div>
          <ul className="no">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
          </ul>
        </div>
      </nav>

      <div className={click?"no":"landing"}>
        <div className="left-landing">
          <h2>
            Hi I am <span>Eman</span>
          </h2>
          <p className="p">
            I do
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Cpp",
                    "Java",
                    "DSA",
                    "Opp",
                    "Java Script",
                    "SQL",
                    "HTML",
                    "CSS",
                    "REACT",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p>
            Experienced front-end Developer with a demonstrated history of
            working in the computer software industry.
          </p>
          <button className="button"><a href="#more-about">More about me</a></button>
          <button className="button"><a href={Resume} download>Download CV</a></button>
        </div>
        <div className="right-landing">
          <div className="box"></div>
        </div>
      </div>
      <div className={click?"no":"about"}>
      <h1 className="about-heading" id="more-about">ABOUT ME</h1>
        <div className="about-inside">
    
        <div className="left-about">
          <img  data-aos="fade-right" src={profile} alt="" />
        </div>
        <div className="right-about" data-aos="fade-left">
          <p>
            I'm Eman, a Computer Science student at COMSATS
            University, Sahiwal Campus, Pakistan. Proficient in C, C++, HTML,
            CSS, JavaScript, and Java, I recently completed a Frontend Developer
            Course from Great Learning. Actively applying my skills, I've
            initiated minor projects to further enhance my capabilities. Beyond
            academics, I thrive in extracurriculars, participating in
            hackathons, coding competitions, and bootcamps, fostering
            collaboration and innovative problem-solving.
          </p>
          <h1 className="vision">MY VISION</h1>
          <p>I'm driven to blend theoretical insights with hands-on innovation. My goal is to craft visually stunning interfaces that redefine user experiences. I aspire to architect dynamic applications, pushing the boundaries of interactivity and contributing to the forefront of web development.</p>
          <button className="button re"><Link to="/Resume">Resume</Link></button>
          </div>
        </div>
      </div>

      <div className={click?"no":"hireme"} data-aos="fade-up">
       <h2>Do You Have Any Project?</h2>
       <p>Available for Web development projects, utilizing expert programming tools and skills.</p>
       <button className="button hireme-btn"><Link to="/Contact">Hire me</Link></button>
      </div>

      <hr />

      <footer className={click?"no":""}>
        <img src={logo} alt="" />
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | <span>Eman Developer</span></p>
      </footer>
    </>
  );
}

export default Home;
