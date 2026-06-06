import React, { useState } from "react";
import "../styles.css";
import MovieCart from "./MovieCart";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, SetSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChanges = (e) => {
    SetSearchTerm(e.target.value);
  };
  const handleGenreChanges = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChanges = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const mathesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matcheRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;

      default:
        return false;
    }
  };
  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matcheRating(movie, rating) &&
      mathesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChanges}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChanges}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantsy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChanges}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCart
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCart>
        ))}
      </div>
    </div>
  );
}
