import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Hero from "components/hero/TwoColumnWithInput";
import tw from "twin.macro";
import FiveColumnDark from "components/footers/FiveColumnDark";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";
import TwoColumnWithImageAndProfilePictureReview from "components/products/TwoColumnWithImageAndProfilePictureReview";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import GetStarted from "components/cta/GetStarted";
import { ReactComponent as SvgDotPatternIcon } from "images/shield-icon.svg";
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide";
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost";

//change tailwind css
const PrimaryButtonForDurgeshPage = tw.a`px-5 py-3 font-bold bg-black rounded bg-pink-500 text-gray-100 hocus:bg-pink-500 shadow-gray-700  hocus:text-gray-900 focus:shadow-inner focus:outline-none transition duration-300 shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  animate-bounce hover:animate-none sticky`;
const Body = tw.div`bg-fixed bg-cover bg-center h-full bg-gray-900 scroll-smooth bg-black`; //bg-[url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600')]`//bg-gradient-to-r from-purple-300 to-indigo-400 text-black `;
const ContainerForButton = tw.div` flex justify-center mb-16 relative bg-transparent sticky`;

// const DecoratorBlob1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 w-32 h-32 mb-48 ml-16 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`
const DecoratorBlob2 = tw(
  SvgDotPatternIcon
)`absolute opacity-10 top-0 right-0 w-32 h-32 mt-64 mr-64 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50 `;

export default ({}) => {
  return (
    <>
      <Body>
        <Hero />
        <AnimationRevealPage>
          <ThreeColWithSideImage />
          <ContainerForButton>
            <PrimaryButtonForDurgeshPage href="https://calendly.com/panthernails/influencer-engagement-platform-demo">
              Book a Demo
            </PrimaryButtonForDurgeshPage>
          </ContainerForButton>
          <ScrollingAnimationUpSide y={200}>
            <TwoColumnWithImageAndProfilePictureReview />
          </ScrollingAnimationUpSide>
          <ScrollingAnimationUpSide y={100}>
            <GetStarted />
          </ScrollingAnimationUpSide>
          <ScrollingAnimationUpSide y={200}>
            <GridWithFeaturedPost />
          </ScrollingAnimationUpSide>
        </AnimationRevealPage>
        <FiveColumnDark />
        {/* <DecoratorBlob2 /> */}
      </Body>
    </>
  );
};
