import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container } from "components/misc/Layouts";


const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl gap-4 mx-auto py-20 md:py-24`;
const Column = tw.div`w-full  max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto  hidden md:block px-4`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft === "true"
    ? tw`md:ml-12 lg:ml-16 md:order-first`
    : tw`md:mr-12 lg:mr-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Description = tw.p`mt-4 px-4 lg:px-0 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-center lg:text-left text-xl sm:text-2xl lg:text-3xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-center  text-primary-700`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({ properties, children, index, data }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects

  var statistics = JSON.parse(properties.statistics || "[]");

  return (
    <Container>
      <TwoColumn >
        <ImageColumn
          css={
            properties.imageContainerCss ? properties.imageContainerCss : null
          }
        >
          {
            (properties.imageInsideDiv = "true" ? (
              <Image
                imageSrc={properties.imageSrc}
                css={properties.imageCss ? properties.imageCss : null}
              />
            ) : (
              <img
                src={properties.imageSrc}
                css={properties.imageCss ? properties.imageCss : null}
                alt=""
              />
            ))
          }
        </ImageColumn>
        <TextColumn textOnLeft={"properties.textOnLeft"}>
          <TextContent>
            {properties.subheading && (
              <Subheading>{properties.subheading}</Subheading>
            )}
            <HighlightedHeading textStyle={tw`text-center md:text-left`}>{properties.heading}</HighlightedHeading>
            <Description>{properties.description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <PrimaryButton as="a" href={properties.buttonUrl}>
              {properties.buttonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
