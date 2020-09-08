import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../styles/theme";

import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  margin: 2rem;
`;

const NavItem = styled.p`
  color: ${theme.colors.ink.light};
  padding: 0.2rem 3rem;
  margin: 0;

  @media (max-width: 576px) {
    padding: 0.2rem 2rem;
  }
`;

export default function Nav({ search, setSearch, ...props }) {
  return (
    <Box>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/nominations" style={{ textDecoration: "none" }}>
        <NavItem>Nominations</NavItem>
      </Link>
      <Link to="/search" style={{ textDecoration: "none", width: "600px" }}>
        <SearchBar value={search} setSearch={setSearch} />
      </Link>
    </Box>
  );
}
