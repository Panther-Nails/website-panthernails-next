import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Container = tw.div`relative overflow-hidden`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 px-4 lg:px-0 font-medium text-gray-600 text-center md:px-20`;

const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({ index, properties, children }) => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <Heading>{properties.heading} </Heading>
          <HeadingDescription>{properties.description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>{ProcessChildComponentsSeparately(children)}</ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
