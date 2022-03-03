import React from "react";
import Header from "./header/header";
import Content from "./contents/content";

const page = () => {
  return (
    <div className="flex flex-col-reverse  h-screen bg-slate-400">
      <Header />
      <Content />
    </div>
  );
};

export default page;
