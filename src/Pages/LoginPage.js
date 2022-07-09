import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import NavBar from "../Components/Navbar";
import Singup from "../Components/Signup/Signup";
import classes from "./RegistrationPage.module.css"

function LoginPage() {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  function changePage() {
    navigate("/registration");
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
            <Login changePage={changePage}/>
        </div>

      </div>
    </div>

  );
}
export default LoginPage;
