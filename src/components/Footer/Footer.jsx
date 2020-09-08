import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

const Box = styled.div`
  background-color: ${theme.colors.ink.base};
  position: relative;
  bottom: 0;
  width: 100%;
  height: 12rem;
  padding: 2rem 0 0.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${theme.colors.white};
`;

const Link = styled.a`
  color: ${theme.colors.gold.base};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.indigo.base};
  }
`;

export default function Footer() {
  return (
    <Box>
      <Text>
        Made with{" "}
        <span role="img" alt="love" aria-label="love">
          💛
        </span>{" "}
        and{" "}
        <span role="img" alt="coffee" aria-label="coffee">
          ☕
        </span>{" "}
        by{" "}
        <Link href="https://lor.fm" target="_blank">
          Loreina Chew
        </Link>
        .
      </Text>
      <Text>
        View the{" "}
        <Link href="https://github.com/loreina/shoppies" target="_blank">
          project code
        </Link>{" "}
        on Github.
      </Text>
    </Box>
  );
}
