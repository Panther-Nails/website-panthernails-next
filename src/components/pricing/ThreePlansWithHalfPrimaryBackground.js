import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl as ContentBase,
} from "components/misc/Layouts.js";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 `;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center w-[90%] m-auto`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;

const WhiteBackgroundOverlay = tw.div`absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0`;

export default ({ children, properties, index, data }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <HighlightedHeading primaryColor={tw`text-white`}>
            {properties.heading}
          </HighlightedHeading>
          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeaderContainer>
        <PlansContainer>
          {ProcessChildComponentsSeparately(children)}
        </PlansContainer>
      </ContentWithPaddingXl>
      <WhiteBackgroundOverlay />
    </Container>
  );
};
