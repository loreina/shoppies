import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import searchImg from "../../assets/search.svg";

const Box = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 16px;
  font-size: 16px;
  color: ${theme.colors.ink.light};
  background-color: ${theme.colors.white};
  border: 0.15rem solid ${theme.colors.white};
  outline: none;
  margin-top: -0.3rem;
  padding: 0.45rem 0.85rem 0.45rem 2.85rem;
  height: 1.4rem;
  width: 100%;
  background-image: url(${searchImg});
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: 1rem;

  &:focus {
    border: 0.15rem solid ${theme.colors.indigo.base};
  }

  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.indigo.base};
  }

  @media (max-width: 576px) {
    &:focus {
      transition: margin-left 0.3s;
      margin-left: -10rem;
      width: 200%;
    }
  }
`;

export default function SearchBar({ setSearch, ...props }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <Box>
      <Input
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Search"
        type="text"
        {...props}
      ></Input>
    </Box>
  );
}
