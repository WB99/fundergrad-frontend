import React from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  return (
    <div className={classes.root}>
      <form className={classes.signup}>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input placeholder="Confirm password"></input>
        {/* <input
        className={classes.submit}
        type="submit"
        value="Create Account"
      ></input> */}
      </form>
    </div>
  );
}

export default ProfileForm;
