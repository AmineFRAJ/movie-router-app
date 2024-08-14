import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./movielist.css";

const MovieList = ({ movies, searchInput,rateInput}) => {
  return (
    <div className="movielist">
      {movies
        .filter((movie) =>
          movie.title.toUpperCase().includes(searchInput.toUpperCase())
        && movie.rate >=rateInput)
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
