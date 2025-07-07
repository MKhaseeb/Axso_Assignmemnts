import React from 'react'
import { useParams } from 'react-router-dom';

const ParamComponent = () => {
    const {id} = useParams()
  return (
    <div>This number is {id} </div>
  )
}

export default ParamComponent