import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from './pages/Nav/Nav'
import './App.css';
import MainPage from "./pages/Main/main";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects/index"
import ContactPage from "./pages/Contact/index"





function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Contact" element={<ContactPage/>}/>
    </Routes>
    </>
  );
}

export default App;
