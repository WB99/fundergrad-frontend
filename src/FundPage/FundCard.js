import React from "react";
import classes from "./FundCard.module.css";
import { useNavigate } from "react-router-dom";

export default function(props) {
  const fund = props.data;

  const navigate = useNavigate();

  const goToIndivFund = () => {
    navigate(`/funds/${fund.fundID}`);
  };

  return (
    <div className={classes.root}>
      <h1>{fund.fundName}</h1>
      <div>Round {fund.round}</div>
      <div>Current Funds: ${fund.currentFunds}</div>
      <div>Funding Ends on: {fund.fundingExpiration}</div>
      <div>Number of Spaces: {fund.availableSlots}</div>
      <p>
        {fund.fundDesc}
      </p>
      <button onClick={goToIndivFund} >Register</button>
    </div>
  );
}
