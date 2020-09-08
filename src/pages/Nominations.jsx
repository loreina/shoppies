import React from "react";

import Heading from "../components/Heading/Heading";
import NominationList from "../components/NominationList/NominationList";

export default function Nominations({ movies, removeMovie }) {
  return (
    <>
      <Heading style={{ textAlign: "center", marginBottom: "1rem" }}>
        Nominations
      </Heading>
      <NominationList movies={movies} removeMovie={removeMovie} />
    </>
  );
}
