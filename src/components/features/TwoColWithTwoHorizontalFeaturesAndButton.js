import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;

const ImageColumn = styled(Column)((props) => [
  tw` flex-shrink-0 relative`,
  props.imageSize === "small" ? tw`md:w-4/12` : tw`md:w-6/12`,
]);
const TextColumn = styled(Column)((props) => [
  tw`md:w-8/12 mt-16 md:mt-0`,
  props.imageSize === "small" ? tw`md:w-8/12` : tw`md:w-6/12`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8  text-center md:text-left `;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;

const Description = tw.p`mt-8 px-6 lg:px-0  text-center  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded ? tw`` : tw`rounded-full`,
]);

export default ({
  properties,
  index,
  children,

  showDecoratorBlob = false,
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn imageSize={properties.imageSize}>
          <Image
            src={properties.imageSrc}
            imageBorder={properties.imageBorder}
            imageShadow={properties.imageShadow}
            imageRounded={properties.imageRounded}
          />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn
          textOnLeft={properties.textOnLeft}
          imageSize={properties.imageSize}
        >
          <TextContent>
            <Subheading>{properties.subheading}</Subheading>
            <HighlightedHeading tw="text-left">
              {properties.heading}
            </HighlightedHeading>
            <Description>{properties.description}</Description>
            <Features>{ProcessChildComponentsSeparately(children)}</Features>

            <PrimaryButton
              buttonRounded={properties.buttonRounded}
              as="a"
              href={properties.buttonUrl}
            >
              {properties.buttonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
