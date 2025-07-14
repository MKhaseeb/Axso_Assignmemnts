//i used a bit of chatGPT in the optional side :)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerStatucComponent = () => {
    const [players, setPlayers] = useState([]);
    const [buttonColors, setButtonColors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setPlayers(res.data);
                setButtonColors(res.data.map(() => ({ playing: 'black', notPlaying: 'black', undecided: 'black' })));
            })
            .catch(err => console.error("Error fetching players:", err));
    }, []);

    const handleClick = (index, buttonType) => {
        const newColors = [...buttonColors];
        if (buttonType === 'playing') {
            newColors[index].playing = newColors[index].playing === 'black' ? 'green' : 'black';
        } else if (buttonType === 'notPlaying') {
            newColors[index].notPlaying = newColors[index].notPlaying === 'black' ? 'red' : 'black';
        } else if (buttonType === 'undecided') {
            newColors[index].undecided = newColors[index].undecided === 'black' ? 'yellow' : 'black';
        }
        setButtonColors(newColors);
    };

    return (
        <table> 
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>
                            <button
                                onClick={() => handleClick(index, 'playing')}
                                style={{
                                    backgroundColor: buttonColors[index].playing,
                                }}
                            >
                                Playing
                            </button>

                            <button
                                onClick={() => handleClick(index, 'notPlaying')}
                                style={{
                                    backgroundColor: buttonColors[index].notPlaying,
                                }}
                            >
                                Not Playing
                            </button>

                            <button
                                onClick={() => handleClick(index, 'undecided')}
                                style={{
                                    backgroundColor: buttonColors[index].undecided,
                                }}
                            >
                                Undecided
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PlayerStatucComponent;
