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
      <div className="navbar-title" onClick={landingHandler}>F'Undergrad</div>
      <div className="button-holder">
        <div className="button" onClick={studentsHandler}>Fund a student</div>
        <div className="button" onClick={fundsHandler}>Funds</div>
        <div className="button" onClick={profileHandler}>My profile</div>
      </div>
    </div>
  );
}
