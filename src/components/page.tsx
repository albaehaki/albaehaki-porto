import React, { useEffect, useRef } from "react";
import Header from "./header/header";
import Content from "./contents/content";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { UseAppSelector, useAppDispatch } from "../redux/Hook";
import { selectDark, DarkModeOn } from "../redux/Slice/DarkSlice";
import { gsap } from "gsap";

const Page = () => {
  const dark = UseAppSelector(selectDark);
  const dispatch = useAppDispatch();
  const sunmoon = useRef<any>(null);

  useEffect(() => {
    if (dark === true) {
      gsap.fromTo(
        sunmoon.current,
        { rotation: 0 },
        { rotation: 360, duration: 1 }
      );
    } else {
      gsap.fromTo(
        sunmoon.current,
        { rotation: 360 },
        { rotation: 0, duration: 1 }
      );
    }
  }, [dark]);

  return (
    <div className="flex font-mono text-gray-500 dark:text-gray-100 sm:flex-col lg:flex-row dark:bg-gray-800 bg-gray-100 overflow-x-hidden h-screen overflow-y-auto dark:duration-1000 duration-1000">
      <Header />
      <Content />
      <button
        ref={sunmoon}
        onClick={() => {
          dispatch(DarkModeOn());
          //gsap.from(sunmoon.current, { rotation: 360, duration: 1 });
        }}
        className="absolute z-10 right-5 top-5 after:animate-[spin_3s_linear] sm:top-20 duration-500 lg:top-5"
      >
        {dark ? <MoonIcon className="w-7 " /> : <SunIcon className="w-7" />}
      </button>
    </div>
  );
};

export default Page;
