import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

const header = () => {
  const style: any = `w-7`;
  return (
    <div className="grid sm:relative fixed bottom-0 w-screen lg:w-[5%] h-[10%] lg:h-screen sm:shadow lg:shadow-lg">
      <div className="flex lg:flex-col justify-around h-full">
        <Link className="m-auto" to="/education">
          <AcademicCapIcon className={style} />
        </Link>
        <Link className="m-auto" to="/experience">
          <BriefcaseIcon className={style} />
        </Link>
        <Link className="m-auto" to="/">
          <HomeIcon className={style} />
        </Link>
        <Link className="m-auto" to="/galeri">
          <CollectionIcon className={style} />
        </Link>
        <Link className="m-auto" to="/about">
          <UserIcon className={style} />
        </Link>
      </div>
    </div>
  );
};

export default header;
