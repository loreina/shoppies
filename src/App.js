import React, { useEffect, useState } from "react";
import "./App.css";

import Movie from "./components/Movie/Movie";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";

const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

const nominationList = localStorage.getItem("nominations")
  ? JSON.parse(localStorage.getItem("nominations"))
  : [];

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const [nominations, updateNominations] = useState(nominationList);

  const nominateMovie = (movie) => {
    updateNominations([...nominations, movie]);
  };

  const removeMovie = (movie) => {
    updateNominations(nominations.filter((nominees) => movie !== nominees));
  };

  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  async function searchMovies(search) {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${OMDB_KEY}&type=movie&s=${search}`
    );
    const data = await res.json();
    setMovies(data);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      searchMovies(search);
    }, 10);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <Nav>
        <Search value={search} setSearch={setSearch} />
      </Nav>
      <h1>Results for "{search}"</h1>
      {!!search ? (
        <>
          <Movie
            movies={movies}
            nominateMovie={nominateMovie}
            search={search}
          />
        </>
      ) : (
        ""
      )}

      <h1>Nominations</h1>
      {nominations.map((n) => (
        <>
          <p>
            {n.Title} ({n.Year})
          </p>
          <button onClick={(e) => removeMovie(n)}>Remove</button>
        </>
      ))}
    </div>
  );
}

export default App;
