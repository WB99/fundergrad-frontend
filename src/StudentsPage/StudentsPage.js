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
    description: "My mum (82F) told me (12M) to do the dishes (16) but I (12M) was too busy playing Fortnite (3 kills) so I (12M) grabbed my controller (DualShock 4) and threw it at her (138kph). She fucking died, and I (12M) went to prison (18 years). While in prison I (12M) incited several riots (3) and assumed leadership of a gang responsible for smuggling drugs (cocaine) into the country. I (12M) also ordered the assassination of several celebrities (Michael Jackson, Elvis Presley and Jeffrey Epstein) and planned a terrorist attack (9/11). Reddit, AITA?",
    amountRaised: "12,000",
    goal: "20,000",
    progress: 60,
  },
  {
    studentID: 2,
    name: "Ivan Teo",
    profilepic: "https://media-exp2.licdn.com/dms/image/C4E03AQHAkmwdbb6ybQ/profile-displayphoto-shrink_800_800/0/1625796668991?e=1662595200&v=beta&t=H0UhDd-jpkSyDY458pVEkY9pONdbbvDirXFQsfkhBBc",
    course: "Year 2 Computer Science at NTU",
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
    amountRaised: "18,000",
    goal: "60,000",
    progress: 30
  },
  {
    studentID: 3,
    name: "Keane Kwa",
    profilepic: "https://media-exp2.licdn.com/dms/image/C4D03AQHpl_8yMQ_vGQ/profile-displayphoto-shrink_800_800/0/1653201141694?e=1662595200&v=beta&t=qMEtfuz3FRKRLUgieNGH56EhUEpP_EgfKXKiPU1eaTc",
    course: "Year 2 Computer Science at NTU",
    description: "So I (74M) was recently hit by a car (2014 Honda) and died. My wife (5F) organized me a funeral (cost $2747) without asking me (74M) at all. I (74M) was unable to make it because I (74M) was dead (17 days). At the funeral I heard my dad (15M) and other family members talking about how they wish I could be there and now I feel bad for not showing up. AITA?",
    amountRaised: "40,000",
    goal: "50,000",
    progress: 80
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
