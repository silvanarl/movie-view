import React from 'react';
import PropTypes from "prop-types";
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
                <div key={obj.id} className="flex">
                    <div className="container-movie hvr-grow-rotate">
                        {console.log(obj)}
                        <Link to={`/${obj.id}`}>
                            <img className="container-movie-image" src={`${IMAGE_BASE_URL}${SMALL_POSTER_SIZE}${obj.poster_path}`} alt={obj.title}/>
                        </Link>
                        <div className="container-movie-info">
                            <h3>{obj.title}</h3>
                            <p><span role="img" aria-labelledby=":star:">⭐</span>{obj.vote_average}</p>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

Movies.propTypes = {
    popMovie: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Movies;