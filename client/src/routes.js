import React from "react";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Analyitics";
//import App from "./App";
import Devices from "./Devices";
import Endpoints from "./Endpoints";
import Home from "./Home";

const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/endpoints/:id" element={<Endpoints />} />
        <Route path="/endpoints" element={<Analytics />} />
      </Routes>
    </div>
  );
};
export default RoutesTree;
