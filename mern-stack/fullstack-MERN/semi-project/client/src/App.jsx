import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidenavComponenet from './components/SidenavComponenet'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
function App() {

  return (
    <>
      <Routes>
        <Route path="/"  element={<SidenavComponenet />}/>
        <Route path="/register"  element={<RegisterComponent/>}/>
        <Route path="/login"  element={<LoginComponent/>}/>
      </Routes>
    </>
  )
}

export default App
