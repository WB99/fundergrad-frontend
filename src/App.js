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
import joel from "./Assets/joel.png"

export const FundsContext = createContext();
export const UsersContext = createContext();
export const SignupContext = createContext();
export const ProfilesContext = createContext();

function App() {
  const funds = [
    {
      fundID: 1,
      fundName: "Medicine Fund",
      fundDesc: "A fund for students pursuing a degree in Medicine. Started by Dr. Ong Tan Cheong, Senior Consultant at Tan Tock Seng Hospital.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
      registration: true,
      requirements: ["Pursuing Bachelors in Medicine", "Enrolled in a local univeristy", "Passionate in the healthcare industry"],
      funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
    },
    {
      fundID: 2,
      fundName: "Law Fund",
      fundDesc: "A fund for students pursuing a degree in Medicine. Started by Mr. J Shamugan, Managing Partner at J & Y Law.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      registration: true,
      availableSlots: 20,
      requirements: ["Pursuing Bachelors in Law", "Enrolled in a local univeristy", "Passionate in the legal industry"],
      funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
    },
    {
      fundID: 3,
      fundName: "Business Fund",
      fundDesc: "A fund for students pursuing a degree in Business. Started by Mr. Yee Kuan Yew, CEO of Mingtel.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      registration: true,
      availableSlots: 20,
      requirements: ["Pursuing Bachelors in Business", "Enrolled in a local univeristy", "Passionate in the business industry"],
      funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
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
      requirements: ["Pursuing Bachelors in Medicine", "Enrolled in a local univeristy", "Passionate in the their respective industry"],
      funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
    },
    {
      fundID: 5,
      fundName: "Finance Fund",
      fundDesc: "A fund for students pursuing a degree in Finance. Started by Mr. Lawrence Tong, Director of JIC.",
      round: 1,
      registrationExpiration: "12 Jul 2022",
      fundingExpiration: "10 Jul 2022",
      currentFunds: 10000,
      totalSlots: 10,
      availableSlots: 20,
      registration: false,
      requirements: ["Pursuing Bachelors in Finance", "Enrolled in a local univeristy", "Passionate in the finance industry"],
      funders: ['Marcus Dad', 'Marcus Mom', 'Marcus Ah Ma']
    },
  ];
  const profiles = [
    {
      name : "Jole Lim Chu Kang",
      email : "chuchu@gmail.com",
      password : "123456789",
      School: "NUS",
      degree: "Computer Science",
      year: 1,
      LI: "linkedin.com/chukang",
      profilepic: joel,
      resume: {"https://drive.google.com/file/d/1zUpmTruNMvEH03cLHr9pN1VWG1JxLXP_/view?usp=sharing"},
      role: "student"
    },
    {
      name : "Ivan Teo Meng Ern",
      email : "teoboy@gmail.com",
      password : "123456789",
      School: "NUS",
      degree: "Business",
      year: "Graduated",
      LI: "linkedin.com/meng",
      profilepic: joel,
      resume: {"https://drive.google.com/file/d/1zUpmTruNMvEH03cLHr9pN1VWG1JxLXP_/view?usp=sharing"},
      role: "donor"
    }
  ]
  return (
    <>
    <FundsContext.Provider value={funds}>
    <UsersContext.Provider value={["here", "there"]}>
    <SignupContext.Provider value={{}} >
    <ProfilesContext.Provider value={profiles} >
      <Router>
        <Routes>
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path="/students" element={<StudentsPage />} />
          <Route exact path="/students/:id" element={<StudentPage />} />
          <Route exact path="/funds" element={<FundsPage />} />
          <Route exact path="/funds/:id" element={<FundPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/registration" element={<RegistrationPage />} />
          <Route path="/*" element={<Navigate to="/landing" />} />
        </Routes>
      </Router>
    </ProfilesContext.Provider>
    </SignupContext.Provider>
    </UsersContext.Provider>
    </FundsContext.Provider>

    </>
  );
}

export default App;
