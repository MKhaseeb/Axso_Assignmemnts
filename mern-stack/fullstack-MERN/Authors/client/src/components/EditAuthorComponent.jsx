import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useParams,useNavigate,Link } from "react-router-dom";


const EditAuthorComponent = () => {
    const { id } = useParams();
    const [name, setName] = useState("")
    const nav = useNavigate()
    const [authors, setAuthors] = useState([])


    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthors(res.data);
                setName(res.data.name)
                console.log(res);
            })
            
            .catch(err => console.error("Error fetching people:", err));
    };

        const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/author/' + id, {
            name,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        nav("/")

    }



    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to="/"  >Home</Link>

            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name: </label><br />
                    <input name='name' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <input type="submit" value="Edit Author"/>
                <Link to="/"  >Back</Link>


            </form>

        </>

    )
}

export default EditAuthorComponent