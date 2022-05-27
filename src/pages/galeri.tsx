import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
// import {
//   siReact,
//   siTailwindcss,
//   siTypescript,
//   siRedux,
//   siHtml5,
//   siJavascript,
//   siCss3,
//   siGreensock,
//   siBootstrap,
//   siWordpress,
// } from "simple-icons/icons";
import project from "../Data/DataProjects";
// import { TupleType } from "typescript";
// const project = require("../Data/DataProjects");
// import { gambar } from "../../../img/1.png";

// const gambar = require("../img/1.png");
// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//   };

// declare module "*.png" {
//   const value: any;
//   export default value;
// }

// interface IconDeclaration {
//   guidelines: string;
//   hex: string;
//   license: string;
//   path: string;
//   slug: string;
//   source: string;
//   svg: TupleType;
//   title: string;
// }

const Galeri = () => {
  const [id, setId] = useState(project.length);

  return (
    <div className="m-auto pt-5 pb-20  px-5 lg:px-20">
      <div className="grid pb-3">
        <h2 className="font-bold m-auto text-2xl ">My Projects</h2>
      </div>
      <div className="grid grid-cols-3 py-2">
        <ChevronLeftIcon
          onClick={() => {
            if (id === 1) {
              setId(project.length);
            } else {
              setId(id - 1);
            }
          }}
          className="w-7"
        />
        <p className="mx-auto">{id}</p>
        <ChevronRightIcon
          onClick={() => {
            if (id === project.length) {
              setId(1);
            } else {
              setId(id + 1);
            }
          }}
          className="w-7 justify-self-end"
        />
      </div>
      <div className="shadow-md py-3 px-5 bottom-1 rounded-xl">
        <h2 className="font-bold text-2xl">{project[id - 1].name}</h2>
        {/* <p>{project[id - 1].description}</p> */}
        <img
          className="py-2 m-auto sm:w-3/5 lg:w-2/4 "
          src={`/img/${project[id - 1].image}`}
          alt="gambar"
        />
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 xl:grid-cols-12 pt-3 gap-3">
          {project[id - 1].tags?.map((x: any, i: number) => (
            <svg
              key={i}
              className="h-10 w-10 col-span-1 m-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={() => {
                console.log(x.path);
              }}
            >
              <path d={x.path} />
            </svg>
          ))}
        </div>
        <button className="py-2">
          <a target="blank" href={project[id - 1].link}>
            <span className="font-bold">Visit</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Galeri;
