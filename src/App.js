import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarGit from "./components/NavBarGit";
import HomePage from "./components/HomePage";
import About from "./components/About";
import LogIn from "./components/Login";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarGit />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
