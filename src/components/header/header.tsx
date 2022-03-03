import React from "react";
import Button from "./utility/button";

const header = () => {
  return (
    <div className="grid h-[10%] bg-red-400">
      <div className="flex justify-around">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default header;
