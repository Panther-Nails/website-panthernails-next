import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft === "true"
    ? tw`md:mr-12  lg:mr-16 md:order-first`
    : tw`md:ml-12  lg:ml-16 flex-row-reverse`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full `,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 px-6 lg:px-0 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            imageSrc={
              properties.imageSrc ? properties.imageSrc : TeamIllustrationSrc
            }
          />
        </ImageColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <TextContent>
            <Subheading>{properties.subHeading}</Subheading>
            <Heading>
              {properties.heading}
              <span tw="text-primary-500">{properties.highlightText}</span>
            </Heading>
            <Description>{properties.description}</Description>
            <Features>{ProcessChildComponentsSeparately(children)}</Features>
            {properties.buttonText ? (
              <PrimaryButton as="a" href={properties.buttonUrl} target="_blank">
                {properties.buttonText}
              </PrimaryButton>
            ) : (
              <></>
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
