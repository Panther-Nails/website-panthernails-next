import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container } from "../misc/Layouts.js";
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
const Image = styled.img((props) => [
  tw` mx-auto `,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Heading = tw(
  SectionHeading
)`mt-4 font-black px-4 lg:px-0 text-left text-2xl sm:text-4xl lg:text-5xl text-center leading-tight  `;

const Description = tw.p`mx-auto mt-4 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const HighlightedHeading = ({ children }) => {
  return (
    <>
      {children.split("`").map((chunk, index) => {
        if (index % 2 === 0) return <span tw="text-primary-900">{chunk}</span>;
        else return <span tw="text-primary-500">{chunk}</span>;
      })}
    </>
  );
};

export default ({ data, children, properties }) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const handleClick = () => {
    if (properties.url) window.open(properties.url);
  };
  return (
    <Container>
      <Column>
        <Heading>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
        </Heading>
        <Description>{properties.description}</Description>
        <Image
          onClick={handleClick}
          src={
            isMobile ? properties.mobileImageSrc : properties.desktopImageSrc
          }
          css={isMobile === true ? tw`bg-clip-content` : tw``}
        ></Image>
      </Column>
    </Container>
  );
};
