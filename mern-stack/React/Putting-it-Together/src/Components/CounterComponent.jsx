import React, { useState } from "react";

const CounterComponent = () => {
    const [count,setCount] = useState(0)

    const Addcounter = () => {
        setCount(count + 1)
    }
    return(
        <>
    <h1>{count}</h1>
    <button onClick={Addcounter}>Add</button>
    </>
    )
}

export default CounterComponent