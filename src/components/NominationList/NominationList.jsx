import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 5%;

  @media (min-width: 576px) {
    width: 80%;
    margin: 0 10%;
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 10%;
  }

  @media (min-width: 992px) {
    width: 80%;
    margin: 0 10%;
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin: 0 20%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 125px;
  margin: 1rem 0;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  overflow-x: hidden;
  filter: drop-shadow(0px 8px 20px rgba(69, 79, 91, 0.1));
`;

const Right = styled.div`
  margin: 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Poster = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 16px 0px 0px 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.ink.light};
  padding: 24px 0 12px 0;
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
  right: 3rem;
  bottom: 2.7rem;
`;

export default function NominationList({ movies, removeMovie, ...props }) {
  return (
    <Wrapper>
      {movies.map((m) => (
        <>
          <Box>
            <Poster
              src={m.Poster}
              onError={(e) => (e.target.style.display = "none")}
            />
            <Right>
              <Title>{m.Title}</Title>
              <Year>{m.Year}</Year>
              <ButtonBox>
                <Button onClick={(e) => removeMovie(m)}>REMOVE</Button>
              </ButtonBox>
            </Right>
          </Box>
        </>
      ))}
    </Wrapper>
  );
}
