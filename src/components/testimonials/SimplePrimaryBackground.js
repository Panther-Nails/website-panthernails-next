import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import "slick-carousel/slick/slick.css";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;

export default ({ children, properties, index }) => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Subheading>{properties.subheading}</Subheading>
          <Heading>{properties.heading}</Heading>
          <Description>{properties.description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {ProcessChildComponentsSeparately(children)}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
