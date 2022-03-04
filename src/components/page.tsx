import React from "react";
import Header from "./header/header";
import Content from "./contents/content";

const page = () => {
  return (
    <div className="flex text-gray-500 dark:text-gray-100 sm:flex-col lg:flex-row flex-col-reverse dark:bg-gray-900 bg-gray-100  h-screen ">
      <Header />
      <Content />
    </div>
  );
};

export default page;
