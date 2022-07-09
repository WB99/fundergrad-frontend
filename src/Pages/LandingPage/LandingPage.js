import "./LandingPage.css"
import React from "react";
import NavBar from "../../Components/Navbar";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-page-holder">
        <div className="quote"> Empowering Students</div>
        <div className="button-holder-landing">
          <button className="landing-button">
            Log In
          </button>
          <button className="landing-button signup">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;