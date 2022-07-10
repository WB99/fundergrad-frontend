import React, { useState } from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [school, setSchool] = useState("");
  const schoolInputHandler = (event) => {
    setSchool(event.target.value);
    setSaved(false);
    // console.log(school);
  };

  const [degree, setDegree] = useState("");
  const degreeInputHandler = (event) => {
    setDegree(event.target.value);
    setSaved(false);
  };

  const [yos, setYOS] = useState("");
  const yosInputHandler = (event) => {
    setYOS(event.target.value);
    setSaved(false);
  };

  const [resumeUrl, setresumeUrl] = useState("");
  const resumeUrlInputHandler = (event) => {
    setresumeUrl(event.target.value);
    setSaved(false);
  };

  const [linkedIn, setlinkedIn] = useState("");
  const linkedInInputHandler = (event) => {
    setlinkedIn(event.target.value);
    setSaved(false);
  };

  const [fundTarget, setFundTarget] = useState("");
  const fundTargetInputHandler = (event) => {
    setFundTarget(event.target.value);
    setSaved(false);
  };

  const [saved, setSaved] = useState(false);

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(userDetails);
    setUserDetails({
      ...userDetails,
      school: school,
      degree: degree,
      yos: yos,
      linkedIn: linkedIn,
      fundTarget: fundTarget,
    });
    const userInfo = JSON.stringify(userDetails);
    localStorage.setItem("user", userInfo);
    console.log(localStorage.getItem("user"));
    setSaved(true);
  };
  return (
    <div className={classes.root}>
      <form className={classes.signup}>
        <text>School :</text>
        <input className={classes.input} onChange={schoolInputHandler} />

        <text className={classes.label}>Degree :</text>
        <input className={classes.input} onChange={degreeInputHandler} />

        <text className={classes.label}>Year of Study :</text>
        <input className={classes.input} onChange={yosInputHandler} />

        <text className={classes.label}>LinkedIn :</text>
        <input className={classes.input} onChange={linkedInInputHandler} />

        <text className={classes.label}>Link to Resume :</text>
        <input className={classes.input} onChange={resumeUrlInputHandler} />

        <text className={classes.label}>Fund Raising Target :</text>
        <input className={classes.input} onChange={fundTargetInputHandler} />

        <button className={classes.submit} onClick={sumbitHandler}>
          Save Profile
        </button>
        {saved ? (
          <p className={classes.successText}>Successfully Updated</p>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default ProfileForm;
