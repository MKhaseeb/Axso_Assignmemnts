import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
    const [arr, setArr] = useState([]);
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            setArr(response.results);
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    return (
        <div>
            <h1>Fetch Pokemone</h1>
            {arr.map((item, index) => (
                <li key={index}>{item.name}</li> 
            ))}
        </div>
    )
}

export default ApiComponent