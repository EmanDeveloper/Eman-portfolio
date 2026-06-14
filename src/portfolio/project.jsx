import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";


import projectImg1 from "../assets/portflioBuild.jpg";
import projectImg2 from "../assets/chatApp.jpg";
import projectImg3 from "../assets/ecommerce.jpg";
import projectImg4 from "../assets/textToImage.jpeg";

const Project = () => {
  const [click, setClick] = useState(false);
  function handelslick() {
    setClick(!click);
  }

  return (
    <div>
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
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li><Link to="/certificate">Certificate</Link></li>
          </ul>
        </div>
      </nav>

      <div className="eduction">
        <h1>Projects</h1>

        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* Card 1 - Portfolio Management Platform */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://theta-konnect.netlify.app/" target="_blank" rel="noreferrer">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg1}
              alt="Portfolio Management Platform"
            />
            <div className="p-4">
              <h2 className="text-black font-bold text-base">Portfolio Management Platform</h2>
              <p className="text-black pt-1 text-sm">
                A responsive full-stack portfolio platform built with React.js, Node.js, Express.js, and MongoDB for showcasing projects and professional profiles, with clean API integration and reusable components.
              </p>
            </div>
          </Link>

          {/* Card 2 - Real-Time Chat Application */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper/ChatApp-mernstack" target="_blank" rel="noreferrer">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg2}
              alt="Real-Time Chat Application"
            />
            <div className="p-4">
              <h2 className="text-black font-bold text-base">Real-Time Chat Application</h2>
              <p className="text-black pt-1 text-sm">
                A full-stack real-time messaging app using React.js, Node.js, Express.js, and Socket.io, with JWT authentication, protected routes, and a fully responsive Tailwind CSS interface.
              </p>
            </div>
          </Link>

          {/* Card 3 - Easy Finder Platform */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper" target="_blank" rel="noreferrer">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg3}
              alt="Easy Finder Platform"
            />
            <div className="p-4">
              <h2 className="text-black font-bold text-base">Easy Finder Platform</h2>
              <p className="text-black pt-1 text-sm">
                A full-stack product comparison platform built with Next.js and Supabase, enabling cross-website comparison of laptops, phones, and tablets with country- and price-based filtering.
              </p>
            </div>
          </Link>

          {/* Card 4 - DiagnoXpert AI Healthcare Platform */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper" target="_blank" rel="noreferrer">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg4}
              alt="DiagnoXpert AI Healthcare Platform"
            />
            <div className="p-4">
              <h2 className="text-black font-bold text-base">DiagnoXpert — AI Healthcare</h2>
              <p className="text-black pt-1 text-sm">
                A Next.js healthcare platform with doctor and patient dashboards, RBAC, Tesseract.js OCR, and a Llama3-OpenBioLLM pipeline for AI-powered medical guidance, real-time chat, and appointment booking.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
