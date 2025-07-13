import React, { useState } from "react";

const CounterComponent = ({firstname,lastname,haircolor,age}) => {
    const [count,setCount] = useState(age)

    const Addcounter = () => {
        setCount(count + 1)
    }
    return(
        <>
    <h1>{firstname}, {lastname} </h1>
    <p>Age: {count}</p>
    <p>Hair Color:{haircolor}</p>
    <button onClick={Addcounter}>Add</button>
    </>
    )
}

export default CounterComponent