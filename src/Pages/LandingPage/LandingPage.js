import "./LandingPage.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/Navbar";

function LandingPage() {
  const navigate = useNavigate();

  const registrationNav= () => {
    navigate("/registration");
  };


  return (
    <div className="land">
      <h1>F'Undergrad</h1>
      <div className="landing-page">
        <div className="landing-page-holder">
          <div className="quote"> Empowering Students</div>
          <div className="button-holder-landing">
            <button className="landing-button">
              Log In
            </button>
            <button onClick={registrationNav} className="landing-button sign-up">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;