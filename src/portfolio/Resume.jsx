import "./Resume.css";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
function Resume() {
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
            {click ? <GiCrossedSabres className="cursor-pointer"/> : <TiThMenu className="cursor-pointer pb-12 pt-0 font-semibold text-7xl"/>}
          </div>
          <ul className="no">
            <li>
              <Link to="/">Home</Link>
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

      <div className={click ? "no" : "eduction overflow-hidden"}>
        <h1>EDUCATION</h1>
        <div className="education-inside">
          <div className="left-education" data-aos="fade-right">
            <p>
              Learning experiance in a <span>Various institutions</span>
            </p>
          </div>
          <div className="right-education" data-aos="fade-left">
            <div className="timeline">
              <div className="timeline-container timeline-right">
                <div className="timeline-content">
                  <h2>Graduation</h2>
                  <p className="timeline-date">BSCS(2022 - Present)</p>
                  <p className="timeline-copy sqsrte-large">
                    COMSATS University, Sahiwal Campus
                  </p>
                </div>
              </div>
              <div className="timeline-container timeline-right">
                <div className="timeline-content">
                  <h2>Intermediate</h2>
                  <p className="timeline-date">FSC(2019 - 2021)</p>
                  <p className="timeline-copy sqsrte-large">
                    Govt. Farid Bukhsh College 333 GB{" "}
                  </p>
                </div>
              </div>
              <div className="timeline-container timeline-right">
                <div className="timeline-content">
                  <h2>Matriculation</h2>
                  <p className="timeline-date">Science(2017 - 2019)</p>
                  <p className="timeline-copy sqsrte-large">
                    Govt High School 328 GB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={click ? "no" : "skill"}>
        <h1>SKILLS</h1>
        <div className="inside-skill">
          <div className="left-skill mt-16">
            <p>
              Every <span>skill</span> you acquire doubles your odds of{" "}
              <span>success</span>
            </p>
          </div>
          <div className="right-skill">
            <div className="skills-container">
              <div className="skill-group">
                <div className="skil-percent">
                  <p>JAVA</p>
                  <p>95%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-60"></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>DSA</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>CPP</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div className="skills-container">

            <div className="skill-group">
        <div className="skil-percent">
            <p>Python</p>
            <p>80%</p>
        </div>
        <div className="progress">
            <div className="progress-bar" style={{width:"80%"}}></div>
        </div>
    </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>HTML/CSS</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>BootStrp</p>
                  <p>83%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "83%" }}></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>TailwindCSS</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-group">
                <div className="skil-percent">
                  <p>Git/GitHub</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>React</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>Nodejs</p>
                  <p>100%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>Expressjs</p>
                  <p>100%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>MongoDB</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="skill-group">
                <div className="skil-percent">
                  <p>MySql</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer className={click ? "no" : ""} >
        <img src={logo} className="w-24 h-24" alt="" />
        <p className="mb-4">
          Copyright &copy; {new Date().getFullYear()} All rights reserved |{" "}
          <span>Eman Developer</span>
        </p>
      </footer>
    </>
  );
}
export default Resume;
