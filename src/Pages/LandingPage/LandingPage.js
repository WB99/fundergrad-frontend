import "./LandingPage.css"
import React from "react";
import NavBar from "../../Components/Navbar";

function LandingPage() {
  return (
    <div>
       <NavBar />
      <div className="landing-page">
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
    </div>
  );
}
export default LandingPage;