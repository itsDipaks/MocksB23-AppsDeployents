import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Portfolio from "../Pages/Portfolio";
import Register from "../Pages/Register";
import Stocks from "../Pages/Stocks";
import AdminPrivateRoute from "./PrivateRoute";
import UserprivateRout from "./UserPrivateRoute";

const CombineRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminPrivateRoute><Dashboard /></AdminPrivateRoute>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stocks" element={<Stocks/>} />
      </Routes>
    </div>
  );
};

export default CombineRoutes;
