import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl as ContentWithPadding } from "components/misc/Layouts.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const HeadingContainer = tw.div`w-[90%] m-auto`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;
const ContentWithPaddingXl = tw(ContentWithPadding)`py-6`;
const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto gap-0`;

export default ({ properties, children, index, data }) => {
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
