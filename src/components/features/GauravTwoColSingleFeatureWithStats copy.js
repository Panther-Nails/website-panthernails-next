import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const Container = tw.div`relative bg-sitecolor-100 my-12 flex flex-col items-center justify-center `;
const TwoColumn = tw.div`flex flex-col items-center justify-center w-full mx-auto  `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const ImageColumn = tw(Column)`md:w-full flex-shrink-0 h-80 md:h-screen`;
// const TextColumn = styled(Column)(props => [
//   tw`md:w-6/12 mt-8 md:mt-0`,
//   props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
// ]);
const TextColumn = styled(Column)(props => [
  tw`md:w-11/12 px-12 -mt-32 text-center bg-white rounded items-center justify-center`,
  // props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover w-full h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`  text-3xl sm:text-4xl lg:text-5xl text-center  leading-tight`;
const Description = tw.p`text-center  md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 md:flex-row flex flex-col `
const Statistic = tw.div`text-lg sm:text-2xl flex flex-col px-4 items-center justify-between lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center `
const Value = tw.div`text-center px-4  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-sitecolor-300 mt-4`
const Key = tw.div`text-3xl  text-sitecolor-700 sm:text-2xl lg:text-3xl text-center  leading-tight`
const Icons=tw.img`w-16 h-16 bg-white` 

export default ({
  heading="The core values and principles that drive us",
  description ="We are a genial technology company delivering insightful enterprise software that foster your business. We focus on building a company culture capable of delivering superior stakeholder value by helping people to make the most of each moment. Our expertise provides you access to your business at any moment, at work, at home or on the move. The bespoke solutions are designed to serve very specific need of yours. The reporting engine covers detailed minutiae of your business transactions.",
  textOnLeft = false,
  imageSrc="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
  statistics = [
    { img:'https://img.icons8.com/?size=80&id=yIGiaaLl7bsg&format=png',
      key: "Long-term commitment",
      value: "12 years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that’s powered by you, our customer.",
    },
    {
      img:'https://img.icons8.com/?size=80&id=w3pn9MyqHTAB&format=png',
      key: "Focus on research & development",
      value: "Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.",
    },
    {
      img:'https://image.shutterstock.com/image-vector/patient-icon-health-insurance-vector-260nw-1714375345.jpg',
      key: "Customer-first philosophy",
      value: "In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow.",
    },
    
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
            {/* <Description>{description}</Description> */}
            <Statistics>
              {statistics.map((statistic, index) => (
              <Statistic key={index}>
                <Icons src={statistic.img}></Icons>
                <Key>{statistic.key}</Key>
                <Value>{statistic.value}</Value>
              </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <PrimaryButtonBase>read our story </PrimaryButtonBase>
    </Container>
  );
};
