import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBarGit from "./components/NavBarGit";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarGit />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
