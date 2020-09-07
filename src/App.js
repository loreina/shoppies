import React, { useEffect, useState } from "react";
import "./App.css";

import Movies from "./components/Movies/Movies";
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

  function isNominated(movie) {
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i].imdbID === movie.imdbID) {
        return true;
      }
    }
    return false;
  }

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
      {!!search ? (
        <>
          <Movies
            heading={`Results for "${search}"`}
            movies={movies}
            nominateMovie={nominateMovie}
            nominations={nominations}
            search={search}
            isNominated={isNominated}
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
