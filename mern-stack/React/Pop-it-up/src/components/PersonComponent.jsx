import React from 'react'

const PersonComponent = ({firstname,lastname,age,haircolor}) => {

    return(
        <>
        <h1>{firstname}, {lastname} </h1>
        <p>Age: {age}</p>
        <p>Hair Color:{haircolor}</p>
        </>
    )

}

export default PersonComponent