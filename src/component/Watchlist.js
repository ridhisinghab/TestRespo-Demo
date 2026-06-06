import React from "react";
import "../styles.css";
import MovieCart from "./MovieCart";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCart
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MovieCart>
          );
        })}
      </div>
    </div>
  );
}
