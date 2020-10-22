import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  // ALL_BASE_URL,
} from "../config";

export const getPopularMovies = async () => {
    const response = await fetch(POPULAR_BASE_URL)
    return await response.json()
};

// export const getAllMovies = async () => {
//   const response = await fetch(ALL_BASE_URL)
//   return await response.json()
// };
