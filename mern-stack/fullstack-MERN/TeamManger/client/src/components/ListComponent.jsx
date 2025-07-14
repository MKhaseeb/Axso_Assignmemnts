import { React, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const ListComponent = () => {
    const [players, setPlayers] = useState([])

        useEffect(() => {
        fetchPlayers();
    }, []);


    const fetchPlayers = () => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setPlayers(res.data);
                console.log(res);
            })
            .catch(err => console.error("Error fetching players:", err));
    };

        const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(() => {
                setPlayers(players.filter(a => a._id !== playerId));
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <Link to="/list">List </Link>
            |
            <Link to="createplayer"> Add Player</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Position</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.pose}</td>
                            <td>
                                <button
                                    onClick={() => deletePlayer(player._id)}
                                    style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default ListComponent