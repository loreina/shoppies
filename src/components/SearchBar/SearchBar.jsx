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

const Icon = styled.img`
  height: 1rem;
  margin-top: -0.3rem;
  margin-left: 2px;
  padding: 12px;
  border-radius: 16px;
  position: absolute;
`;

const Input = styled.input`
  border-radius: 16px;
  font-size: 16px;
  color: ${theme.colors.ink.light};
  background-color: ${theme.colors.white};
  border: none;
  outline: none;
  margin-top: -0.3rem;
  padding: 0.6rem 1rem 0.6rem 3rem;
  height: 1.4rem;
  width: 100%;

  &:focus {
    border: 0.15rem solid ${theme.colors.indigo.base};
    padding: 0.45rem 0.85rem 0.45rem 2.85rem;
  }

  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.indigo.base};
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
      <Icon src={searchImg} />
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
