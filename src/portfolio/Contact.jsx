import "./Contact.css";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(){
    const [click,setClick]=useState(false);
    
    function handelslick()
  {
    setClick(!click);
  }
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "80a3cc24-037c-40e1-9845-7c8c82e3d682");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>setResult(""),1000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};

  useEffect(()=>{
    AOS.init();
  },[])
  
    return(<>
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
          </ul>
        </div>
      </nav>

      <div className= {click?"no":"get-touch"}>
        <h1>GET IN TOUCH</h1>
        <div className="get-touch-body" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

            <div className="left-touch">
            <h2><MdEmail/></h2>
            <div>
            <h3>Email</h3>
            <p>memankhadim @gmail.com</p>
            </div>
            </div>

            <div className="left-touch">
            <h2><FaPhoneAlt/></h2>
            <div>
            <h3>Phone Number</h3>
            <p>+92 344-6010309</p>
            </div>
            </div>

            <div className="left-touch">
            <h2><MdLocationPin/></h2>
            <div>
            <h3>Address</h3>
            <p>Phirmahal, Punjab, Pakistan</p>
            </div>
            </div>

        </div>
      </div>

      <div className= {click?"no":"conact"}>

        <div className="link">
            <h1>LET'S CONNECT</h1>
            <div>
            <Link to="www.linkedin.com/in/eman-developer" className="link-logo"><FaLinkedinIn/></Link>
            <Link to="www.linkedin.com/in/eman-developer" className="link-text">Linkdin</Link>
            </div>

            <div>
            <Link to="https://github.com/EmanDeveloper" target="_blank" className="link-logo"><FaGithub/></Link>
            <Link to="https://github.com/EmanDeveloper" target="_blank" className="link-text danger" >Github</Link>
            </div>

            <div>
            <Link to="https://www.instagram.com/emanjunior7?igsh=YzljYTk1ODg3Zg== " className="link-logo"><FaInstagram/></Link>
            <Link to="https://www.instagram.com/emanjunior7?igsh=YzljYTk1ODg3Zg== " className="link-text">Instagram</Link>
            </div>

            <div>
            <Link to="https://www.facebook.com/emankhadim.mauhammadkadim" className="link-logo"><FaFacebook/></Link>
            <Link to="https://www.facebook.com/emankhadim.mauhammadkadim" className="link-text" >Facebook</Link>
            </div>

        </div>

        <div className="form">
            <h1>SEND ME A MESSAGE</h1>
            <form onSubmit={onSubmit}>
                <input className="name" type="text" placeholder="Name" required/>
                <input className="name" type="email" placeholder="Email" required/>
                <br />
                <input className="topic" type="text" placeholder="Topic" required/>
                <br />
                <textarea className="message" placeholder="Create message here" required></textarea>
                <br />
                <button type="submit" className="button">Submit</button>
            </form>
            <span>{result}</span>
           
        </div>
      </div>
      <hr />
      <footer className={click?"no":""}>
        <img src="src\assets\logo.png" alt="" />
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | <span>Eman Developer</span></p>
      </footer>
    </>)
}

export default Contact;