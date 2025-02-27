import React from "react";
import { Container } from "components/misc/Layouts";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-6 px-4`;
const HeadingContainer = tw.div`text-center w-[90%] m-auto pt-4`;
const Description = tw(SectionDescription)`mx-auto`;
const Posts = tw.div` flex flex-wrap -mr-3 relative`;
const DecoratorBlob1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {properties.heading && (
            <HighlightedHeading>{properties.heading}</HighlightedHeading>
          )}
          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeadingContainer>
        <Posts>
          {ProcessChildComponentsSeparately(children)}

          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
