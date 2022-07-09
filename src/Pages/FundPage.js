import React from "react";
import NavBar from "../Components/Navbar";
import classes from "./FundPage.module.css";
import { useNavigate } from "react-router-dom";

export default function FundPage() {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/funds");
  };

  const data = {
    fundID: 1,
    fundName: "Medicine Fund",
    fundDesc:
      "A fund for students pursuing a degree in Medicine. Started by Dr. Ong Tan Cheong, Senior Consultant at Tan Tock Seng Hospital.",
    round: 1,
    registrationExpiration: "12 Jul 2022",
    fundingExpiration: "10 Jul 2022",
    currentFunds: 10000,
    totalSlots: 10,
    availableSlots: 20,
    requirements: ["Pursuing Bachelors in Medicine", "Enrolled in a local univeristy", "Passionate in the healtcare indsutry"],
    funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
  };

  return (
    <>
      <NavBar />
      <button className={classes.backButton} onClick={backHandler}>
        🔙 All Funds
      </button>
      <div className={classes.root}>
        <div className={classes.top}>
          <div className={classes.topLeft}>
            <h1>{data.fundName}</h1>
            <p>{data.fundDesc}</p>
          </div>

          <div className={classes.topRight}>
            <p>Current Funding</p>
            <h1>$10,000</h1>
            <p>Funding Ends In</p>
            <h1>1 d 5 hr 10 min</h1>
          </div>
        </div>

        <div className={classes.bottom}>
          <div>
            <h2>Requirements</h2>
            {data.requirements.map((requirement)=>(<li>{requirement}</li>))}
          </div>
          <div>
            <h2>Funders</h2>
            {data.funders.map((funder)=>(<li>{funder}</li>))}
          </div>
          <div className={classes.fundingCard}>
            <h2>Contribute</h2>
            <h3>Amount:</h3>
            <input placeholder="SGD" className={classes.input} />
            <button className={classes.button}>Contribute!</button>
          </div>
        </div>
      </div>
    </>
  );
}
