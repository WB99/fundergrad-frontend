import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import classes from "./FundPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { FundsContext } from "../App";
import PaymentModal from "../Components/PaymentModal";
import Overlay from "../Components/Overlay";

export default function FundPage() {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal)
  }

  const backHandler = () => {
    navigate("/funds");
  };
  
  const fundID = parseInt(useParams().id);
  
  let data = useContext(FundsContext);
  data=data.filter((fund) => fund.fundID === fundID)[0]

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
            <h1>${data.currentFunds}</h1>
            <p>Funding Ends In</p>
            <h1>1 d 5 hr 10 min</h1>
          </div>
        </div>

        <div className={classes.bottom}>
          <div>
            <h2>Requirements</h2>
            {data.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </div>
          <div>
            <h2>Funders</h2>
            {data.funders.map((funder) => (
              <li key={funder}>{funder}</li>
            ))}
          </div>
          <div className={classes.fundingCard}>
            <h2>Contribute</h2>
            Amount:
            <input type='number' placeholder="SGD" className={classes.input} />
            <button className={classes.button} onClick={togglePaymentModal}>Contribute!</button>
          </div>
        </div>
      </div>

      {showPaymentModal && <PaymentModal toggle={togglePaymentModal}/>}
      {showPaymentModal && <Overlay toggle={togglePaymentModal}/>}
    </>
  );
}
