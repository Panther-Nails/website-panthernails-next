import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const HeadingContainer = tw.div``;

const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;

const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

const HighlightedHeading = ({ children }) => {
  return (
    <>
      {children.split("`").map((chunk, index) => {
        console.log(chunk);
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
    </>
  );
};

export default ({ index, children, properties }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {properties.subHeading && (
            <Subheading>{properties.subHeading}</Subheading>
          )}
          {properties.heading && (
            <Heading>
              <HighlightedHeading>{properties.heading}</HighlightedHeading>
            </Heading>
          )}
          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeadingContainer>

        <Cards>{ProcessChildComponentsSeparately(children)}</Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
