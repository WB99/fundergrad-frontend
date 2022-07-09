import React, { useState } from "react";
import NavBar from "../Components/Navbar";
import classes from "./ProfilePage.module.css";
import user from "../Assets/user.png";

function ProfilePage() {
  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const [dataUri, setDataUri] = useState(user);
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
                  <text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </text>
                </div>
              </div>

              <input
                className={classes.input}
                type="file"
                onChange={(event) => onChange(event.target.files[0] || null)}
              />
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
