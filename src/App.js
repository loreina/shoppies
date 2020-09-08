import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nominations from "./pages/Nominations";
import Search from "./pages/Search";

import Nav from "./components/Nav/Nav";

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
      `https://www.omdbapi.com/?apikey=${OMDB_KEY}&type=movie&s=${search}`
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
    <Router>
      <Nav search={search} setSearch={setSearch} />

      <Switch>
        <Route path="/search">
          <Search
            isNominated={isNominated}
            movies={movies}
            nominateMovie={nominateMovie}
            nominations={nominations}
            search={search}
          />
        </Route>
        <Route path="/nominations">
          <Nominations movies={nominations} removeMovie={removeMovie} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
