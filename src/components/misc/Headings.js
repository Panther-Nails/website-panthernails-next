import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import { useEffect, useState } from "react";

export const SectionHeading = tw.h1`text-4xl sm:text-5xl text-primary-900 tracking-wide text-center `;
export const Subheading = tw.h5`font-bold text-primary-500`;

const DynamicHeading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export const HeadingText = tw.span`text-primary-900`;
export const HighlightedText = tw.span`text-primary-500`;
//var HeadingText = styled.span((props) => [`${colors[props.color]}`]);

export function HighlightedHeading(props) {
  return (
    <DynamicHeading>
      {props.children.split("`").map((chunk, index) => {
        if (index % 2 === 0)
          return <HeadingText css={props.primaryColor}>{chunk}</HeadingText>;
        else
          return (
            <HighlightedText css={props.highlightColor}>
              {chunk}
            </HighlightedText>
          );
      })}
    </DynamicHeading>
  );
}
