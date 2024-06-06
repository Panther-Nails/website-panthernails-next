import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const HeadingContainer = tw.div``;

const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;

export default ({ index, children, properties }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {properties.subHeading && (
            <Subheading>{properties.subHeading}</Subheading>
          )}
          {properties.heading && (
            <HighlightedHeading>{properties.heading}</HighlightedHeading>
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
