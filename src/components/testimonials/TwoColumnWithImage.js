import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "../misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import "slick-carousel/slick/slick.css";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container } from "components/misc/Layouts.js";


const Content = tw.div`max-w-screen-xl mx-auto pt-6 pb-6`;
const HeadingInfoContainer = tw.div`flex flex-col items-center w-[90%] m-auto`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-8 px-12`;
const TestimonialSlider = styled(Slider)`bg-red-500`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end  z-20`}
  button {
    ${tw`  transition duration-300 transform scale-100 hover:scale-125 transform -translate-y-2/3 `}
    svg {
      ${tw` w-4 h-4  lg:(w-8 h-8) text-secondary-500 hover:text-primary-500`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) =>{
   return(
  
  
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon tw="block " />
    </button>
  </SliderControlButtonContainer>
)};
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon tw=" " />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <HeadingDescription>{properties.description}</HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />}
            prevArrow={<PreviousArrow />}
          >
            {ProcessChildComponentsSeparately(children)}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
