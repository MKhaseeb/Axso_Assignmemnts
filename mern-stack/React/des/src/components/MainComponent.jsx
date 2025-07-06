import React from "react";


const MainComponent = () => {
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


        </>
    )

}

export default MainComponent