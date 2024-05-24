import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container } from "../misc/Layouts.js";

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
const Image = styled.img((props) => [
  tw`h-full mx-auto lg:w-5/6 lg:mx-24`,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center leading-tight  `;

const Description = tw.p`mx-auto mt-4 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({ data, children, properties }) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <Container>
      <Column>
        <Heading>
          {properties.heading}{" "}
          <span tw="text-primary-500">{properties.highlighHeading}</span>
        </Heading>
        <Description>{properties.description}</Description>
        <Image
          src={
            isMobile ? properties.mobileImageSrc : properties.desktopImageSrc
          }
          css={isMobile === true ? tw`bg-clip-content` : tw``}
        ></Image>
      </Column>
    </Container>
  );
};
