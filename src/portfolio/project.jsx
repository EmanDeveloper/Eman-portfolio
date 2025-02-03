import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import { GrLinkNext } from "react-icons/gr";

import projectImg1 from "../assets/portflioBuild.jpg";
import projectImg2 from "../assets/chatApp.jpg";
import projectImg3 from "../assets/ecommerce.jpg";
import projectImg4 from "../assets/netflix-clone.webp";
import projectImg5 from "../assets/textToImage.jpeg";

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
          </ul>
        </div>
      </nav>

      <div className="eduction">
        <h1>Projects</h1>

        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* Card 1 */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://theta-konnect.netlify.app/" target="/blank">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg1}
              alt="Project 5"
            />
            <p className="text-black p-4 text-sm">
            A free live demo where users can easily create and showcase their portfolios. Built with the MERN stack for a seamless experience.
            </p>
          </Link>

          {/* Card 2 */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper/ChatApp-mernstack" target="/blank">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg2}
              alt="Project 5"
            />
            <p className="text-black p-4 text-sm">
            A real-time chat application powered by Socket.io. Hosted on GitHub, featuring instant messaging and live updates.
            </p>
          </Link>

          {/* Card 3 */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper/mern-stack-Ecommerce" target="/blank">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg3}
              alt="Project 5"
            />
            <p className="text-black p-4 text-sm">
            A feature-rich e-commerce website with product listings, cart functionality, and secure checkout. Code available on GitHub.
            </p>
          </Link>

          {/* Card 4 */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="https://github.com/EmanDeveloper/mern-stack-netflixclone" target="/blank">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg4}
              alt="Project 5"
            />
            <p className="text-black p-4 text-sm">
            A Netflix-style streaming platform with a modern UI, authentication, and media browsing. Explore the source code on GitHub.
            </p>
          </Link>

          {/* Card 5 */}
          <Link className="bg-orange-50 w-64 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"  to="/project">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src={projectImg5}
              alt="Project 5"
            />
            <p className="text-black p-4 text-sm">
            An AI-powered tool that generates images from text prompts using a Hugging Face model. Experiment with creative image generation.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
