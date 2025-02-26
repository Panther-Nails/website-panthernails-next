import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  HighlightedHeading,
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container as ContainerBase } from "components/misc/Layouts";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 `;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(
  SectionHeading
)`w-full text-white mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight `;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {properties.subheading && (
          <Subheading>{properties.subheading}</Subheading>
        )}
        <HighlightedHeading primaryColor={tw`text-white`} >{properties.heading}</HighlightedHeading>
        {properties.description && (
          <Description>{properties.description}</Description>
        )}
        <VerticalSpacer />
        {ProcessChildComponentsSeparately(children)}
      </ThreeColumnContainer>
    </Container>
  );
};
