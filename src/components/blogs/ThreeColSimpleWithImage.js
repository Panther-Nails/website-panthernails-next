import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "../misc/Headings.js";
import { ProcessChildComponentsSeparately } from "DynamicPage.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export default ({ index, properties, children }) => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Heading>{properties.heading}</Heading>
          <HeadingDescription>{properties.description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>{ProcessChildComponentsSeparately(children)}</ThreeColumn>
      </Content>
    </Container>
  );
};
