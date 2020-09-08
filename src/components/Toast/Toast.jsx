import React from "react";
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
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

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

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
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
      </Text>
    </StyledToast>
  );
}
