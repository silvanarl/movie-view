import React,  { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Carousel from '../components/Carousel';

const Home = ({popMovie}) => {
    // const [popMovie, setPopMovie] = useState([]);
    
    // useEffect(() => {
    //     getPopularMovies().then((obj) => {
    //         console.log(obj.results);
    //         if(obj.results) setPopMovie(obj.results)
    //     });
    // }, []);
    // console.log(popMovie)
    return (
        <>
            {popMovie.length > 0 && <Carousel popMovie={popMovie} />}
            {popMovie.length > 0 && <Movies popMovie={popMovie} />}

        </>
    )
}

export default Home;
