import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.white};
  background-color: ${theme.colors.indigo.base};
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.indigo.dark};
  }

  &:disabled {
    cursor: default;
    opacity: 30%;
  }
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
