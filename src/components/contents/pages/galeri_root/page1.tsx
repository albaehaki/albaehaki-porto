import React from "react";
import { siReact, siTailwindcss } from "simple-icons/icons";

const Page1 = () => {
  return (
    <div className="col-span-1">
      <div className="col-span-1 m-auto">
        <p>project 1</p>
        <div className="grid grid-cols-2">
          <svg
            className="h-5 w-5 col-span-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={siReact.path} />
          </svg>
          <svg
            className="h-5 w-5 col-span-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={siTailwindcss.path} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page1;
