import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setAuthors(res.data);
                console.log(res);
            })
            .catch(err => console.error("Error fetching people:", err));
    };
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(() => {
                setAuthors(authors.filter(a => a._id !== authorId));
            })
            .catch(err => console.error(err));
    };


    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/CreateAuthor">Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link style={{ color: "yellow" }} to={"/UpdateAuthor/" + author._id}> Edit </Link>
                                |
                                <button
                                    onClick={() => deleteAuthor(author._id)}
                                    style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomeComponent;
