import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from './pages/Nav/Nav'
import './App.css';
import MainPage from "./pages/Main/main";


function App() {
  return (
    <>
    <Nav />
    <MainPage />
    </>
  );
}

export default App;
