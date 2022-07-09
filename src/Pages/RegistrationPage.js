import React from "react";
import { useState } from "react";
import Login from "../Components/Login/Login";
import NavBar from "../Components/Navbar";
import Singup from "../Components/Signup/Signup";
import classes from "./RegistrationPage.module.css"

function RegistrationPage() {
  const [login, setLogin] = useState(false)
  function changePage() {
    setLogin(!login)
  }
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
        <div id="right">
          { login === false ? <Singup changePage={changePage} /> : <Login changePage={changePage}/> }
        </div>

      </div>
    </div>

  );
}
export default RegistrationPage;
