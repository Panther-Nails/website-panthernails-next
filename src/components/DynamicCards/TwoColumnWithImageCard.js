import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import "slick-carousel/slick/slick.css";

const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col `;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left  md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-4 h-4 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-4 h-4 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

export default ({ index, properties, children }) => {
  return (
    <Testimonial key={index}>
      <ImageContainer>
        <img src={properties.imageSrc} alt={properties.name} />
      </ImageContainer>
      <TextContainer>
        <QuoteContainer>
          <QuotesLeft />
          <Quote>{properties.quote}</Quote>
          <QuotesRight />
        </QuoteContainer>
        <CustomerInfo>
          <CustomerName>{properties.name}</CustomerName>
          <CustomerTitle>{properties.title}</CustomerTitle>
        </CustomerInfo>
      </TextContainer>
    </Testimonial>
  );
};
