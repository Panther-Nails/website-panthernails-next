import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { Container } from "../misc/Layouts.js";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto   items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 lg:py-40`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 md:mt-0 text-center md:py-20`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div` text-center text-2xl font-bold px-4 lg:px-0`;
const NumberContent = styled.span`
  ${tw`text-center text-6xl md:text-8xl font-black`}
  background-color: #1e90ffff;
  background-image: url("${(props) => props.imageSrc}");
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NumberDecorator = styled.span`
  ${tw` text-center text-green-700 font-bold text-4xl lg:text-6xl  `}
`;

const Subheading = tw(SubheadingBase)`text-center text-red-500`;

const Description = tw.p`mx-auto mt-4 px-4 lg:px-0 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({ data, children, properties, textOnLeft = true }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  var statistics = JSON.parse(properties.statistics || "[]");
  return (
    <Container>
      <Subheading>{properties.subHeading}</Subheading>
      <HighlightedHeading>{properties.heading}</HighlightedHeading>
      <Description>{properties.description}</Description>
      <TwoColumn>
        {statistics.map((stat, index) => (
          <TextColumn
            textOnLeft={properties.textOnLeft ? properties.textOnLeft : true}
            key={index}
          >
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
