import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { HighlightedHeading } from "components/misc/Headings";
const Container = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`relative  bg-center bg-cover  h-screen min-h-144`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Paragraph = tw.p`px-2 lg:px-12 my-4 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg text-gray-100 text-center leading-loose`;

const Heading = styled.h1`
  ${tw`text-2xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug  sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const CardAction = tw(PrimaryButtonBase)` mt-4`;
export default ({ properties, children, index, data }) => {
  return (
    <Container imageSrc={properties.backgroundImageUrl}>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Paragraph>{properties.description}</Paragraph>
          <CardAction as="a" href={properties.buttonUrl}>
            {properties.buttonText}
          </CardAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
