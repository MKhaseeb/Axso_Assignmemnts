import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiComponent from './Components/ApiComponent';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path="/" element={<ApiComponent />} />
  </Routes>
    </>
  )
}

export default App
