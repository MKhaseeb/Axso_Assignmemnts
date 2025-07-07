import React from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
const AboutComponent = () => {
  return (
    <div>AboutComponent
          <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
    </div>
  )
}

export default AboutComponent