import React from "react";
import Header from "./header/header";
import Content from "./contents/content";

const page = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row flex-col-reverse bg-gray-100  h-screen ">
      <Header />
      <Content />
    </div>
  );
};

export default page;
