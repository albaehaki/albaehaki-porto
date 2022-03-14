import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./galeri_root/page1";
//import img from "../../../img/Albaehaki - Google Chrome 3_8_2022 6_41_18 AM.png";

const galeri = () => {
  return (
    <div className="flex h-screen">
      <Routes>
        <Route path="/galeri" element={<Page1 />} />
      </Routes>
    </div>
  );
};

export default galeri;
