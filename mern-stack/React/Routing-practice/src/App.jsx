import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutComponent from './Components/AboutComponent'
import HomeComponent from './Components/HomeComponent'
import Survey from './Components/Survey'
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/" element={<HomeComponent />} />
        <Route path="/location/:city" element={<AboutComponent />}/>
        <Route path="/survery" element={<Survey/>}/>
      </Routes>
    </>
  )
}

export default App
