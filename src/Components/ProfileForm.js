import React, { useState } from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  return (
    <div className={classes.root}>
      <form className={classes.signup}>
        <text>School :</text>
        <input className={classes.input} />
        <text className={classes.label}>Degree :</text>
        <input className={classes.input} />
        <text className={classes.label}>Year of Study :</text>
        <input className={classes.input} />
        <text className={classes.label}>LinkedIn :</text>
        <input className={classes.input} />
        <button className={classes.submit}>Upload Profile</button>
      </form>
    </div>
  );
}

export default ProfileForm;
