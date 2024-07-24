import { useEffect } from "react";
import axios from "axios";

function GenresFetch({ setMovies }) {
  useEffect(() => {
    // Fetch movies from backend API
    axios
      .get(`https://localhost:3001/genres`)
      .then((response) => {
        console.log("API response:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setMovies(response.data); // Update movies state with data from backend if it's an array
        } else {
          console.error("Expected an array but got:", typeof response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [setMovies]);

  return null; // This component doesn't need to render anything
}

export default GenresFetch;