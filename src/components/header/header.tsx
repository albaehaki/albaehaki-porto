import React from "react";
import Button from "./utility/button";
import { BeakerIcon } from "@heroicons/react/outline";

const header = () => {
  return (
    <div className="grid h-[10%] bg-red-400">
      <div className="flex justify-around">
        <Button toward="/" keyword="Home" />
        <Button toward="/galeri" keyword="Galeri" />
        <Button toward="/education" keyword="Education" />
        <Button toward="/experience" keyword="Experience" />
        <Button toward="/about" keyword="About" />
      </div>
    </div>
  );
};

export default header;
