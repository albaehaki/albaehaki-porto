import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./components/page";
import "./index.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
