import React from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  return (
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
  );
}

export default ProfileForm;
