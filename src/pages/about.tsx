import React, { useState } from "react";
import {
  siInstagram,
  siGmail,
  siGithub,
  siLinkedin,
  siFiverr,
  siUpwork,
  siEyeem,
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
  const [link] = useState(["albaehaki.vercel.app", "", "", "", "", "", "", ""]);

  return (
    <div className="grid w-screen h-screen grid-cols-12">
      <div className="grid col-span-1">
        {sosmed.map((m: any, i: number) => {
          return (
            <a target="blank" href={link[i]} key={i} className="my-auto ml-5">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={m.path} />
              </svg>
            </a>
          );
        })}
      </div>
      <div className="grid pl-5 lg:pl-0 pt-2 col-span-11">
        <p className="font-bold text-2xl">Zacky Al Baehaki</p>
      </div>
      {/* <div className="grid ">
        <p className="mx-auto mt-auto font-bold text-xl place-self-end">
          My Skill
        </p>
        <div className="grid mb-auto mx-auto grid-cols-4 lg:grid-cols-6">
          {logo.map((m: any, i: number) => {
            return (
              <div key={i} className="col-span-1 m-3">
                <svg
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={m.path} />
                </svg>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default About;
