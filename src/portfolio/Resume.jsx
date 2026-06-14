import "./Resume.css";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiReact, SiNextdotjs, SiRedux,
  SiTailwindcss, SiNodedotjs, SiExpress, SiSocketdotio, SiJsonwebtokens, SiMongodb,
  SiPostgresql, SiSequelize, SiRedis, SiSupabase, SiGithub, SiDocker, SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Code2, Layers, Server, Database, Cloud, Brain,
  ShieldCheck, ScanText, BrainCircuit, Boxes, Smile,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript (ES6+)", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#4B8BBE" },
      { name: "SQL", Icon: Database, color: "#38BDF8" },
      { name: "HTML5 / CSS3", Icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#E2E8F0" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#E2E8F0" },
      { name: "Socket.io", Icon: SiSocketdotio, color: "#E2E8F0" },
      { name: "JWT & Auth", Icon: SiJsonwebtokens, color: "#FB015B" },
      { name: "RBAC", Icon: ShieldCheck, color: "#4ADE80" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL / MySQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Sequelize ORM", Icon: SiSequelize, color: "#52B0E7" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", Icon: SiGithub, color: "#E2E8F0" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "AWS (EC2, S3)", Icon: FaAws, color: "#FF9900" },
      { name: "Vercel / Netlify", Icon: SiVercel, color: "#E2E8F0" },
    ],
  },
  {
    title: "AI / ML & Practices",
    icon: Brain,
    skills: [
      { name: "LLM Integration", Icon: BrainCircuit, color: "#C084FC" },
      { name: "OCR (Tesseract.js)", Icon: ScanText, color: "#22D3EE" },
      { name: "Hugging Face", Icon: Smile, color: "#FFD21E" },
      { name: "SaaS Architecture", Icon: Boxes, color: "#F472B6" },
    ],
  },
];
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
                    COMSATS University Islamabad (CUI), Sahiwal Campus
                  </p>
                  <p className="timeline-copy sqsrte-large">CGPA 3.27 / 4.0</p>
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

      <div className={click ? "no" : "exprience overflow-hidden"}>
        <h1>EXPERIENCE</h1>
        <div className="inside-exprience">
          <div className="left-exprience" data-aos="fade-right">
            <div className="left-ex-box">
              <h2>01</h2>
              <div>
                <h3>Full-Stack MERN Developer (Remote)</h3>
                <p>UK Client · June 2025 – Present</p>
                <ul className="list-disc pl-4 mt-3 text-sm text-white space-y-2">
                  <li>
                    Architected and delivered core frontend and backend features
                    for a multi-tenant SaaS platform within a cross-functional
                    remote engineering team.
                  </li>
                  <li>
                    Engineered responsive admin and vendor dashboards with
                    React.js, Redux Toolkit, and Tailwind CSS, reducing render
                    times through optimized component architecture.
                  </li>
                  <li>
                    Built secure authentication and role-based access control
                    (RBAC) across multiple user portals to enforce granular,
                    scalable permissions.
                  </li>
                  <li>
                    Designed RESTful APIs with Node.js and Express.js,
                    integrating Redis caching and Twilio for automated
                    communication workflows.
                  </li>
                  <li>
                    Developed a real-time internal chat system with Socket.io
                    and delivered staff job-assignment and shift-tracking
                    modules that automated workforce coordination.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-exprience" data-aos="fade-left">
            <p>
              Turning ideas into <span>production-grade</span> products
            </p>
          </div>
        </div>
      </div>

      <div className={click ? "no" : "skills-modern"}>
        <h1>SKILLS</h1>
        <p className="skills-subtitle">
          Every <span>skill</span> you acquire doubles your odds of{" "}
          <span>success</span>
        </p>
        <div className="skills-grid">
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div className="skill-card" data-aos="fade-up" key={cat.title}>
                <div className="skill-card-head">
                  <span className="skill-card-icon">
                    <CatIcon size={22} strokeWidth={2.2} />
                  </span>
                  <h2>{cat.title}</h2>
                </div>
                <div className="skill-chips">
                  {cat.skills.map((s) => {
                    const Icon = s.Icon;
                    return (
                      <span className="skill-chip" key={s.name}>
                        <span
                          className="chip-badge"
                          style={{
                            color: s.color,
                            backgroundColor: `${s.color}1a`,
                            borderColor: `${s.color}33`,
                          }}
                        >
                          <Icon size={18} />
                        </span>
                        {s.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
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
