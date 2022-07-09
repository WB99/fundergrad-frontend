import React, { useState } from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  return (
    <div className={classes.root}>
      <form className={classes.signup}>
        <text>School :</text>
        <input className={classes.input} />
        <text>Degree :</text>
        <input className={classes.input} />
        <text>Year of Study :</text>
        <input className={classes.input} />
        <text>LinkedIn :</text>
        <input className={classes.input} />
        <input
          className={classes.submit}
          type="submit"
          value="Update Profile"
        ></input>
      </form>
    </div>
  );
}

export default ProfileForm;
