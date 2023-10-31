import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; // Corrected the variable name
// Imported tmdb token from env and stored it in a variable named TMDB_TOKEN
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
  Authorization: "Bearer " + TMDB_TOKEN, // Corrected "barrer" to "Bearer"
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.error(err); // Changed console.log to console.error for better error logging
    throw err; // Re-throw the error to be handled by the caller
  }
};
