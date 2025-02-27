import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "../misc/Headings.js";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { HighlightedHeading } from "../misc/Headings.js";
import { Container } from "components/misc/Layouts.js";

const Content = tw.div`max-w-screen-xl mx-auto py-6`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;

const HeadingInfoContainer = tw.div`flex flex-col items-center w-[90%] m-auto`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black text-2xl px-4 lg:px-0 md:text-4xl lg:text-5xl text-center leading-tight `;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <HeadingDescription>{properties.description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>{ProcessChildComponentsSeparately(children)}</ThreeColumn>
      </Content>
    </Container>
  );
};
