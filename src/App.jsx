import Home from "./portfolio/Home"
import Resume from "./portfolio/Resume";
import Contact from "./portfolio/Contact";
import Project from "./portfolio/project";
import Certificate from "./portfolio/certificate";

import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Resume" element={<Resume/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/certificate" element={<Certificate/>}/>
     
    </Routes>
     </BrowserRouter>
    {/* <Home/> */}
    </>
  )
}

export default App
