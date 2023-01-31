import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from './pages/Nav/Nav'
import './App.css';
import MainPage from "./pages/Main/main";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    </Routes>
    </>
  );
}

export default App;
