import React from 'react';
import PropTypes from 'prop-types';
import loupe from '../assets/loupe.svg';

const Search = ({ initialPopMovie, setPopMovie }) => {
    const searchMovie = (array, string) => {
        let result = [];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.title.toLowerCase().startsWith(string)){
                result.push(element)
            } 
        }
        return result;
    };
    const inputSearch = (event) => {
        setPopMovie(searchMovie(initialPopMovie, event.target.value));
    };
    Search.propTypes = {
        initialPopMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
        setPopMovie: PropTypes.func.isRequired,
    }
    return (
        <div className="bg-input-search">
            <div className="container-input-search">
                <img className="icon-search" src={loupe} alt=""/>
                <input 
                    type="text" 
                    onChange={inputSearch}
                    className="input-search"
                />
            </div>
        </div>
    )
};

export default Search;
