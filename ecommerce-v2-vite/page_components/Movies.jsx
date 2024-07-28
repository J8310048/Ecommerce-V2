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

  useEffect(() => {
    setFilteredMovies(movies.filter(movie => {
      return (
        (!filter.genre || movie.genre_id === filter.genre) &&
        (!filter.price || movie.price <= filter.price)
      );
    }));
  }, [filter, movies]);

  return (
    <div className="bg-blue-950">
      <MoviesFetch setMovies={setMovies} />
      <GenreFetch setGenres={setGenres} />
      <h1 className="phonemin:text-center py-10 text-4xl tabletmin:text-6xl text-white">Movies</h1>
      <Filter filter={filter} setFilter={setFilter} genres={genres} />
      <div className="phonemin:grid gap-x-5 grid-flow-row-dense grid-cols-1 mx-0 relative tabletmin:grid-cols-3 grid-rows-3 items-start">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="phonemin:text-center m-10 bg-white rounded-3xl space-y-10 overflow-scroll object-contain h-4/5">
            <img src={movie.movie_poster} alt={movie.name} className="phonemin:size-auto rounded-3xl"/>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Name:</span> {movie.name}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Price:</span> {movie.price}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Bid Amount:</span> {movie.bid}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg tabletmax: desktop:"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Movie Synopsis:</span> {movie.movie_synopsis}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Release Date:</span> {movie.release_date}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Genre:</span> {movie.genre_id}</h3>
            <h3 className=" phonemin:text-xl tabletmin:text-lg"><span className="phonemin:text-2xl font-bold tabletmin:text-xl">Availability:</span> <span className="text-green-500">{movie.availability}</span></h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
