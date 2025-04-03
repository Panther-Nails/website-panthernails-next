import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { HighlightedHeading } from "components/misc/Headings";

import { Container } from "components/misc/Layouts";

const BaseContainer = styled(Container)`
  background-image: ${(props) =>
    props.imageSrc ? `url(${props.imageSrc})` : "none"};
  ${tw`flex relative bg-center bg-cover max-h-screen min-h-144 2xl:max-w-screen-xl mx-auto 2xl:h-[70vh]`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-[50%]`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col items-center justify-center my-auto`;
const Content = tw.div`px-4 flex flex-1 h-full flex-col justify-center items-center lg:px-10 gap-4 my-auto`;
const Paragraph = tw.p`px-2 lg:px-12 my-4 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg text-gray-100 text-center leading-loose`;

const Heading = styled.h1`
  ${tw`text-2xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug  sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const CardAction = tw(PrimaryButtonBase)` mt-4`;
export default ({ properties}) => {

  return (
    <BaseContainer imageSrc={properties.backgroundImageUrl}>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <HighlightedHeading primaryColor={tw`text-white text-left`}>
            {properties.heading}
          </HighlightedHeading>
          {properties.description && (
            <Paragraph>{properties.description}</Paragraph>
          )}
          <CardAction as="a" href={properties.buttonUrl}>
            {properties.buttonText}
          </CardAction>
        </Content>
      </HeroContainer>
    </BaseContainer>
  );
};
