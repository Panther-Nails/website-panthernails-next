import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";
import { Container } from "../misc/Layouts.js";
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
const Image = styled.img((props) => [
  tw` mx-auto `,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Description = tw.p`mx-auto mt-4 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({ data, children, properties }) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const handleClick = () => {
    if (properties.url) window.open(properties.url);
  };
  return (
    <Container>
      <Column>
        <HighlightedHeading>{properties.heading}</HighlightedHeading>
        <Description>{properties.description}</Description>
        <Container tw="h-full w-full p-80 pt-0">
          <Image
            onClick={handleClick}
            src={
              isMobile ? properties.mobileImageSrc : properties.desktopImageSrc
            }
            css={isMobile === true ? tw`bg-clip-content` : tw``}
          ></Image>
        </Container>
      </Column>
    </Container>
  );
};
