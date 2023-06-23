import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <img
            src="https://w7.pngwing.com/pngs/83/438/png-transparent-spacex-hd-logo-thumbnail.png"
            alt=""
          />
        </div>
        <Link to={"/capsule"} className="navbar__link">
          <div className="navbar__item">Search All Mission</div>
        </Link>
        <Link to={"/"} className="navbar__link">
          <div className="navbar__item">Journey</div>
        </Link>
        <Link to={"/"} className="navbar__link">
          <div className="navbar__item">Orbit</div>
        </Link>
        <Link to={"/"} className="navbar__link">
          <div className="navbar__item">Connect Spacex</div>
        </Link>
        <Link to={"/"} className="navbar__link">
          <div className="navbar__item">Mission Mars</div>
        </Link>
      </header>
    </div>
  );
}
