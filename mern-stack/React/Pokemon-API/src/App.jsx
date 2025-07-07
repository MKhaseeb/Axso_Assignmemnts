import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiComponent from './components/ApiComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiComponent/>
    </>
  )
}

export default App
