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
        <Link to={"/capsule"}>
          <div className="navbar__item">Search All Mission</div>
        </Link>
        <div className="navbar__item">About Us</div>
        <div className="navbar__item">Contact</div>
        <div className="navbar__item">Help</div>
      </header>
    </div>
  );
}
