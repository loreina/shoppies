import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  margin: 2rem;
`;

const NavItem = styled.p`
  color: white;
  padding: 0.2rem 3rem;
  margin: 0;
`;

export default function Nav(props) {
  return (
    <Box>
      <Logo />
      <NavItem>My Nominations</NavItem>
      {props.children}
    </Box>
  );
}
