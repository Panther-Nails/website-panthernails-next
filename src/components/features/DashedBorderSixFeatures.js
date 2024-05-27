import React, { Children, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import { ProcessChildComponentsSeparately } from "DynamicPage";

const Container = tw.div`relative overflow-hidden`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const highlightedText = tw.span`text-primary-500`;

const HighlightedHeading = ({ children }) => {
  return (
    <>
      {children.split("`").map((chunk, index) => {
        if (index % 2 == 0) return <span tw="text-primary-900">{chunk}</span>;
        else return <span tw="text-primary-500">{chunk}</span>;
      })}
    </>
  );
};

export default ({ properties, children, index }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <highlightedText>
            {properties.highlighHeading && properties.highlighHeading}
          </highlightedText>
        </Heading>
        {ProcessChildComponentsSeparately(children)}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
