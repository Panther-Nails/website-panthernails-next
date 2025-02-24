import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService";
const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

const TextContainer = tw.div`w-[90%] m-auto`;

export default ({ properties, children }) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          <TextContainer>
            {properties.subheading && (
              <Subheading>{properties.subheading}</Subheading>
            )}
            <HighlightedHeading>{properties.heading}</HighlightedHeading>
          </TextContainer>
          <Testimonials>
            {ProcessChildComponentsSeparately(children)}
          </Testimonials>
        </ContentWithPaddingXl>

        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    </>
  );
};
