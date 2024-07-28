import React, { useState, useEffect } from "react";
import MoviesFetch from "../global_components/Movies_Fetch";
import GenreFetch from "../global_components/Genres_Fetch";
import Filter from "../global_components/Filter";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState({ genre: '', price: '' });
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`https://laserfocus-disc-and-co-backend-server.onrender.com/movies-by-genre/${filter.genre}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [filter.genre]);

  return (
    <div className="bg-blue-950">
      <MoviesFetch setMovies={setMovies} />
      <GenreFetch setGenres={setGenres} />
      <h1 className="phonemin:text-center py-10 text-4xl tabletmin:text-6xl text-white">Movies</h1>
      <Filter filter={filter} setFilter={setFilter} genres={genres} />
      <div className="phonemin:grid grid-flow-row-dense grid-cols-1 mx-0 relative tabletmin:grid-cols-3 grid-rows-3 items-start">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="phonemin:text-center m-5 bg-white rounded-3xl space-y-10">
            <img src={movie.movie_poster} alt={movie.name} className="phonemin:size-auto rounded-3xl"/>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl">Name: {movie.name}</h3>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl">Price: {movie.price}</h3>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl">Bid Amount: {movie.bid}</h3>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl tabletmax:px-10 desktop:px-28">Movie Synopsis: {movie.movie_synopsis}</h3>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl">Release Date: {movie.release_date}</h3>
            <h3 className="text-black phonemin:text-xl tabletmin:text-3xl">Genre: {movie.genre_id}</h3>
            <h3 className="text-green-500 phonemin:text-xl tabletmin:text-3xl">Availability: {movie.availability}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
