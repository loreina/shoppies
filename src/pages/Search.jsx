import React from "react";

import Heading from "../components/Heading/Heading";
import Results from "../components/Results/Results";
import Text from "../components/Text/Text";

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
        <Text style={{ margin: "20% 35%" }}>
          Search for up to 5 movies to nominate for the Shoppies.
        </Text>
      )}
    </>
  );
}
