import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nominations from "./pages/Nominations";
import Search from "./pages/Search";

import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

const nominationList = localStorage.getItem("nominations")
  ? JSON.parse(localStorage.getItem("nominations"))
  : [];

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, updateNominations] = useState(nominationList);
  const [toast, setToast] = useState(false);

  const nominateMovie = (movie) => {
    updateNominations([...nominations, movie]);
    if (nominations.length + 1 === 5) {
      setToast(true);
    }
    console.log(toast);
    console.log(nominations.length);
  };

  useEffect(() => {
    if (toast === true) {
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  }, [toast]);

  const removeMovie = (movie) => {
    updateNominations(nominations.filter((nominees) => movie !== nominees));
  };

  const isNominated = (movie) => {
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i].imdbID === movie.imdbID) {
        return true;
      }
    }
    return false;
  };

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
            toast={toast}
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
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
