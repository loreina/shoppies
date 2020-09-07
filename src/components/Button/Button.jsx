import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: #ddc380;
  padding: 10px 16px;
  cursor: pointer;

  &:disabled {
    cursor: none;
    background-color: #8b7f61;
  }
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
