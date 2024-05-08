import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navlogo">
        <img src='./uploads/logo.png' alt="not found" className="imgRotate"/>
      </div>
      <div className="subcontainer">
        <button className="btn-1">Get Project</button>
        <button className="btn-2">Onboard Talent</button>
      </div>
    </div>
  );
};

export default NavBar;
