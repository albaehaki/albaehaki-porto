import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const typing = useRef<any>(null);
  useEffect(() => {
    gsap.from(typing.current, { opacity: 0, y: 100, duration: 1 });
  }, []);

  return (
    <div className="p-5 grid h-screen">
      {/* <p className="absolute sm:bottom-24 font-black sm:text-7xl bottom-36 text-5xl">
        Zacky Al Baehaki
      </p>
      <p className="absolute sm:bottom-5 font-bold sm:text-7xl bottom-24 text-5xl">
        Web Developer
      </p> */}
      <p
        ref={typing}
        className="self-end font-bold lg:text-[40px] text-[24px] sm:text-[30px] mb-16 sm:mb-14 lg:mb-0"
      >
        Hi,
        <br /> my name is Zacky Al-Baehaki.
        <br /> I am a Web Developer.
      </p>
    </div>
  );
};

export default Home;
