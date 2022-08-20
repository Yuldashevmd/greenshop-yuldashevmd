import React from "react";
import { useLocation } from "react-router-dom";
const Generic = () => {
  const location = useLocation();
  return (
    <div>
      <h1> {location?.pathname} is on proccess...</h1>
    </div>
  );
};

export default Generic;
