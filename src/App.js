import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./Pages/LandingPage/LandingPage";
import FundsPage from "./Pages/FundsPage";
import FundPage from "./Pages/FundPage";
import ProfilePage from "./Pages/ProfilePage";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentsPage from "./StudentsPage/StudentsPage";
import StudentPage from "./StudentsPage/StudentPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/students" element={<StudentsPage />}/>
        <Route exact path="/students/:id" element={<StudentPage />}/>
        <Route exact path="/funds" element={<FundsPage />}/>
        <Route exact path="/funds/:id" element={<FundPage />}/>
        <Route exact path="/profile" element={<ProfilePage />}/>
        <Route exact path="/registration" element={<RegistrationPage />}/>
        <Route path="/*" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;
