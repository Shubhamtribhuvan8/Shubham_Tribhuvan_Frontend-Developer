import React from "react";
import { useParams } from "react-router-dom";
export default function SpaceX() {
  const { capsule_serial } = useParams();
  console.log(capsule_serial);
  return <div>SpaceX</div>;
}
