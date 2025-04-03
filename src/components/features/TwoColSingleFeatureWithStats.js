import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  SectionHeading,
} from "components/misc/Headings.js";
import { Container } from "components/misc/Layouts";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between  py-10 md:py-4`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12  h-80 md:h-144 px-4 `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 md:mt-0`,
  props.textOnLeft === "true"
    ? tw`md:ml-12 lg:ml-16 md:order-first`
    : tw`md:mr-12 lg:mr-16 md:order-last`,
]);

const Image = tw.img`
  rounded bg-cover bg-center h-full m-auto`;

//show and hide absolute image
// const Img = tw.img`h-96 relative object-cover`;
// const Img1 = tw.img`h-96 absolute opacity-0 hover:opacity-100 duration-700 hover:scale-[101%] scale-[100%] transition-all object-cover`;

const TextContent = tw.div``;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center px-4 lg:px-0 md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;

const Statistics = tw.div`mt-3 lg:mt-4 xl:mt-8 flex flex-wrap px-4 lg:px-0`;
const Statistic = tw.div`text-lg sm:text-xl lg:text-2xl w-1/2 mt-4 lg:mt-5 text-center md:text-left`;
const Value = tw.div`font-bold text-primary-500`;
const Key = tw.div`font-medium text-gray-700`;

export default ({ properties, children, index, data }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  var statistics = JSON.parse(properties.statistics || "[]");

  return (
    <Container id="AboutUs">
      <TwoColumn>
        <ImageColumn>
          <Image src={properties.imageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <TextContent>
            <HighlightedHeading textStyle={tw`text-center md:text-left`}>
              {properties.heading}
            </HighlightedHeading>
            <Description>{properties.description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
