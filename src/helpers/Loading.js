import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";

const Load = styled.div`
  ${tw`bg-black text-white flex items-center justify-center h-screen`}

  ${(props) =>
    css`
      .loading-line {
        width: 100%;
        height: 4px;
        background-color: #7983ff; /* Adjust color as needed */
        position: relative;
      }

      .loading-line::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background-color: #7983ff; /* Adjust color as needed */
        animation: loading 1.5s infinite linear;
      }

      @keyframes loading {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    `}
`;

export default () => {
  return <Load className="loading-line">Loading....</Load>;
};
