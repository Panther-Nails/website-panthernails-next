import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";
import { Container } from "../misc/Layouts.js";
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
const Image = styled.img((props) => [
  tw` mx-auto h-auto  py-6`,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Description = tw.p`mx-auto mt-4 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const TextContainer = tw.div`w-[90%] m-auto`;
export default ({ properties, children, index, data }) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const handleClick = () => {
    if (properties.url) window.open(properties.url);
  };
  return (
    <Container>
      <Column>
        <TextContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Description>{properties.description}</Description>
        </TextContainer>
        <Container>
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
