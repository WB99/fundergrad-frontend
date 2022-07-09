import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { createContext } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FundsPage from "./Pages/FundsPage";
import FundPage from "./Pages/FundPage";
import ProfilePage from "./Pages/ProfilePage";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentsPage from "./StudentsPage/StudentsPage";
import StudentPage from "./StudentsPage/StudentPage"
import LoginPage from "./Pages/LoginPage";
import { Navbar } from "react-bootstrap";
import NavBar from "./Components/Navbar";

export const FundsContext = createContext();
export const UsersContext = createContext();


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
      requirements: ['Pursuing Bachelors in Medicine']
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
    },
  ];
  return (
    <>
    <FundsContext.Provider value={funds}>
    <UsersContext.Provider value={["here", "there"]}>
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
    </UsersContext.Provider>
    </FundsContext.Provider>
    </>
  );
}

export default App;
