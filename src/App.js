import "./App.css";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footter";
import MoviesGrid from "./component/MoviesGrid";
import Watchlist from "./component/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((Id) => Id !== movieId)
        : [...prev, movieId]
    );
  };
  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/watchlist"}>Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                ></MoviesGrid>
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                ></Watchlist>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
