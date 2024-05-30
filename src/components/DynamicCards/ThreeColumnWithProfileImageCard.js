import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`text-gray-900 font-semibold uppercase text-sm tracking-wide py-5`;

export default ({ index, properties, children }) => {
  return (
    <>
      <TestimonialContainer key={index}>
        <Testimonial>
          <CustomerName>{properties.name}</CustomerName>
          <Image src={properties.imageSrc} />
          <Quote>"{properties.quote}"</Quote>
        </Testimonial>
      </TestimonialContainer>
    </>
  );
};
