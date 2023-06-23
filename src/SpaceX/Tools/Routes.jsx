import React from "react";
import { Route, Routes } from "react-router-dom";
import SpaceX from "../Capsule/SpaceX";
import Capsule from "../Capsule/Capsule";
import Carsel from "../Launcher/Carsel";
import Capsulesearch from "../Capsule/Capsulesearch";
import CapsuleDetails from "../Capsule/CapsuleDetails";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carsel />} />
        <Route path="/spacex" element={<SpaceX />} />
        <Route path="/capsule" element={<Capsule />} />
        <Route path="/capsule" element={<Capsulesearch />} />
        <Route path="/capsule/:capsule_serial" element={<CapsuleDetails />} />
      </Routes>
    </div>
  );
}
