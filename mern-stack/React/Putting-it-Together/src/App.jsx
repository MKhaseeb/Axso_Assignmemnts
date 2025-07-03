import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './Components/CounterComponent'

function App() {

  return (
    <>
      <CounterComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>
      <CounterComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>
      <CounterComponent firstname = "werwe" lastname = "werwerw" age = {228} haircolor = "egwgr"/>
      <CounterComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>
      <CounterComponent/>
    </>
  )
}

export default App
