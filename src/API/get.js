import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";

export const getPopularMovies = async () => {
    const response = await fetch(POPULAR_BASE_URL)
    return await response.json()
};

