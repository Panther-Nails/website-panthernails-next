import React from "react";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

const { SectionHeading } = require("components/misc/Headings");

const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export default ({ properties, children, index }) => {
  return (
    <Heading>
      {children.split("`").map((chunk, index) => {
        if (index % 2 === 0)
          return (
            <span key={index} tw="text-primary-900">
              {chunk}
            </span>
          );
        else
          return (
            <span key={index} tw="text-primary-500">
              {chunk}
            </span>
          );
      })}
    </Heading>
  );
};
