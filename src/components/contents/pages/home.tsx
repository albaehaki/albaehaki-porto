import React from "react";
import { UseAppSelector, useAppDispatch } from "../../../redux/Hook";
import { DarkModeOn, selectDark } from "../../../redux/Slice/DarkSlice";

const Home = () => {
  const dark = UseAppSelector(selectDark);
  const dispatch = useAppDispatch();
  console.log(dark);

  return (
    <div>
      <p>home</p>
      <button
        onClick={() => {
          dispatch(DarkModeOn());
        }}
      >
        {dark ? "true" : "false"}
      </button>
    </div>
  );
};

export default Home;
