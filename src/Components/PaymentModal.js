import React from "react";
import classes from "./PaymentModal.module.css";
import qr from "../Assets/qr.jpeg";

export default function PaymentModal(props) {
  return (
    <div className={classes.root}>
      <h1>Thank you for your contribution!</h1>
      <div>Please scan the PayNow QR code</div>
      <div className={classes.imageContainer}>
        <img src={qr} className={classes.image} />
      </div>
      <div>
        Note: Funds will be held in a holding account until registration ends.
      </div>
      <div className={classes.bottom}>
        <button className={classes.button} onClick={props.toggle}>Close</button>
      </div>
    </div>
  );
}
