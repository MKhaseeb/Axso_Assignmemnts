import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './Components/CounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterComponent/>
    </>
  )
}

export default App
