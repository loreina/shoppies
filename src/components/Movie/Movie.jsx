import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 100%;
  height: 250px;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  margin: 2rem;

  @media (min-width: 576px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    width: 45%;
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Right = styled.div`
  margin: 0;
  padding: 0 24px;
`;

const Poster = styled.img`
  max-width: 40%;
  height: 100%;
  border-radius: 16px 0px 0px 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
  text-align: left;
  margin: 0;
`;

export default function Movie({ nominateMovie, movies, search, ...props }) {
  return (
    <>
      <Wrapper>
        {movies.Search?.map((m) => (
          <Box key={m.imdbID}>
            <Poster src={m.Poster} />
            <Right>
              <Title>
                {m.Title} ({m.Year})
              </Title>
              <button onClick={(e) => nominateMovie(m)}>Nominate</button>
            </Right>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}
