import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.svg";

const LogoImg = styled.img`
  height: 2rem;
`;

export default function Logo() {
  return <LogoImg src={logo} />;
}
