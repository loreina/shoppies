import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  margin: 2rem;
  overflow-x: hidden;
  filter: drop-shadow(0px 8px 20px rgba(69, 79, 91, 0.1));

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
  display: flex;
  flex-direction: column;
`;

const Poster = styled.img`
  max-width: 40%;
  height: 100%;
  border-radius: 16px 0px 0px 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.ink.light};
  padding: 16px 0;
  text-align: left;
  margin: 0;
  display: inline-block;
`;

const Year = styled.p`
  padding: 0 1rem;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  width: max-content;
  color: ${theme.colors.white};
  background: ${theme.colors.gold.base};
  border-radius: 16px;
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export default function Results({
  isNominated,
  movies,
  nominateMovie,
  nominations,
  ...props
}) {
  return (
    <>
      <Wrapper>
        {movies.Search?.map((m) => (
          <Box key={m.imdbID}>
            <Poster
              src={m.Poster}
              onError={(e) => (e.target.style.display = "none")}
            />
            <Right>
              <Title>{m.Title}</Title>
              <Year>{m.Year}</Year>
              <ButtonBox>
                <Button
                  onClick={(e) => nominateMovie(m)}
                  disabled={isNominated(m) || nominations.length === 5}
                >
                  {isNominated(m) ? "Nominated" : "Nominate"}
                </Button>
              </ButtonBox>
            </Right>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}
