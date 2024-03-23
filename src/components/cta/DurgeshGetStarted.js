import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import { PrimaryThemeButton, PrimaryButton } from "components/misc/Buttons";
import Signup from "pages/Signup";
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide";
import { HighlightedText } from "components/misc/Headings";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24  rounded-lg relative bg-purple-500 `;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

export default ({
  leftFirst = true,
  text = (
    <>
      {" "}
      Let's Develop Your Next Great App! And Make your{" "}
      <HighlightedText>business grow</HighlightedText>
    </>
  ),
  primaryLinkText = "Get Started",
  primaryLinkUrl = <Signup />,
  secondaryLinkText = "Contact Us",
  secondaryLinkUrl = "https://calendly.com/panthernails/influencer-engagement-platform-demo",
  pushDownFooter = true,
  backgroundColor = tw`bg-purple-500`,
  textCss = tw`text-white`,
  containerBg = tw``,
}) => {
  return (
    <Container
      css={containerBg}
      tw="sm:px-8 lg:h-96 flex items-center justify-center"
    >
      {/* && pushDownFooter && tw`mb-20 lg:mb-24` */}
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer css={backgroundColor} tw="sm:px-8 w-full">
          <Row>
            <TextContainer>
              <Text css={textCss}>{text}</Text>
            </TextContainer>
            <LinksContainer>
              {/* <ScrollingAnimationUpSide y={400}> */}
              <PrimaryThemeButton href={primaryLinkUrl}>
                {primaryLinkText}
              </PrimaryThemeButton>
              <PrimaryThemeButton href={secondaryLinkUrl} target="_black">
                {secondaryLinkText}
              </PrimaryThemeButton>
              {/* </ScrollingAnimationUpSide> */}
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
