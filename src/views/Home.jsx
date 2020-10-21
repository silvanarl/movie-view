import React,  { useState, useEffect } from 'react';
import { 
    getPopularMovies,
} from '../API/get';

const Home = () => {
    const [popMovie, setPopMovie] = useState({});
    useEffect(() => {
        (async()=>{
            const arr = await getPopularMovies(setPopMovie);
            console.log(arr.results);
         })();
    }, []);
    return (
        <div>
            {console.log(popMovie)}
            Home
        </div>
    )
}

export default Home;
