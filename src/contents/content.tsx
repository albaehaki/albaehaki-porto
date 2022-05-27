import React from "react";
import Home from "../pages/home";
import { Routes, Route } from "react-router-dom";
import Education from "../pages/education";
import Galeri from "../pages/galeri";
import Experience from "../pages/experience";
import About from "../pages/about";

const content = () => {
  return (
    <div className="grid lg:w-[95%] sm:h-[90%] h-[90%] lg:h-screen w-screen xl:overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default content;
