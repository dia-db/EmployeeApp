import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/Add";  
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;