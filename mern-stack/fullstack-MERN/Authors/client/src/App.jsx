import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AuthorComponent from './components/AuthorComponent';
import HomeComponent from './components/HomeComponent';
import EditAuthorComponent from './components/editAuthorComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/CreateAuthor" element={<AuthorComponent />} />
        <Route path="/UpdateAuthor/:id" element={< EditAuthorComponent/>} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>

    </>
  )
}

export default App
