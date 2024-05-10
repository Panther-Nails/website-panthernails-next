import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";

export default ({}) => {
  return (
    <>
      <div tw="h-screen bg-gray-200 flex items-center justify-center">
        <div>
          <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"></img>
          <p>This page isn't available. Sorry about that.</p>
          <p>Try searching for something else.</p>
          <div tw="flex">
            <a href="https://websitebeta.panthernails.com/">
              <img
                src="https://websitebeta.panthernails.com/static/media/pnlogo.e268a01c4fe8ae5c1f7dc060a443fa66.svg"
                alt=""
              />
            </a>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};
