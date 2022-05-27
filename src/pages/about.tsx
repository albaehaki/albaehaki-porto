import React, { useState } from "react";
import {
  siInstagram,
  siGmail,
  siGithub,
  siLinkedin,
  siFiverr,
  siUpwork,
  siEyeem,
  siReact,
  siTailwindcss,
  siTypescript,
  siRedux,
  siHtml5,
  siJavascript,
  siCss3,
  siGreensock,
  siBootstrap,
  siWordpress,
  siMui,
  siMongodb,
  siPython,
  siPhpmyadmin,
  siMysql,
  siAdobephotoshop,
  siFigma,
  siExpress,
  siVercel,
  siFirebase,
  siGitlab,
  siNextdotjs,
  siReactrouter,
  siVisualstudiocode,
} from "simple-icons/icons";

const About = () => {
  const [sosmed] = useState([
    siInstagram,
    siGmail,
    siGithub,
    siLinkedin,
    siFiverr,
    siUpwork,
    siEyeem,
    "",
    "",
    "",
    "",
    "",
  ]);
  const [skill] = useState([
    siReact,
    siTailwindcss,
    siTypescript,
    siRedux,
    siHtml5,
    siJavascript,
    siCss3,
    siGreensock,
    siBootstrap,
    siWordpress,
    siMui,
    siMongodb,
    siPython,
    siMysql,
    siAdobephotoshop,
    siFigma,
    siExpress,
    siVercel,
    siFirebase,
    siGitlab,
    siNextdotjs,
    siReactrouter,
    siVisualstudiocode,
  ]);
  const [link] = useState([
    "https://www.instagram.com/zacky_alz/",
    "mailto:zackyalbaehaki@gmail.com",
    "https://github.com/albaehaki",
    "https://www.linkedin.com/in/zacky-al-baehaki-0929a51a7",
    "",
    "https://www.upwork.com/freelancers/~016ec45c6537eb19df",
    "https://www.eyeem.com/u/31234167",
    "",
  ]);

  return (
    <div className="mx-auto pt-5 pb-20  px-5 xl:px-20">
      <div className="grid py-3">
        <h1 className="font-bold m-auto text-2xl ">About Me</h1>
      </div>
      <div className="grid py-3">
        <p className="m-auto ">
          I am Web Developer with experience in HTML5, CSS3, Javascript,
          Bootstrap, React, Redux, TailwindCSS, Node.js, Express, MongoDB,
          MySQL, and more. Experienced Wordpress Developer with a demonstrated
          history of working in the internet industry. Skilled in Search Engine
          Optimization (SEO), Photography, Logo Design, Waiting, and
          Communication.
        </p>
      </div>
      <div className="grid py-3">
        <h2 className="font-bold m-auto text-xl ">My Skill</h2>
      </div>
      <div className="grid grid-cols-6 pb-3">
        {skill.map((m: any, i: number) => {
          return (
            <div className="m-auto py-2" key={i}>
              <svg
                className="h-5 xl:h-10 md:h-8 md:w-8 xl:w-10 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={m.path} />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="grid py-3">
        <h2 className="font-bold m-auto text-xl ">Connect me </h2>
      </div>
      <div className="grid grid-cols-6 pb-3">
        {sosmed.map((m: any, i: number) => {
          return (
            <a
              target="blank"
              href={link[i]}
              key={i}
              className="my-auto mx-auto gap-3 py-2"
            >
              <svg
                className="h-5 xl:h-10 md:h-8 md:w-8 xl:w-10 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={m.path} />
              </svg>
            </a>
          );
        })}
      </div>
    </div>
    // <div className="grid w-screen h-screen grid-cols-12">
    //   <div className="grid col-span-1">
    //     {sosmed.map((m: any, i: number) => {
    //       return (
    //         <a target="blank" href={link[i]} key={i} className="my-auto ml-5">
    //           <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    //             <path d={m.path} />
    //           </svg>
    //         </a>
    //       );
    //     })}
    //   </div>
    //   <div className="grid pl-5 lg:pl-0 pt-2 col-span-11">
    //     <p className="font-bold text-2xl">Zacky Al Baehaki</p>
    //   </div>

    // {/* <div className="grid ">
    //   <p className="mx-auto mt-auto font-bold text-xl place-self-end">
    //     My Skill
    //   </p>
    //   <div className="grid mb-auto mx-auto grid-cols-4 lg:grid-cols-6">
    //     {logo.map((m: any, i: number) => {
    //       return (
    //         <div key={i} className="col-span-1 m-3">
    //           <svg
    //             className="h-10 w-10"
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d={m.path} />
    //           </svg>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div> */}
    // </div>
  );
};

export default About;
