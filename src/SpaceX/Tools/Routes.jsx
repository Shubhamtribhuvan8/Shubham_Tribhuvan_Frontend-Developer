import React from "react";
import { Route, Routes } from "react-router-dom";
import SpaceX from "../Capsule/SpaceX";
import Capsule from "../Capsule/Capsule";
import Carsel from "../Launcher/Carsel";
import Capsulesearch from "../Capsule/Capsulesearch";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carsel />} />
        <Route path="/spacex" element={<SpaceX />} />
        <Route path="/capsule" element={<Capsule />} />
        <Route path="/spacexsearch" element={<Capsulesearch />} />
      </Routes>
    </div>
  );
}
