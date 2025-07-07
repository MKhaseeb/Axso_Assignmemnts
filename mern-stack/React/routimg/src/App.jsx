import { useState } from 'react'
import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './Components/HomeComponent'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ParamComponent from './Components/ParamComponent';
import WordComponent from './Components/WordComponent';

function App() {

  return (
    <>
  <Routes>
    <Route path="/home" element={<HomeComponent />} />
    <Route path="/:id" element={<ParamComponent />} />
    <Route path="word/:word/:color1/:color2" element={<WordComponent />} />
  </Routes>
    </>
  )
}

export default App
