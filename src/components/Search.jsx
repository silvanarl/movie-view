import React, { useState } from 'react';
import PropTypes from "prop-types";
import loupe from '../assets/loupe.svg';
import { searchMovies} from '../API/get';

const Search = ({ setPopMovie}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            searchMovies(searchTerm).then((data) => setPopMovie(data.results));  
            setSearchTerm('');
        }
    };


    Search.propTypes = {    
        setPopMovie: PropTypes.func.isRequired,
    }
    return (
        <div className="bg-input-search">
            <form className="container-input-search" action="" onSubmit={handleOnSubmit}>
                <img className="icon-search" src={loupe} alt=""/>
                <input 
                    type="text" 
                    onChange={handleOnChange}
                    className="input-search"
                    value={searchTerm}
                    placeholder="Search..."
                />

            </form>
        </div>
    )
};

export default Search;
