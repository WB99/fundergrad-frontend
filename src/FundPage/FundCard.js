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
      <div className={classes.info}>Current Funds: ${fund.currentFunds}</div>
      <div className={classes.info}>{fund.registration ? 'Funding Ends on:' : 'Registration Ends on'} {fund.fundingExpiration}</div>
      <div className={classes.info}>Slots Available: {fund.availableSlots}</div>
      <p className={classes.desc}>
        {fund.fundDesc}
      </p>
      <button className={classes.button} onClick={goToIndivFund}>{fund.registration ? 'Fund' : 'Register'}</button>
    </div>
  );
}
