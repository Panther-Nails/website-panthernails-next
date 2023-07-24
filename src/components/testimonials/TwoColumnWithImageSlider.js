import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const SlideshowDiv = tw.div`mx-auto overflow-hidden w-72`;
//const SlideshowSliderDiv = tw.div`whitespace-nowrap`;
const SlideshowSliderDiv = styled.div((props) => [
  tw`whitespace-nowrap ease-in-out`,
]);

const SlideDiv = styled.div((props) => [
  tw`h-40 w-72 border inline-block aspect-video`,
  `background-color: ${props.bgColor}`,
]);

const SlideshowDotsDiv = tw.div`text-center`;
const SlideshowDotDiv = tw.div`inline-block h-4 w-4 rounded-full cursor-pointer  bg-gray-500 m-2`;

// const SlideDiv = tw.div((props) => [
//   tw`h-40 w-full border`,
//   tw`background-color: ${props.bgColor};`,
// ]);

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;


const PlanAction = tw.div`mt-4 flex`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`block text-center text-sm font-semibold tracking-wider w-full text-gray-700 bg-gray-200 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300`}
`;



const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);

const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const colors = ["red", "green", "blue"];
const delay = 1000;

export default () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {};
  }, [index]);

  const handleOnNextClick = () => {console.log("Next")};

  const handleOnPrevClick = () => {console.log("Prev")};

  return (
    <Container>
      <Content>
        <>{index}</>
        <SlideshowDiv>
          <SlideshowSliderDiv id="slideshowSlider">
            {colors.map((backgroundColor, index) => (
              <SlideDiv key={index} index={index} bgColor={backgroundColor}>
                <>
                  <p>{index}</p>
                  <p>{backgroundColor}</p>
                </>
              </SlideDiv>
            ))}
          </SlideshowSliderDiv>
          <SlideshowDotsDiv>
            {colors.map((_, idx) => (
              <SlideshowDotDiv
                onClick={() => {
                  setIndex(idx);
                }}
              />
            ))}
          </SlideshowDotsDiv>

          <PlanAction>
              <ActionButton as="a" href="">
                { <> next </>}
              </ActionButton>
              <ActionButton as="a" href="">
                { <> prev </>}
              </ActionButton>

          </PlanAction>
        </SlideshowDiv>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
