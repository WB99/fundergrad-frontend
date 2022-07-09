import React from "react";
import "./Navbar.css"

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();


  const studentsHandler = () => {
    navigate("/students");
  };

  const fundsHandler = () => {
    navigate("/funds");
  };

  const profileHandler = () => {
    navigate("/profile");
  };

  const landingHandler = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <a className="navbar-title" onClick={landingHandler}>F 'undergrad</a>
      <div className="button-holder">
        <div className="button" onClick={studentsHandler}>Fund a student</div>
        <div className="button" onClick={fundsHandler}>Funds</div>
        <div className="button" onClick={profileHandler}>Profile</div>
      </div>
    </div>
  );
}
