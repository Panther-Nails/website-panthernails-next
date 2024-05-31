import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto `;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({ properties, children, index }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {properties.subheading && (
          <Subheading>{properties.subheading}</Subheading>
        )}
        {properties.heading && (
          <HighlightedHeading color="text-primary-500">
            {properties.heading}
          </HighlightedHeading>
        )}
        {properties.description && (
          <Description>{properties.description}</Description>
        )}
        <ThreeColumnContainer>
          {ProcessChildComponentsSeparately(children)}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
