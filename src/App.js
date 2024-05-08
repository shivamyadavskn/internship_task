import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./signPage/RegistrationForm";
import HomePage from "./homepage/HomePage";
import CongratPage from "./congratPage/congratPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/congratPage" element={< CongratPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
