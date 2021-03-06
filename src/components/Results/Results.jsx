import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  max-width: 100%;
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
  width: 100%;
`;

const Poster = styled.img`
  max-width: 40%;
  height: 100%;
  border-radius: 16px 0px 0px 16px;
`;

const TextBox = styled.div`
  height: 75%;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  max-height: 100%;
`;

const StyledButton = styled(Button)`
  order: 1;
  flex: 0 1 auto;
  align-self: flex-end;
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
              <TextBox>
                <Title>{m.Title}</Title>
                <Year>{m.Year}</Year>
              </TextBox>
              <ButtonBox>
                <StyledButton
                  onClick={(e) => nominateMovie(m)}
                  disabled={isNominated(m) || nominations.length === 5}
                >
                  {isNominated(m) ? "Nominated" : "Nominate"}
                </StyledButton>
              </ButtonBox>
            </Right>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}
