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

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto   items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 lg:py-40`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 md:mt-0 text-center py-20`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div` text-center text-2xl font-bold `;

const NumberContent = styled.span`
  ${tw`text-center text-8xl font-black`}
  background-image: url("${(props) => props.imageSrc}");
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NumberDecorator = styled.span`
  ${tw` text-center text-green-700 font-bold text-4xl lg:text-6xl  `}
`;

const Subheading = tw(SubheadingBase)`text-center text-red-500`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-4xl lg:text-5xl text-center leading-tight  `;

const Description = tw.p`mx-auto mt-4 px-4 lg:px-0 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const ImageText = styled.span`
  ${tw`absolute text-left text-9xl font-black `}

  background-image: url("https://images.unsplash.com/photo-1633469924738-52101af51d87?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText1 = styled.span`
  ${tw` absolute text-left text-9xl font-black `}

  background-image: linear-gradient(to right, #00000000, #1e90ffff);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ({ data, children, properties, textOnLeft = false }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  var statistics = JSON.parse(properties.statistics);
  return (
    <Container>
      {/* <Column>
        <ImageText> {subheading} </ImageText>
        <StyledText1> {subheading} </StyledText1>
      </Column> */}

      <Subheading>{properties.subheading}</Subheading>
      <Heading>{properties.heading}</Heading>
      <Description>{properties.description}</Description>

      <TwoColumn>
        {statistics.map((stat, index) => (
          <TextColumn textOnLeft={textOnLeft} key={index}>
            <NumberContent imageSrc={properties.imageSrc}>
              {stat.number}
            </NumberContent>
            <NumberDecorator>{stat.decorator}</NumberDecorator>
            <TextContent>{stat.description}</TextContent>
          </TextColumn>
        ))}
      </TwoColumn>
    </Container>
  );
};
