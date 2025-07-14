import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const CreatePlayerComponent = () => {
    const [name, setName] = useState("")
    const [pose, setPose] = useState("")
    const nav = useNavigate()
    const [errors, setErrors] = useState([])

        const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/player', {
            name,
            pose,
        })
        .then(res => {
            console.log("Player added:", res.data);
            setName("");
            setPose("");
            nav('/')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr);
                console.log(errorResponse)


            })
        

    };

  return (
    <>
                <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <label>Name: </label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Position: </label><br />
                    <input type="text" onChange={(e) => setPose(e.target.value)} value={pose} />
                </p>
                <input type="submit" value="Add Player" />
                <Link to="/"  >Back</Link>
            </form>
    
    </>
  )
}

export default CreatePlayerComponent