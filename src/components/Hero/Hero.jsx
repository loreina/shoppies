import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";
import Button from "../Button/Button";

const Box = styled.div`
  margin: 12rem 8rem;
  width: 100%;

  @media (min-width: 576px) {
    margin: 8rem 6rem;
    width: 75%;
  }

  @media (min-width: 768px) {
    margin: 8rem;
    width: 80%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    margin: 15rem 12rem;
    width: 40%;
  }
`;

const TextBox = styled.div`
  width: 80%;
`;

const CTA = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.colors.ink.light};
  width: 100%;
  line-height: 120%;
`;

const Text = styled.p`
  color: ${theme.colors.ink.light};
`;

const HeroButton = styled(Button)`
  background-color: ${theme.colors.gold.base};
  color: ${theme.colors.ink.light};
  border: 2px solid ${theme.colors.gold.base};
  margin-top: 1rem;
  margin-right: 1rem;

  &:hover {
    background-color: transparent;
    color: ${theme.colors.ink.light};
  }
`;

export default function Hero(nominations) {
  return (
    <Box>
      <TextBox>
        <CTA>Your favourite movie awards for entrepreneurs.</CTA>
        <Text>
          Keep track of your 5 all-time favourite movies and nominate them for
          the 2020 Shoppies.
        </Text>
      </TextBox>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <HeroButton>Search movies</HeroButton>
      </Link>
      <Link to="/nominations" style={{ textDecoration: "none" }}>
        <Button>View my nominations</Button>
      </Link>
    </Box>
  );
}
