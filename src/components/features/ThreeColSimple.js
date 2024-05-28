import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Heading = tw(
  SubheadingBase
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto `;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

const HighlightedHeading = ({ children }) => {
  return (
    <>
      {children.split("`").map((chunk, index) => {
        if (index % 2 == 0) return <span tw="text-primary-900">{chunk}</span>;
        else return <span tw="text-primary-500">{chunk}</span>;
      })}
    </>
  );
};

export default ({ properties, children, index }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {properties.subheading && (
          <Subheading>{properties.subheading}</Subheading>
        )}
        {properties.heading && (
          <Heading>
            <HighlightedHeading color="text-primary-500">
              {properties.heading}
            </HighlightedHeading>
          </Heading>
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
