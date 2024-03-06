import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import Signup from "pages/Signup";
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-secondary-500 rounded-lg relative bg-purple-500 `;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(
  Link
)` text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold hover:border-black`;

const SecondaryLink = tw(
  Link
)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black hover:text-white hover:border-black`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

const HighlightedText = tw.span`text-primary-900 font-bold`;

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
    <Container css={containerBg}>
      {/* {leftFirst ? ( */}
      <>
        {/* && pushDownFooter && tw`mb-20 lg:mb-24` */}
        <ContentWithPaddingXl>
          <PrimaryBackgroundContainer css={backgroundColor}>
            <Row>
              <TextContainer>hello</TextContainer>
              <LinksContainer>Well</LinksContainer>
            </Row>
          </PrimaryBackgroundContainer>
        </ContentWithPaddingXl>
      </>
      {/* // ) : (
      //   <>
      //     <ContentWithPaddingXl>
      //       <PrimaryBackgroundContainer css={backgroundColor}>
      //         <Row css={tw``}>
      //           <LinksContainer></LinksContainer>
      //           <TextContainer css={tw`ml-32`}></TextContainer>
      //         </Row>
      //       </PrimaryBackgroundContainer>
      //     </ContentWithPaddingXl>
      //   </>
      // )} */}
    </Container>
  );
};
