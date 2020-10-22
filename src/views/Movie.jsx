import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    API_KEY,
    API_URL
} from '../config';
import {
    getCredits
} from '../API/get';

const Movie = ({popMovie}) => {
    const {id} = useParams();
    const movies = popMovie;
    const [credits, setCredits] = useState([]);
    const thisMovie = movies.find(movie => parseInt(id) === movie.id);

    useEffect(() => {
        getCredits(id).then((arr) => setCredits(arr));
    }, []);
    console.log(credits);

    return (
        <div>
            <div key={thisMovie.id} className="container-movie">
                <img className="container-movie-image" src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${thisMovie.backdrop_path}`} alt={thisMovie.title}/>
                <strong><span>{thisMovie.title}</span></strong>
                <span>Overview</span>
                <p>{thisMovie.overview}</p>
                <span>Release date: {thisMovie.release_date}</span>
                <span>Rated: {thisMovie.vote_average}</span>
                <div className="container-actors">
                    {credits.cast !== undefined && credits.cast.map((ele) => (
                        <div className="info-actor">
                            <img className="container-movie-image" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${ele.profile_path}`} alt={ele.name}/>
                            <span>{ele.name}</span>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Movie;
