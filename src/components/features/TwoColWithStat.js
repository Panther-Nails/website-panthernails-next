import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { Container as LocalContainer } from "../misc/Layouts.js";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-center max-w-screen-xl mx-auto  flex-wrap  px-12  items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 lg:py-40`;

const Container = tw(LocalContainer)`py-10`;
const TextColumn = styled(Column)((props) => [
  tw` md:mt-0 text-center md:py-4 `,
  props.statLength > 3 ? tw`md:w-1/2` : tw`w-1/2 md:w-1/3`,
]);

const TextContent = tw.div` text-center text-xl lg:text-2xl font-bold px-4 `;
const NumberContent = styled.span`
  ${tw`text-center text-5xl md:text-6xl lg:text-7xl font-black `}
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

const HeadingContainer = tw.div`flex w-[90%] flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto md:pb-6`;
export default ({ data, children, properties, textOnLeft = true }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  var statistics = JSON.parse(properties.statistics || "[]");


  return (
    <Container>
      <HeadingContainer>
        <Subheading>{properties.subHeading}</Subheading>
        <HighlightedHeading>{properties.heading}</HighlightedHeading>
        <Description>{properties.description}</Description>
      </HeadingContainer>
      <TwoColumn>
        {statistics.map((stat, index) => (
          <TextColumn
            statLength={statistics.length}
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
