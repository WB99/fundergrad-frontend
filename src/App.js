import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";

import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/students" />
        <Route exact path="/funds" />
        <Route exact path="/profile" />
        <Route exact path="/registration" />
        <Route path="/*" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;
