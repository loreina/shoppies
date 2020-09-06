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
  margin-top: -0.2rem;
  padding: 12px;
  border-radius: 16px;
  background-color: black;
  position: absolute;
`;

const SearchBar = styled.input`
  background-image: searchImg;
  border-radius: 16px;
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  outline: none;
  margin-top: -0.2rem;
  padding: 0.6rem 1rem 0.6rem 3rem;
  height: 1.4rem;
  width: 100%;
`;

export default function Search(props) {
  return (
    <Box>
      <Icon src={searchImg} />
      <SearchBar type="text" {...props}></SearchBar>
    </Box>
  );
}
