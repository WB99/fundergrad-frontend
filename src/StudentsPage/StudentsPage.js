import React from "react";
import NavBar from "../Components/Navbar";
import StudentCard from "./StudentCard";
import classes from "./StudentsPage.module.css";


const students = [
  {
    studentID: 1,
    name: "Joel Lim",
    profilepic: "https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1662595200&v=beta&t=TFzy69HF5PuzjXTrFxqspf8K4qX72F07UbTaD6d3yxM",
    course: "Year 2 Computer Science at NTU",
    description: "I am very passionate about computer science and I would be extremely grateful to you for your donations. Every contribution, no matter how small, means a lot to me and will motivate me to study hard and achieve my goals."
  },
  {
    studentID: 2,
    name: "Ivan Teo",
    profilepic: "https://media-exp2.licdn.com/dms/image/C4E03AQHAkmwdbb6ybQ/profile-displayphoto-shrink_800_800/0/1625796668991?e=1662595200&v=beta&t=H0UhDd-jpkSyDY458pVEkY9pONdbbvDirXFQsfkhBBc",
    course: "Year 2 Computer Science at NTU",
    description: "I am very passionate about computer science and I would be extremely grateful to you for your donations. Every contribution, no matter how small, means a lot to me and will motivate me to study hard and achieve my goals."
  },
  {
    studentID: 3,
    name: "Keane Kwa",
    profilepic: "https://media-exp2.licdn.com/dms/image/C4D03AQHpl_8yMQ_vGQ/profile-displayphoto-shrink_800_800/0/1653201141694?e=1662595200&v=beta&t=qMEtfuz3FRKRLUgieNGH56EhUEpP_EgfKXKiPU1eaTc",
    course: "Year 2 Computer Science at NTU",
    description: "I am very passionate about computer science and I would be extremely grateful to you for your donations. Every contribution, no matter how small, means a lot to me and will motivate me to study hard and achieve my goals."
  },


]

function StudentsPage() {
  return (
    <div>
      <NavBar/>
      <p className={classes.text}>Find a student that you would like to sponsor!</p>
      <div className={classes.root}>
        {students.map((student) => (
          <StudentCard data={student} />
        ))}
      </div>
    </div>
  );
}
export default StudentsPage;
