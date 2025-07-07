import React from 'react'
import { useParams } from 'react-router-dom';


const WordComponent = () => {
    const { word, color1, color2 } = useParams()
    return (
        <div
            style={{
                backgroundColor: color1,
                color: color2,
                width: 400,
                height: 70 ,
                border: "1px solid #000",
                borderRadius: "4px",
            }}
            title={color1}>
            The word is: {word}
        </div>
    )
}

export default WordComponent