import React from "react";
import styled from "styled-components";

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
`;

export default function Nav({ search, setSearch, ...props }) {
  return (
    <Box>
      <Logo />
      <NavItem>My Nominations</NavItem>
      <SearchBar value={search} setSearch={setSearch} />
    </Box>
  );
}
