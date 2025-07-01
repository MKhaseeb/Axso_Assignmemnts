import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Dojo!</h1>
      <p>Things i need to do</p>
      <ul>
          <li>Exmple 1</li>
          <li>Exmple 2</li>
          <li>Exmple 3</li>
          <li>Exmple 4</li>
      </ul>
    </>
  )
}

export default App
