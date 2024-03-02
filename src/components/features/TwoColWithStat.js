import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { Container, StyledText } from "../misc/Layouts.js";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0 text-center`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const Text = styled.span`
  ${tw` -my-16 text-center text-6xl font-black `}
  background-image: linear-gradient(to right, red, lightgreen);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NewText = styled(StyledText)((props) => [tw`text-9xl `]);

const TextContent = tw.div` text-center text-2xl `;

const NumberContent = styled.span`
  ${tw` -my-16 text-center text-8xl font-black`}
  background-image: url("https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NumberDecorator = styled.span`
  ${tw` text-center text-green-700 font-bold text-6xl  `}
`;

const Subheading = tw(SubheadingBase)`text-center text-red-500`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center leading-tight  `;

const Stats = tw(SubheadingBase)`text-center md:text-left`;

const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const ImageText = styled.span`
  ${tw` -my-16 text-center text-9xl font-black `}

  background-image: url("https://images.unsplash.com/photo-1569448634236-16398247262e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText1 = styled.span`
  ${tw` -my-16 text-center text-9xl font-black `}

  background-image: linear-gradient(to right, #00000000, #1e90ffff);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  statistics = [
    {
      number: "20",
      decorator: "%▲",
      description: "Customer retention",
    },

    {
      number: "15",
      decorator: "%▼",
      description: "Customer grivences",
    },
  ],
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <Column>
        <ImageText css={tw`absolute`}> Hello </ImageText>
        <StyledText1 css={tw`absolute`}> Hello </StyledText1>
        <Subheading>{subheading}</Subheading>
        <Heading>{heading}</Heading>
      </Column>

      <TwoColumn>
        {statistics.map((stat, index) => (
          <TextColumn textOnLeft={textOnLeft}>
            <NumberContent>{stat.number}</NumberContent>
            <NumberDecorator>{stat.decorator}</NumberDecorator>
            <TextContent>{stat.description}</TextContent>
          </TextColumn>
        ))}
      </TwoColumn>
    </Container>
  );
};
