import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const RegisterComponent = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([])
    const nav = useNavigate()

    const handelSubmint = (e) => {
        const errorArr = [];
        e.preventDefault()

         const payload = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    };

        axios.post('http://localhost:8000/api/register', payload, { withCredentials: true })
            .then(res => {
                console.log( res.data);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                nav('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr);
                console.log(errorResponse)


            })



    }

    return (
        <form onSubmit={handelSubmint}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}

            <p>
                <label>First name: </label><br />
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </p>
            
            <p>
                <label>Last name: </label><br />
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </p>
            <p>
                <label>Email: </label><br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </p>
            <p>
                <label>Password: </label><br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </p>
            <p>
                <label>Confirm Password: </label><br />
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </p>

            <input type="submit" value="Sign up" />



        </form>
    )
}

export default RegisterComponent