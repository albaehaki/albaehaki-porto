import React from "react";
import Header from "./header/header";
import Content from "./contents/content";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { UseAppSelector, useAppDispatch } from "../redux/Hook";
import { selectDark, DarkModeOn } from "../redux/Slice/DarkSlice";

const Page = () => {
  const dark = UseAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <div className="flex text-gray-500 dark:text-gray-100 sm:flex-col lg:flex-row flex-col-reverse dark:bg-gray-800 bg-gray-100  h-screen ">
      <Header />
      <Content />
      <button
        onClick={() => {
          dispatch(DarkModeOn());
        }}
        className="absolute z-10 right-5 top-5 sm:top-20 lg:top-10"
      >
        {dark ? <MoonIcon className="w-7" /> : <SunIcon className="w-7" />}
      </button>
    </div>
  );
};

export default Page;
