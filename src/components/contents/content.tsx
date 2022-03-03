import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./pages/education";
import Galeri from "./pages/galeri";
import Experience from "./pages/experience";
import About from "./pages/about";

const content = () => {
  return (
    <div className="bg-green-400 h-[90%]">
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
