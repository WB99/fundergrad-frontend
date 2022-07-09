import React, { useState, useRef } from "react";
import NavBar from "../Components/Navbar";
import classes from "./ProfilePage.module.css";
import user from "../Assets/user.png";

import ProfileForm from "../Components/ProfileForm";

function ProfilePage() {
  const [dataUri, setDataUri] = useState(user);
  const textDetails = useRef();

  const [userSummary, setUserSummary] = useState({
    text: "Click To Edit User Summary",
    isInEditMode: false,
  });

  const changeEditMode = () => {
    console.log("edit mode");
    setUserSummary({
      text: userSummary.value,
      isInEditMode: !userSummary.isInEditMode,
    });
  };

  const updateTextValue = () => {
    const text = textDetails.current.value;
    setUserSummary({
      text: text,
      isInEditMode: false,
    });
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  const onChange = (file) => {
    if (!file) {
      setDataUri("");
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      setDataUri(dataUri);
    });
  };

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <h1>Profile Page</h1>
        <div className={classes.splitScreen}>
          {/* Left Side */}
          <div className={classes.leftPane}>
            <div className={classes.profile}>
              <div className={classes.profileWriteUp}>
                <img className={classes.profileImage} src={dataUri} />
                <div className={classes.profileSummary}>
                  <h1>Joel Lim</h1>
                  {userSummary.isInEditMode ? (
                    <div>
                      <input
                        className={classes.inputSummary}
                        type="text"
                        defaultValue={userSummary.text}
                        ref={textDetails}
                      />
                      <button onClick={updateTextValue}>✔️</button>
                    </div>
                  ) : (
                    <div onClick={changeEditMode}>{userSummary.text}</div>
                  )}
                </div>
              </div>
              <input
                className={classes.inputFile}
                type="file"
                onChange={(event) => onChange(event.target.files[0] || null)}
              />
            </div>
            <div>
              <ProfileForm />
            </div>
          </div>
          {/* Right Side */}
          <div className={classes.rightPane}>Right</div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
