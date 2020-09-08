import React from "react";

import CTA from "../components/CTA/CTA";
import Heading from "../components/Heading/Heading";
import Results from "../components/Results/Results";
import Text from "../components/Text/Text";
import Toast from "../components/Toast/Toast";

export default function Search({
  isNominated,
  movies,
  nominateMovie,
  nominations,
  search,
  toast,
}) {
  return (
    <>
      {toast === true && <Toast />}
      {!!search ? (
        <>
          <Heading style={{ marginLeft: "2rem" }}>
            Results for "{search}"
          </Heading>
          <Results
            isNominated={isNominated}
            movies={movies}
            nominateMovie={nominateMovie}
            nominations={nominations}
            search={search}
          />
        </>
      ) : (
        <div style={{ margin: "20% 35%", textAlign: "center" }}>
          <CTA>
            What's your favourite movie?{" "}
            <span role="img" alt="movie camera" aria-label="movie camera">
              🎥
            </span>
          </CTA>
          <Text>
            You can nominate up to 5 of your all-time favourites for the
            Shoppies.
          </Text>
        </div>
      )}
    </>
  );
}
