
import './App.css'
import ProductIDCompnenet from './components/ProductIDComponent'
import ProductComponent from './components/ProductComponent'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
    <Route element={<ProductComponent/>} path='/product/'/>
    <Route element={<ProductIDCompnenet/>} path="/product/:id" />
    </Routes>
    </>
  )
}

export default App
