import React from 'react';
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from '../config';

const Movie = ({popMovie}) => {
    return (
        <div>
            {popMovie !== undefined && popMovie.map((obj) => (
                // JSON.stringify(obj)
                <div>
                    <p>{obj.title}</p>
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${obj.backdrop_path}`} alt={obj.title}/>
                </div>
            ))}
            
        </div>
    )
}

export default Movie;