import React, { useState, useEffect } from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm(props) {
  // const [userDetails, setUserDetails] = useState({});
  // useEffect(() => {
  //   setUserDetails(JSON.parse(localStorage.getItem("user")));
  //   console.log(userDetails);
  //   // setUser(userDetails)
  // }, []);

  const [saved, setSaved] = useState(false);

  const [school, setSchool] = useState(props.userDetails.School);
  const schoolInputHandler = (event) => {
    setSchool(event.target.value);
    setSaved(false);
    // console.log(school);
  };

  const [degree, setDegree] = useState(props.userDetails.degree);
  const degreeInputHandler = (event) => {
    setDegree(event.target.value);
    setSaved(false);
  };

  const [yos, setYOS] = useState(props.userDetails.year);
  const yosInputHandler = (event) => {
    setYOS(event.target.value);
    setSaved(false);
  };

  const [resumeUrl, setresumeUrl] = useState(props.userDetails.resume);
  const resumeUrlInputHandler = (event) => {
    setresumeUrl(event.target.value);
    setSaved(false);
  };

  const [linkedIn, setlinkedIn] = useState(props.userDetails.LI);
  const linkedInInputHandler = (event) => {
    setlinkedIn(event.target.value);
    setSaved(false);
  };

  const [fundTarget, setFundTarget] = useState(null);
  const fundTargetInputHandler = (event) => {
    setFundTarget(event.target.value);
    setSaved(false);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(props.userDetails);
    // props.setUserDetails({
    //   ...props.userDetails,
    //   school: school,
    //   degree: degree,
    //   yos: yos,
    //   linkedIn: linkedIn,
    //   fundTarget: fundTarget,
    // });
    const userInfo = {
      ...props.userDetails,
      school: school,
      degree: degree,
      yos: yos,
      linkedIn: linkedIn,
      fundTarget: fundTarget,
    };
    // const userInfo = JSON.stringify(props.userDetails);
    localStorage.setItem("user", JSON.stringify(userInfo));
    // console.log(localStorage.getItem("user"));
    setSaved(true);
  };
  return (
    <div className={classes.root}>
      <form className={classes.signup}>
        <text>School :</text>
        <input
          className={classes.input}
          onChange={schoolInputHandler}
          value={school ? school : ""}
        />

        <text className={classes.label}>Degree :</text>
        <input
          className={classes.input}
          onChange={degreeInputHandler}
          value={degree ? degree : ""}
        />

        <text className={classes.label}>Year of Study :</text>
        <input
          className={classes.input}
          onChange={yosInputHandler}
          value={yos ? yos : ""}
        />

        <text className={classes.label}>LinkedIn :</text>
        <input
          className={classes.input}
          onChange={linkedInInputHandler}
          value={linkedIn ? linkedIn : ""}
        />

        <text className={classes.label}>Link to Resume :</text>
        <input
          className={classes.input}
          onChange={resumeUrlInputHandler}
          value={resumeUrl ? resumeUrl : ""}
        />

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
