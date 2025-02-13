import "./Home.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import Resume from "../assets/resuma1.pdf";
import Typewriter from "typewriter-effect";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const [click, setClick] = useState(false);
  function handelslick() {
    setClick(!click);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <nav>
        <div className="left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={click ? "right" : "hid"}>
          <div className="menu" onClick={handelslick}>
            {click ? <GiCrossedSabres /> : <TiThMenu />}
          </div>
          <ul className="no">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/certificate">Certificate</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={click ? "no" : "landing"}>
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
            Dedicated MERN Stack Developer with a strong foundation in building
            dynamic, responsive, and user-friendly web applications.
          </p>
          <button className="button">
            <a href="#more-about">More about me</a>
          </button>
          <button className="button">
            <a href={Resume} download>
              Download CV
            </a>
          </button>
        </div>
        <div className="right-landing">
          <div className="box"></div>
        </div>
      </div>
      <div className={click ? "no" : "about"}>
        <h1 className="about-heading" id="more-about">
          ABOUT ME
        </h1>
        <div className="about-inside">
          <div className="left-about">
            <img data-aos="fade-right" src={profile} alt="" />
          </div>
          <div className="right-about" data-aos="fade-left">
            <p>
              I'm Eman, a Computer Science student at COMSATS University,
              Sahiwal Campus. As a MERN Stack Developer, I am proficient in C++,
              Java,Python, HTML, CSS, JavaScript, React, Node.js, Express.js,
              and databases like MySQL and MongoDB. Additionally, I have
              experience training a text summarization model on Hugging Face. I
              recently completed a MERN Stack course from Great Learning and
              actively apply my skills by working on projects to enhance my
              expertise. Beyond academics, I actively participate in coding
              competitions and enjoy solving complex problems through innovative
              solutions.
            </p>
            <h1 className="vision">MY VISION</h1>
            <p>
              My vision is to become a skilled full-stack developer, building
              innovative and scalable web applications while continuously
              learning and growing in the field of AI and software development.
              I aim to contribute to impactful projects, solve real-world
              problems through technology, and stay ahead in the ever-evolving
              tech landscape.
            </p>
            <button className="button re">
              <Link to="/Resume">Resume</Link>
            </button>
          </div>
        </div>
      </div>

      <div className={click ? "no" : "hireme"} data-aos="fade-up">
        <h2>Do You Have Any Project?</h2>
        <p>
          Available for Web development projects, utilizing expert programming
          tools and skills.
        </p>
        <button className="button hireme-btn">
          <Link to="/Contact">Hire me</Link>
        </button>
      </div>

      <hr />

      <footer className={click ? "no" : ""}>
        <img src={logo} alt="" />
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved |{" "}
          <span>Eman Developer</span>
        </p>
      </footer>
    </>
  );
}

export default Home;
