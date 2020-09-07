import React from "react";
import styled from "styled-components";

import searchImg from "../../assets/search.svg";

const Box = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 60%;
`;

const Icon = styled.img`
  height: 1rem;
  margin-top: -0.3rem;
  margin-left: 2px;
  padding: 12px;
  border-radius: 16px;
  position: absolute;
`;

const SearchBar = styled.input`
  border-radius: 16px;
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  outline: none;
  margin-top: -0.3rem;
  padding: 0.6rem 1rem 0.6rem 3rem;
  height: 1.4rem;
  width: 100%;

  &:focus {
    border: 0.15rem solid #ddc380;
    padding: 0.45rem 0.85rem 0.45rem 2.85rem;
  }
`;

export default function Search({ setSearch, ...props }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box>
      <Icon src={searchImg} />
      <SearchBar
        onChange={handleChange}
        placeholder="Search"
        type="text"
        {...props}
      ></SearchBar>
    </Box>
  );
}
