import React, { Children } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { getProperties } from "services/JsonService";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center  leading-tight`;
const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-10 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-10 transform translate-x-2/3 text-yellow-500`}
`;

export default ({ properties, children }) => {
  console.log(properties);
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <Heading>{properties.heading}</Heading>
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
