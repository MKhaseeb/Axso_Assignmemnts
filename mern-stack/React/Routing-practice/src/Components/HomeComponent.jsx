import React from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
const HomeComponent = () => {
  return (
    <div>RoutingComponent
      <br />
      <Link to={"/about"}>Go to About </Link>
      |
      <Link to={"/survery"}>Go to Survery </Link>
    </div>
  )
}

export default HomeComponent