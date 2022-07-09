import React, { useEffect, useState, useContext } from "react";
import FundCard from "../FundPage/FundCard";
import classes from "./FundsPage.module.css";
import NavBar from "../Components/Navbar";
import {FundsContext} from "../App"

export default function FundsPage() {
  
  const funds = useContext(FundsContext)
  
  const [showCurrentlyFunding, setShowCurrentlyFunding] = useState(true)
  
  const toggleCurrentHandler = () => {
    setShowCurrentlyFunding(!showCurrentlyFunding)
    console.log(showCurrentlyFunding)
  }

  const [filteredFunds, setFilteredFunds] = useState([])

  useEffect(()=>{
    const filtered = showCurrentlyFunding ? funds.filter((fund)=>(fund.registration)) : funds.filter((fund)=>(!fund.registration))
    setFilteredFunds(filtered)
  }, [showCurrentlyFunding])

  const addFund = () => {
    funds.push({
      test: 'new FUnd'
    })
  }
  return (
    <>
    <NavBar />
    <div className={classes.filter}>
    <input className={classes.input} onChange={toggleCurrentHandler} type="checkbox"/>
    Currently Funding
    </div>
    <button onClick={addFund}>test</button>
    <div className={classes.root}>
      {filteredFunds.map((fund) => (
        <FundCard data={fund} key={fund.fundName} />
      ))}
    </div>
    </>
  );
}
