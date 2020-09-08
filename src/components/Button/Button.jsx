import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

const StyledButton = styled.button`
  border: 2px solid ${theme.colors.indigo.base};
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: ${theme.colors.white};
  background-color: ${theme.colors.indigo.base};
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${theme.colors.indigo.base};
  }

  &:disabled {
    cursor: default;
    opacity: 30%;
  }

  &:disabled:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.indigo.base};
  }
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
