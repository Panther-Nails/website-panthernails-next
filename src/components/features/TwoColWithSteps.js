import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-12 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 flex flex-col relative items-center hidden lg:block`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  // props.textOnLeft
  //   ? tw`md:mr-12 lg:mr-16 md:order-first`
  //   : tw`md:ml-12 lg:ml-16 md:order-last`,
  props.textOnLeft === "true"
    ? tw`md:pl-20 md:order-first`
    : tw`  md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;
export default ({ properties, children, index, data }) => {
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
            <Heading>{properties.heading}</Heading>
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
