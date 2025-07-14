import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListComponent from './components/ListComponent';
import CreatePlayerComponent from './components/createPlayerComponent';
import PlayerStatucComponent from './components/PlayerStatucComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<ListComponent/>}/>
    <Route path='/createplayer' element={<CreatePlayerComponent/>}/>
    <Route path='/list' element={<PlayerStatucComponent/>}/>
      </Routes>
    </>
  )
}

export default App
