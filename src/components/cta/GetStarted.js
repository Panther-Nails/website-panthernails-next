import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import { HighlightedHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const PrimaryBackgroundContainer = tw.div`py-4 lg:py-8 bg-secondary-500 rounded-lg relative w-[95%] m-auto`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;
const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;

const Text = tw.h4`text-2xl sm:text-3xl font-bold`;
const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`}
`;

const PrimaryLink = tw(
  Link
)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;
const SecondaryLink = tw(
  Link
)`text-gray-100 border-gray-500 bg-transparent hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ContentWithPaddingXl tw="py-4">
        <PrimaryBackgroundContainer>
          <Row>
            <TextContainer>
              <HighlightedHeading
                primaryColor={tw`text-white`}
                textStyle={tw`text-2xl sm:text-3xl`}
              >
                {properties.heading}
              </HighlightedHeading>
            </TextContainer>
            <LinksContainer>
              {properties.leftButtonText && (
                <PrimaryLink href={properties.leftButtonUrl} target="_black">
                  {properties.leftButtonText}
                </PrimaryLink>
              )}
              {properties.rightButtonText && (
                <SecondaryLink href={properties.rightButtonUrl} target="_black">
                  {properties.rightButtonText}
                </SecondaryLink>
              )}
            </LinksContainer>
          </Row>
          <DecoratorBlobContainer>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
          </DecoratorBlobContainer>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
