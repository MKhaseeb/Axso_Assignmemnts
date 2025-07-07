import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ApiComponent = () => {
    const [arr, setArr] = useState([]);
    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            setArr(response.data.results);
        }).catch(err => {
            console.log(err);
        });
        }, []);
        
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