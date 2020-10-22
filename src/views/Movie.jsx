import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    IMAGE_BASE_URL,
    POSTER_SIZE
} from '../config';

const Movie = ({popMovie}) => {
    const {id} = useParams();
    const movies = popMovie;
    const thisMovie = movies.find(movie => parseInt(id) === movie.id);
    console.log(thisMovie);

    return (
        <div>
            <div key={thisMovie.id} className="container-movie">
                <img className="container-movie-image" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${thisMovie.poster_path}`} alt={thisMovie.title}/>
                <strong><span>{thisMovie.title}</span></strong>
                <span>Overview</span>
                <p>{thisMovie.overview}</p>
                <span>Release date: {thisMovie.release_date}</span>
                <span>Rated: {thisMovie.vote_average}</span>
            </div>
        </div>
    )
};

export default Movie;
