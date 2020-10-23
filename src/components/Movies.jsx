import React from 'react';
import { Link } from 'react-router-dom';
import {
    IMAGE_BASE_URL,
    SMALL_POSTER_SIZE
} from '../config';

const Movies = ({popMovie}) => {
    return (
        <div className="main-container-movies">
            <h1 className="w100">Popular Movies</h1>
            {/* Preguntar si popMovie no es undefined, si es true el op && incluye el map siguiente */}
            {popMovie !== undefined && popMovie.map((obj) => (
                <div key={obj.id} className="container-movie">
                    <Link to={`/${obj.id}`}>
                        <img className="container-movie-image" src={`${IMAGE_BASE_URL}${SMALL_POSTER_SIZE}${obj.poster_path}`} alt={obj.title}/>
                    </Link>
                    <strong><span>{obj.title}</span></strong>
                    <span>Rated: {obj.vote_average}</span>
                </div>
            ))}
            
        </div>
    )
}

export default Movies;