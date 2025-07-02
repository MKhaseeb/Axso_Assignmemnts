import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonComponent from './components/PersonComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>
      <PersonComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>
      <PersonComponent firstname = "werwe" lastname = "werwerw" age = {228} haircolor = "egwgr"/>
      <PersonComponent firstname = "Mo" lastname = "Khaseeb" age = {18} haircolor = "Brown"/>

    </>
  )
}

export default App
