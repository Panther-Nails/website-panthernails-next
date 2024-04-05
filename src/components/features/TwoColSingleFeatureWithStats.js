import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({
  heading="Transform Your Business",
  description ="We are a genial technology company delivering insightful enterprise software that foster your business. We focus on building a company culture capable of delivering superior stakeholder value by helping people to make the most of each moment. Our expertise provides you access to your business at any moment, at work, at home or on the move. The bespoke solutions are designed to serve very specific need of yours. The reporting engine covers detailed minutiae of your business transactions.",
  textOnLeft = false,
  imageSrc="https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  statistics = [
    {
      key: "Countries",
      value: "192",
    },
    {
      key: "Hotels",
      value: "479",
    },
    {
      key: "Rooms",
      value: "2093",
    },
    {
      key: "Workers",
      value: "10347",
    }
  ]}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  

  return (
    <Container id="AboutUs">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={imageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
              <Statistic key={index}>
                <Value>{statistic.value}</Value>
                <Key>{statistic.key}</Key>
              </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
