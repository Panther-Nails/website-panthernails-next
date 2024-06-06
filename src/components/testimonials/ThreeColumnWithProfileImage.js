import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { getProperties } from "services/JsonService";
const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`m-5 text-gray-900 font-semibold uppercase  tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({ properties, children }) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Testimonials>
            {children.map((child, index) => {
              var childProperties = getProperties(child);

              return (
                <>
                  <TestimonialContainer key={index}>
                    <Testimonial>
                      <CustomerName>{childProperties.heading}</CustomerName>
                      <Image src={childProperties.imageSrc} />
                      <Quote>"{childProperties.description}"</Quote>
                    </Testimonial>
                  </TestimonialContainer>
                </>
              );
            })}
          </Testimonials>
        </ContentWithPaddingXl>

        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    </>
  );
};
