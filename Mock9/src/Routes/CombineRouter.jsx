import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

const CombineRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default CombineRouter;
