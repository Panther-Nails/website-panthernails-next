import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import "slick-carousel/slick/slick.css";
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({ children, properties, index }) => {
  const [sliderRef, setSliderRef] = useState(null); //eslint-disable-line

  return (
    <>
      <Testimonial key={index}>
        <QuoteContainer>
          <QuoteIcon />
          <Quote>{properties.quote}</Quote>
        </QuoteContainer>
        <CustomerInfoAndControlsContainer>
          <CustomerImage src={properties.imageSrc} />
          <CustomerNameAndProfileContainer>
            <CustomerName>{properties.name}</CustomerName>
            <CustomerProfile>{properties.profile}</CustomerProfile>
          </CustomerNameAndProfileContainer>
          <ControlsContainer>
            <ControlButton onClick={sliderRef?.slickPrev}>
              <ArrowLeftIcon className="icon" />
            </ControlButton>
            <ControlButton>
              <ArrowRightIcon className="icon" onClick={sliderRef?.slickNext} />
            </ControlButton>
          </ControlsContainer>
        </CustomerInfoAndControlsContainer>
      </Testimonial>
    </>
  );
};
