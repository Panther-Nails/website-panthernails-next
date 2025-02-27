import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container } from "components/misc/Layouts";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between gap-4 max-w-screen-xl  py-8  items-center`;
const Column = tw.div`w-full max-w-md  md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 flex flex-col relative items-center  hidden md:block px-4`;
const TextColumn = styled(Column)((props) => [
  tw`lg:w-6/12 mt-16 lg:mt-0`,
  props.textOnLeft === "true"
    ? tw`md:mr-12  lg:mr-16 flex-row-reverse `
    : tw`md:ml-12  lg:ml-32 md:order-first`,
]);

// Image with optional styling props
const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
  tw` mx-auto`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left m-auto `;

const Subheading = tw(SubheadingBase)`text-center md:text-left mx-0`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl leading-tight`;

const Steps = tw.ul`mt-12`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto lg:mx-0`;

export default ({ properties, children }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            src={properties.imageSrc}
            imageBorder={properties.imageBorder}
            imageShadow={properties.imageShadow}
            imageRounded={properties.imageRounded}
          />
          {properties.imageDecoratorBlob && (
            <DecoratorBlob css={properties.decoratorBlobCss} />
          )}
        </ImageColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <TextContent>
            <Subheading>{properties.subHeading}</Subheading>
            <HighlightedHeading textStyle={tw`text-center md:text-left`}>
              {properties.heading}
            </HighlightedHeading>
            <Steps>{ProcessChildComponentsSeparately(children)}</Steps>
            {properties.buttonText ? (
              <PrimaryButton as="a" href={properties.buttonUrl}>
                {properties.buttonText}
              </PrimaryButton>
            ) : null}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
