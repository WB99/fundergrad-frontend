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
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
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
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
    amountRaised: "40,000",
    goal: "50,000",
    progress: 80
  },
  {
    studentID: 1,
    name: "Joel Lim",
    profilepic: "https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1662595200&v=beta&t=TFzy69HF5PuzjXTrFxqspf8K4qX72F07UbTaD6d3yxM",
    course: "Year 2 Computer Science at NTU",
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
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
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
    amountRaised: "40,000",
    goal: "50,000",
    progress: 80
  },
  {
    studentID: 1,
    name: "Joel Lim",
    profilepic: "https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1662595200&v=beta&t=TFzy69HF5PuzjXTrFxqspf8K4qX72F07UbTaD6d3yxM",
    course: "Year 2 Computer Science at NTU",
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
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
    description: "In Korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!",
    amountRaised: "40,000",
    goal: "50,000",
    progress: 80
  },

]

function StudentsPage() {
  return (
    <div>
      <NavBar/>
      <div className={classes.intro}>
        <text className={classes.text}>Find a student that you would like to sponsor!</text>
      </div>
      <div className={classes.root}>
        {students.map((student) => (
          <StudentCard data={student} />
        ))}
      </div>
    </div>
  );
}
export default StudentsPage;
