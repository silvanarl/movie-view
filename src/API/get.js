import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  // ALL_BASE_URL,
  API_KEY,
  API_URL
} from "../config";

export const getPopularMovies = async () => {
    const response = await fetch(POPULAR_BASE_URL)
    return await response.json()
};

export const getCredits = async (id) => {
  const creditsEndpoint = `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
    const response = await fetch(creditsEndpoint)
    return await response.json()
};
