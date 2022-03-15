import React, { useState } from "react";
import {
  siJavascript,
  siTypescript,
  siHtml5,
  siCss3,
  siTailwindcss,
  siReact,
  siRedux,
  siBootstrap,
  siWordpress,
  siMysql,
  siNextdotjs,
  siReactrouter,
} from "simple-icons/icons";

const About = () => {
  const [logo, setLogo] = useState([
    siJavascript,
    siTypescript,
    siHtml5,
    siCss3,
    siTailwindcss,
    siReact,
    siRedux,
    siBootstrap,
    siWordpress,
    siNextdotjs,
    siReactrouter,
    siMysql,
  ]);
  console.log(logo);

  return (
    <div className="grid w-screen h-screen">
      <div className="grid m-auto grid-cols-4 lg:grid-cols-6">
        {logo.map((m: any, i: number) => {
          return (
            <div key={i} className="col-span-1 m-5">
              <svg
                className="h-14 w-14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={m.path} />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
