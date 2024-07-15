import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles/styles.css";

function App() {
  return (
    <div>
      <MovieList />
    </div>
  );
}

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from backend API
    axios
      .get("http://localhost:3306/movies")
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
    <div>
      <h1>Movies</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <ul>
            <li>
              <h3>{movie.name}</h3>
              <h3>{movie.bid}</h3>
              <h3>{movie.price}</h3>
              <h3>{movie.movie_synopsis}</h3>
              <h3>{movie.release_date}</h3>
              <h3>{movie.genre_id}</h3>
              <h3>{movie.availability}</h3>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
