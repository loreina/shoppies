import React from "react";

import Heading from "../components/Heading/Heading";
import Results from "../components/Results/Results";

export default function Search({
  isNominated,
  movies,
  nominateMovie,
  nominations,
  search,
}) {
  return (
    <>
      {!!search ? (
        <>
          <Heading>Results for "{search}"</Heading>
          <Results
            isNominated={isNominated}
            movies={movies}
            nominateMovie={nominateMovie}
            nominations={nominations}
            search={search}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
