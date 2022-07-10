import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FundsPage from "./Pages/FundsPage";
import FundPage from "./Pages/FundPage";
import ProfilePage from "./Pages/ProfilePage";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentsPage from "./StudentsPage/StudentsPage";
import StudentPage from "./StudentsPage/StudentPage";
import LoginPage from "./Pages/LoginPage";
import { Navbar } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import joel from "./Assets/joel.png";

export const FundsContext = createContext();
export const UsersContext = createContext();
export const SignupContext = createContext();
export const ProfilesContext = createContext();
export const StudentsContext = createContext();


function App() {
  const funds = [
    {
      fundID: 1,
      fundName: "Medicine Fund",
      fundDesc:
        "A fund for students pursuing a degree in Medicine. Started by Dr. Ong Tan Cheong, Senior Consultant at Tan Tock Seng Hospital.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
      registration: true,
      requirements: [
        "Pursuing Bachelors in Medicine",
        "Enrolled in a local univeristy",
        "Passionate in the healthcare industry",
      ],
      funders: ["Marcus Dad", "Marcus Mom", "Marcus Ah Ma"],
    },
    {
      fundID: 2,
      fundName: "Law Fund",
      fundDesc:
        "A fund for students pursuing a degree in Medicine. Started by Mr. J Shamugan, Managing Partner at J & Y Law.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      registration: true,
      availableSlots: 20,
      requirements: [
        "Pursuing Bachelors in Law",
        "Enrolled in a local univeristy",
        "Passionate in the legal industry",
      ],
      funders: ["Marcus Dad", "Marcus Mom", "Marcus Ah Ma"],
    },
    {
      fundID: 3,
      fundName: "Business Fund",
      fundDesc:
        "A fund for students pursuing a degree in Business. Started by Mr. Yee Kuan Yew, CEO of Mingtel.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      registration: true,
      availableSlots: 20,
      requirements: [
        "Pursuing Bachelors in Business",
        "Enrolled in a local univeristy",
        "Passionate in the business industry",
      ],
      funders: ["Marcus Dad", "Marcus Mom", "Marcus Ah Ma"],
    },
    {
      fundID: 4,
      fundName: "General Fund",
      fundDesc: "A general fund for all majors!",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
      registration: true,
      requirements: [
        "Pursuing Bachelors in Medicine",
        "Enrolled in a local univeristy",
        "Passionate in the their respective industry",
      ],
      funders: ["Marcus Dad", "Marcus Mom", "Marcus Ah Ma"],
    },
    {
      fundID: 5,
      fundName: "Finance Fund",
      fundDesc:
        "A fund for students pursuing a degree in Finance. Started by Mr. Lawrence Tong, Director of JIC.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
      registration: false,
      requirements: [
        "Pursuing Bachelors in Finance",
        "Enrolled in a local univeristy",
        "Passionate in the finance industry",
      ],
      funders: ["Marcus Dad", "Marcus Mom", "Marcus Ah Ma"],
    },
  ];
  const profiles = [
    {
      name: "Jole Lim Chu Kang",
      email: "chuchu@gmail.com",
      password: "123456789",
      School: "NUS",
      degree: "Computer Science",
      year: 1,
      LI: "linkedin.com/chukang",
      profilepic: joel,
      resume:
        "https://drive.google.com/file/d/1zUpmTruNMvEH03cLHr9pN1VWG1JxLXP_/view?usp=sharing",
      role: "student",
    },
    {
      name: "Ivan Teo Meng Ern",
      email: "teoboy@gmail.com",
      password: "123456789",
      School: "NUS",
      degree: "Business",
      year: "Graduated",
      LI: "linkedin.com/meng",
      profilepic: joel,
      resume:
        "https://drive.google.com/file/d/1zUpmTruNMvEH03cLHr9pN1VWG1JxLXP_/view?usp=sharing",
      role: "donor",
    },
  ];
  const students = [
      { studentID: 1,
        name: "Joel Lim",
        firstname: "Joel",
        profilepic: "https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1663200000&v=beta&t=x1U3pladsVD3aWnu1tY7XZqF683jVFwsbvJ-62M1d_o",
        course: "Year 2 Computer Science at NTU",
        amountRaised: "10,000",
        progress: 20,
        goal: "50,000",
        linkedin: "https://www.linkedin.com/in/joel-lim-jie-en/",
        description: "I am passionate in computing. I hope to contribute back to society and make a difference when I enter the workforce. Your donation means a lot to me and motivates me to study hard to achieve my goals. Thank you for your kindness!",
        fundusage: "I will use the funds to cover the school fees for my remaining 2 years of studies. The excess will be used to cover my hostel fees and other miscellaneous fees."
      },
      { studentID: 2,
        name: "Ivan Teo",
        firstname: "Ivan",
        profilepic: "https://media-exp2.licdn.com/dms/image/C4E03AQHAkmwdbb6ybQ/profile-displayphoto-shrink_800_800/0/1625796668991?e=1663200000&v=beta&t=jKAHpWsv7vC0OPxNRQ116wkSdNzZM12sSKsm0irR6bA",
        course: "Year 2 Computer Science at NTU",
        amountRaised: "6,000",
        progress: 10,
        goal: "60,000",
        linkedin: "https://www.linkedin.com/in/ivanteozhiming/",
        description: "I am passionate in computing. I hope to contribute back to society and make a difference when I enter the workforce. Your donation means a lot to me and motivates me to study hard to achieve my goals. Thank you for your kindness!",
        fundusage: "I will use the funds to cover the school fees for my remaining 2 years of studies. The excess will be used to cover my hostel fees and other miscellaneous fees."
      },
      { studentID: 3,
        name: "Keane Kwa",
        firstname: "Keane",
        profilepic: "https://media-exp2.licdn.com/dms/image/C4D03AQHpl_8yMQ_vGQ/profile-displayphoto-shrink_800_800/0/1653201141694?e=1663200000&v=beta&t=QAhGhNTc8EpoiNoRzJ81YwxMAXfO6GhlV19u68feR9I",
        course: "Year 2 Computer Science at NTU",
        amountRaised: "30,000",
        progress: 80,
        goal: "37,500",
        linkedin: "https://www.linkedin.com/in/keane-kwa/",
        description: "I am passionate in computing. I hope to contribute back to society and make a difference when I enter the workforce. Your donation means a lot to me and motivates me to study hard to achieve my goals. Thank you for your kindness!",
        fundusage: "I will use the funds to cover the school fees for my remaining 2 years of studies. The excess will be used to cover my hostel fees and other miscellaneous fees."
      }
  ]
  return (
    <>
      <FundsContext.Provider value={funds}>
        <UsersContext.Provider value={["here", "there"]}>
          <SignupContext.Provider value={{}}>
            <ProfilesContext.Provider value={profiles}>
            <StudentsContext.Provider value={students}>

              <Router>
                <Routes>
                  <Route exact path="/landing" element={<LandingPage />} />
                  <Route exact path="/students" element={<StudentsPage />} />
                  <Route exact path="/students/:id" element={<StudentPage />} />
                  <Route exact path="/funds" element={<FundsPage />} />
                  <Route exact path="/funds/:id" element={<FundPage />} />
                  <Route exact path="/profile" element={<ProfilePage />} />
                  <Route exact path="/login" element={<LoginPage />} />
                  <Route
                    exact
                    path="/registration"
                    element={<RegistrationPage />}
                  />
                  <Route path="/*" element={<Navigate to="/landing" />} />
                </Routes>
              </Router>
            </StudentsContext.Provider>
            </ProfilesContext.Provider>
          </SignupContext.Provider>
        </UsersContext.Provider>
      </FundsContext.Provider>
    </>
  );
}

export default App;
