import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
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


  return (
    <div className="navbar">
      <div className="navbar-title">F'Undergrad</div>
      <div className="button-holder">
        <div className="button" onClick={studentsHandler}>Fund a student</div>
        <div className="button" onClick={fundsHandler}>General fund</div>
        <div className="button" onClick={profileHandler}>My profile</div>
      </div>
    </div>
  );
}
