import React,  { useState, useEffect } from 'react';
import Movie from './Movie';
import { 
    getPopularMovies,
} from '../API/get';

const Home = () => {
    const [popMovie, setPopMovie] = useState([]);
    useEffect(() => {
        getPopularMovies().then((obj) => {
            console.log(obj.results);
            if(obj.results) setPopMovie(obj.results)
        });
    }, []);
    console.log(popMovie)
    return (
        <div>
            {popMovie.length > 0 && <Movie popMovie={popMovie} />}
        </div>
    )
}

export default Home;
