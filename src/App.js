import React, { useEffect, useState } from "react";
import "./App.css";

const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const updateSearch = () => {
    searchMovies(search);
  };

  async function searchMovies(search) {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${OMDB_KEY}&type=movie&s=${search}`
    );
    const data = await res.json();
    setMovies(data);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={search}
        onChange={handleChange}
        onKeyDown={updateSearch}
      />
      <h1>{!!search ? `Results for "${search}"` : ""}</h1>
      {movies.Search?.map((m) => (
        <p>{!!search ? `${m.Title} (${m.Year})` : ""}</p>
      ))}
    </div>
  );
}

export default App;
