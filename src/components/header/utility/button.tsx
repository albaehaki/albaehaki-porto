import React from "react";
import { Link } from "react-router-dom";

const button = ({ toward, keyword }: any) => {
  return (
    <div className="flex m-auto">
      <Link to={toward}>{keyword}</Link>
    </div>
  );
};

export default button;
