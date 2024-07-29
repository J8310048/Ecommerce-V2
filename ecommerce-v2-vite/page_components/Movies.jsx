import React, { useState, useEffect } from "react";
import MoviesFetch from "../global_components/Movies_Fetch";
import GenreFetch from "../global_components/Genres_Fetch";
import Filter from "../global_components/Filter";
import axios from "axios";


function Movies() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ genre: '', price: '' });
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    let url = `https://laserfocus-disc-and-co-backend-server.onrender.com/`;
    // http://localhost:3001/
    if(filter.genre) {
      url += `/movies-by-genre/${filter.genre}?priceMax=${filter.price}` //pass priceMax into your query. Research for tomorrow. hint: console.log request on /movies-by-genre on server
    }
    
    axios
      .get(url)
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
      <h1 className="phonemin:text-center py-10 text-4xl tabletmin:text-6xl text-white font-Sports">Movies</h1>
      <Filter filter={filter} setFilter={setFilter} genres={genres} />
      <div className="phonemin:grid gap-x-5 grid-flow-row-dense grid-cols-1 mx-0 relative tabletmin:grid-cols-3 grid-rows-3 items-start">
        {movies.map((movie, index) => (
          <div key={index} className="phonemin:text-center m-10 bg-slate-400 rounded-3xl space-y-10 overflow-scroll object-contain h-4/5">
            <img src={movie.movie_poster} alt={movie.name} className="phonemin:size-auto rounded-3xl"/>
            <div>
                <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Name:</h2>
                <h3 className=" phonemin:text-xl tabletmin:text-lg font-thin">{movie.name}</h3>
            </div>
            
            <div>
                <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Price:</h2> 
                <h3 className=" phonemin:text-xl tabletmin:text-lg font-thin">{movie.price}</h3>
            </div>
            
            <div>
            <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Bid Amount:</h2> 
            <h3 className=" phonemin:text-xl tabletmin:text-lg font-thin">{movie.bid}</h3>
            </div>
            
          <div>
            <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Movie Synopsis:</h2> 
            <h3 className=" phonemin:text-xl tabletmin:text-lg font-light">{movie.movie_synopsis}</h3>
          </div>
            
          <div>
            <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Release Date:</h2>
            <h3 className=" phonemin:text-xl tabletmin:text-lg font-thin">{movie.release_date}</h3>
          </div>
            
          <div>
            <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Genre:</h2>
            <h3 className=" phonemin:text-xl tabletmin:text-lg font-thin">{movie.genre_id}</h3>
          </div>
            
          <div>
            <h2 className="phonemin:text-2xl font-bold tabletmin:text-xl font-Sports">Availability:</h2>
            <h3 className=" phonemin:text-xl tabletmin:text-lg text-white font-thin">{movie.availability}</h3>
          </div>
            
          </div>
          ))}
   </div>
    </div>
  );
}

export default Movies;
