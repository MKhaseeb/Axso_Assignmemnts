import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const LoginComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const nav = useNavigate()

    const handelSubmint = (e) => {
        const errorArr = [];
        e.preventDefault()

        const payload = {
            email,
            password,
        };

        axios.post('http://localhost:8000/api/login', payload, { withCredentials: true })
            .then(res => {
                console.log(res.data);
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
                <label>Email: </label><br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </p>
            <p>
                <label>Password: </label><br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </p>

            <input type="submit" value="Sign in" />



        </form>
    )
}

export default LoginComponent