import React, { useState, useRef, useEffect } from "react";
import NavBar from "../Components/Navbar";
import classes from "./ProfilePage.module.css";
import user from "../Assets/user.png";

import ProfileForm from "../Components/ProfileForm";

function ProfilePage() {
  const [dataUri, setDataUri] = useState(user);
  const [userDetails, setUserDetails] = useState({});
  const textDetails = useRef();
  const [role, setRole] = useState();

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
    console.log(userDetails);
    // setUser(userDetails)
  }, []);

  const [userSummary, setUserSummary] = useState({
    text: "Click To Edit User Summary",
    isInEditMode: false,
  });
  const changeEditMode = () => {
    console.log("edit mode");
    setUserSummary({
      ...userSummary,
      isInEditMode: true,
    });
  };

  const updateTextValue = (e) => {
    let text = textDetails.current.value;
    if (text == "") {
      setUserSummary({
        text: "Click To Edit User Summary",
        isInEditMode: false,
      });
      e.preventDefault();
      setUserDetails({
        ...userDetails,
        summary: "Click To Edit User Summary",
        profilePicUri: dataUri,
      });
      console.log(userSummary);
      const userInfo = JSON.stringify(userDetails);
      localStorage.setItem("user", userInfo);
      console.log(localStorage.getItem("user"));
    } else {
      setUserSummary({
        text: text,
        isInEditMode: false,
      });
      e.preventDefault();
      // here
      console.log(userSummary);
      setUserDetails({
        ...userDetails,
        summary: userSummary.text,
        profilePicUri: dataUri,
      });
      const userInfo = JSON.stringify(userDetails);
      localStorage.setItem("user", userInfo);
      console.log(localStorage.getItem("user"));
    }
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
      setDataUri(dataUri);
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
                  <h1>{userDetails.name}</h1>
                  {userSummary.isInEditMode ? (
                    <div className={classes.profileText}>
                      <textarea
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
            {/* <div className={classes.uploadResume}>
              <span className={classes.uploadText}>Upload Resume</span>
            </div> */}
          </div>
          {/* Right Side */}
          {userDetails.role == "student" ? (
            <div className={classes.rightPane}>
              <ProfileForm />
            </div>
          ) : (
            <div className={classes.rightPane}>
              <span className={classes.thankYouText}>
                Thank you for contributing to F'Undergrad. You donations could
                further the educational needs of countless needy students with
                physical disabilities who have displayed scholastic aptitude.
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
