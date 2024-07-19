import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../global_components/NavBar";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from backend API
    axios
      .get(`http://localhost:3001/movies`)
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
  }, []);

  return (
    <div className="text-center mx-auto">
      <NavBar />

      <h1>Movies</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.movie_poster} alt={movie.name} />
          <h3>Name: {movie.name}</h3>
          <h3>Price: {movie.price}</h3>
          <h3>Bid Amount: {movie.bid}</h3>
          <h3>Movie Synopsis: {movie.movie_synopsis}</h3>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Genre: {movie.genre_id}</h3>
          <h3>Availability: {movie.availability}</h3>
        </div>
      ))}
    </div>
  );
}

export default Movies;
