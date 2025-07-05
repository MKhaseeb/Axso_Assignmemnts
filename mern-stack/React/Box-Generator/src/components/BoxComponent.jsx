import React from "react";


const BoxComponent = () =>{

    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
 



    return(
        <>
        {
            groceryList.map( (item , i) => 
            <ul>
                <li key={i}>{item}</li>
            </ul>
            )
        }
        <h1>test</h1>

        </>
    )
}

export default BoxComponent;