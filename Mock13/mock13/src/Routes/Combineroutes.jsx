import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

const Combineroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Combineroutes;
