import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default ({ index, children, properties }) => {
 
  return (
    <Stat key={index}>
      <StatValue>{properties.heading}</StatValue>
      <StatKey>{properties.subHeading}</StatKey>
    </Stat>
  );
};
