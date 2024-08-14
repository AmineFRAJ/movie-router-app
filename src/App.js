import { useState } from "react";
import "./App.css";
import MovieList from "./components/movieList/MovieList";
import { moviesData } from "./movieData";
import AddMovie from "./components/addMovie/AddMovie";
import FilterByTitle from "./components/FilterByTitle";
import FilterByRating from "./components/filterByRating/Rating";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [serchInput, setSearchInput] = useState("");
  const [rateInput, setRateInput] = useState(1);
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <FilterByTitle searchInput={serchInput} setSearchInput={setSearchInput} />
      <FilterByRating
        rateInput={rateInput}
        setRateInput={setRateInput}
        isRating={false}
      />
      <AddMovie add={add} />
      <MovieList
        movies={movies}
        searchInput={serchInput}
        rateInput={rateInput}
      />
    </div>
  );
}

export default App;
