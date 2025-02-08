import { Link } from "react-router-dom";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import logo from "../assets/logo.png";
import certificate1 from "../assets/aifundamental.png";
import certificate2 from "../assets/introSQL.png";
import certificate3 from "../assets/introAi.png";
import certificate4 from "../assets/dataliteracy.png";

const Certificate = () => {
    const [click, setClick] = useState(false);
    function handelslick() {
      setClick(!click);
    }

  return (
    <div className="">
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
                <li><Link to="/certificate">Certificate</Link></li>
              </ul>
            </div>
          </nav>
      
      <div className="container mx-auto p-6 eduction">
        <h1>Certificates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[certificate1, certificate2, certificate3, certificate4].map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={cert} alt={`certificate-${index}`} className="w-full h-48 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
