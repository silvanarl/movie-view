const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b87150437c7b3ca0cdefe654e4a3c81d';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
// const ALL_BASE_URL = `${API_URL}movies?api_key=${API_KEY}`;
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';
const SMALL_POSTER_SIZE = 'w300';

export { 
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    SMALL_POSTER_SIZE,
    // ALL_BASE_URL,
};