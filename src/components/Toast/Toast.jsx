import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";
import Text from "../Text/Text";

const StyledToast = styled.div`
  margin: -5% 40%;
  position: absolute;
  display: inline-block;
  background-color: ${theme.colors.indigo.base};
  border-radius: 4px;
  filter: drop-shadow(0px 12px 20px rgba(92, 106, 196, 0.5));
  animation: fadein ease 0.5s, fadeout ease 2s 3s;

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.ink.base};
  }
`;

export default function Toast() {
  return (
    <StyledToast onClick={(e) => (e.target.style.visibility = "hidden")}>
      <Text
        style={{
          color: "white",
          padding: "0.1rem 1.5rem",
          textAlign: "center",
        }}
      >
        You've nominated 5 movies!{" "}
        <span role="img" alt="tada" aria-label="tada">
          🎉
        </span>
        <StyledLink to="/nominations">View your list</StyledLink>
      </Text>
    </StyledToast>
  );
}
