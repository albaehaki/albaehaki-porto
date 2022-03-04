import React from "react";
import Page from "./components/page";
import "./index.tsx";
import { UseAppSelector } from "./redux/Hook";
import { selectDark } from "./redux/Slice/DarkSlice";

function App() {
  const dark = UseAppSelector(selectDark);
  const style: any = ``;
  return (
    <div className={`${style} ${dark ? `dark` : ``}`}>
      <Page />
    </div>
  );
}

export default App;
