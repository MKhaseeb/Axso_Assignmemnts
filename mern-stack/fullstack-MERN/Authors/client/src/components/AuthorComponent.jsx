import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AuthorComponent = () => {
    const [name, setName] = useState("")
    const nav = useNavigate()
    const [errors, setErrors] = useState([])



    const onSubmitHandler = e => {
        e.preventDefault();
        const errorArr = []; // Define a temp error array to push the messages in
        axios.post('http://localhost:8000/api/author', {
            name,
        })
            .then(res => {
                console.log("Author added:", res.data);
                setName("");
                nav('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
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
            <h1>Favorite Authors</h1>
            <Link to="/"  >Home</Link>

            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <label>Name: </label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <input type="submit" value="Add Author" />
                <Link to="/"  >Back</Link>
            </form>

        </>

    )
}

export default AuthorComponent