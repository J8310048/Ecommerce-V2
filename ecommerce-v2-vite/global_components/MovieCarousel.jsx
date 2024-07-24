import React, { useEffect, useState } from 'react';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import './MovieCarousel.css'; 

const movies = [
  {
    poster: '/CarouselPosters/mission_impossible_1996_teaser_original_film_art_5000x.png',
    video: '/CarouselClips/Mission Impossible Clip.mp4',
    title: 'Mission Impossible'
  },
  {
    poster: '/CarouselPosters/Toy-Story-Move-Poster-Slider.png',
    video: '/CarouselClips/Toy Story Clip.mp4',
    title: 'Toy Story'
  },
  {
    poster: '/CarouselPosters/lion-king-movie-poster-slider.png',
    video: '/CarouselClips/Lion King Clip.mp4',
    title: 'Lion King'
  },
  {
    poster: '/CarouselPosters/ET-movie-poster-slider.png',
    video: '/CarouselClips/ET Clip.mp4',
    title: 'E.T. The Extra Terrestrial'
  },
  {
    poster: '/CarouselPosters/The-Godfather-Original-Movie-Poster-poster-Frameless-Gift-12-x-18-inch-30cm-x-46cm_c6df3fd5-1e9c-49ca-8cb6-1af6078df4c2.b21fd8bc877c5645b9340a53580833a2.webp',
    video: '/CarouselClips/Godfather Clip.mp4', 
    title: 'The GodFather'
  },
  
];

function MovieCarousel() {
  const [currentVideo, setCurrentVideo] = useState(movies[0].video);

  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      draggable: false,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  }, []);

  const handleMovieClick = (videoPath) => {
    setCurrentVideo(videoPath);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="glider-contain">
        <div className="glider flex">
          {movies.map((movie, index) => (
            <div key={index} className="p-2">
              <img
                className="w-1/4 h-auto cursor-pointer mt-64"
                src={movie.poster}
                alt={movie.title}
                onClick={() => handleMovieClick(movie.video)}
              />
              
            </div>
          ))}
        </div>
        <button className="glider-prev absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2">«</button>
        <button className="glider-next absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2">»</button>
        <div className="dots text-center mt-2"></div>
      </div>
      <div className="movie-background absolute inset-0 z-[-1]">
        <video className="w-full h-full object-cover" autoPlay muted loop key={currentVideo}>
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}


export default MovieCarousel;

