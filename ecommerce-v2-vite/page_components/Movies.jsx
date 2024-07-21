import React, { useState, useEffect } from "react";
import MoviesFetch from "../global_components/Movies_Fetch";
import NavBar from "../global_components/NavBar";
import Filter from "../global_components/Filter";  // Import the Filter component
import Footer from "../global_components/Footer";

function Movies() {  
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState({ genre: '', price: '' });
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setFilteredMovies(movies.filter(movie => {
      return (
        (!filter.genre || movie.genre_id === filter.genre) &&
        (!filter.price || movie.price <= filter.price)
      );
    }));
  }, [filter, movies]);

  return (
    <div>
      <MoviesFetch setMovies={setMovies} setGenres={setGenres} />
      <NavBar />
      <h1 className="text-center">Movies</h1>
      <Filter filter={filter} setFilter={setFilter} genres={genres} />  {/* Pass genres to Filter */}
      <div className="phonemin:grid grid-flow-row-dense grid-cols-2 grid-rows-3 mx-0 relative tabletmin:grid-cols-3">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="phonemin:text-center m-5">
            <img src={movie.movie_poster} alt={movie.name} className="phonemin:size-auto "/>
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
      <Footer />
    </div>
  );
}

export default Movies;
