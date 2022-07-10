import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import NavBar from "../Components/Navbar";
import Singup from "../Components/Signup/Signup";
import classes from "./RegistrationPage.module.css";

function RegistrationPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    function changePage() {
        navigate("/login");
    }
    return (
        <div className='land'>
            <h1>F 'undergrad</h1>
            <div className={classes.root}>
                <div className={classes.left}>
                    <div className={classes.h1}>F 'undergrad</div>
                    <div className={classes.h2}>Empowering Students</div>
                </div>
                <div id='right'>
                    {login === false ? (
                        <Singup changePage={changePage} />
                    ) : (
                        <Login changePage={changePage} />
                    )}
                </div>
            </div>
        </div>
    );
}
export default RegistrationPage;
