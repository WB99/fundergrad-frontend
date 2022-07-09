import React from "react";
import FundCard from "../FundPage/FundCard";
import classes from "./FundsPage.module.css";
import NavBar from "../Components/Navbar";

export default function FundsPage() {
  const funds = [
    {
      fundID: 1,
      fundName: "Medicine Fund",
      fundDesc: "Lorem ipsum blah blah",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
    },
    {
      fundID: 2,
      fundName: "Law Fund",
      fundDesc: "Lorem ipsum blah blah",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
    },
    {
      fundID: 3,
      fundName: "Engineering Fund",
      fundDesc: "Lorem ipsum blah blah",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
    },
    {
      fundID: 4,
      fundName: "General Fund",
      fundDesc: "Lorem ipsum blah blah",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
    },
  ];

  return (
    <>
    <NavBar/>
    <div className={classes.root}>
      {funds.map((fund) => (
        <FundCard data={fund} />
      ))}
    </div>
    </>
  );
}
