import React from "react";
import NavBar from "../Components/Navbar";
import Singup from "../Components/Signup/Signup";
import classes from "./RegistrationPage.module.css"

function RegistrationPage() {
  return (
    <div>
      <NavBar/>
      <div className={classes.root}>
        <div className={classes.left}>
          <div className={classes.h1}>
            F'Undergrad
          </div>
          <div className={classes.h2}>
            Empowering Students
          </div>
        </div>
        <div className="right">
          <Singup />
        </div>

      </div>
    </div>

  );
}
export default RegistrationPage;
