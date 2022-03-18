import React from "react";
import {
  siReact,
  siTailwindcss,
  siTypescript,
  siRedux,
} from "simple-icons/icons";

const galeri = () => {
  return (
    <div className="h-screen p-10 grid grid-cols-1 md:grid-cols-4 gap-10 lg:grid-cols-4">
      <div className="col-span-1 m-auto shadow-md p-2">
        <p>albaehaki.vercel.com</p>
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
          <svg
            className="h-5 w-5 col-span-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={siTypescript.path} />
          </svg>
          <svg
            className="h-5 w-5 col-span-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={siRedux.path} />
          </svg>
        </div>
      </div>
      <div className="col-span-1 m-auto shadow-md p-2">
        <p>search-movie.vercel.com</p>
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
            <path d={siTypescript.path} />
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
      <div className="col-span-1 m-auto shadow-md p-2">
        <p>todo-list-react-typescript.vercel.com</p>
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
            <path d={siTypescript.path} />
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

export default galeri;
