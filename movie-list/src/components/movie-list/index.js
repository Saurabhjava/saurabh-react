import React, { useState } from "react";
import "./index.css";

function MovieList() {
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    if (!year) return;

    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`
      );
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setMovies(data.data);
        setNoResults(false);
      } else {
        setMovies([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
      setNoResults(true);
    }
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          data-testid="app-input"
        />
        <button className="" onClick={handleSearch} data-testid="submit-button">
          Search
        </button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="slide-up-fade-in py-10">
            {movie.Title}
          </li>
        ))}
      </ul>

      {noResults && (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          No Results Found
        </div>
      )}
    </div>
  );
}

export default MovieList;
