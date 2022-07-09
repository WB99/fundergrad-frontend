import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

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
    <div className={classes.root}>
      <div className={classes.link} onClick={studentsHandler}>
          <p className={classes.text}>Fund a Student</p>

      </div>

      <div className={classes.link} onClick={fundsHandler}>
        <p className={classes.text}>General Funds</p>
      </div>

      <div className={classes.link} onClick={profileHandler}>
        <p className={classes.text}>My Profile</p>
      </div>

    </div>
  );
}
