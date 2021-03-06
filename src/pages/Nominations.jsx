import React from "react";

import Heading from "../components/Heading/Heading";
import NominationList from "../components/NominationList/NominationList";
import Text from "../components/Text/Text";

export default function Nominations({ movies, removeMovie }) {
  return (
    <div style={{ paddingBottom: "7rem" }}>
      <Heading
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        Nominations
      </Heading>
      {movies.length > 0 ? (
        <NominationList movies={movies} removeMovie={removeMovie} />
      ) : (
        <div
          style={{
            margin: "20% 35%",
            overflowX: "hidden",
            textAlign: "center",
          }}
        >
          <Text>
            You haven't nominated any movies yet!{" "}
            <span role="img" alt="cry" aria-label="cry">
              😢
            </span>
            <br></br>
            Use the search bar above to start finding a movie.
          </Text>
        </div>
      )}
    </div>
  );
}
