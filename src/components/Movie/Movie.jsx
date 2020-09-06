import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 420px;
  height: 250px;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  margin: 2rem;
`;

const Right = styled.div`
  margin: 0;
  padding-left: 24px;
`;

const Poster = styled.img`
  height: 100%;
  border-radius: 16px 0px 0px 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
  text-align: left;
  margin: 0;
`;

export default function Movie(props) {
  return (
    <Box>
      <Poster src={props.poster} />
      <Right>
        <Title>{props.title}</Title>
        {props.children}
      </Right>
    </Box>
  );
}
