import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { Container } from "../misc/Layouts.js";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({ properties, children, index, data }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            css={properties.imageCss ? properties.imageCss : null}
            src={
              properties.imageSrc ? properties.imageSrc : TeamIllustrationSrc
            }
            imageBorder={
              properties.imageBorder ? properties.imageBorder : false
            }
            imageShadow={
              properties.imageShadow ? properties.imageShadow : false
            }
            imageRounded={
              properties.imageRounded ? properties.imageRounded : true
            }
          />
          {
            (properties.imageDecoratorBlob = true && (
              <DecoratorBlob
                css={
                  properties.imageDecoratorBlobCss
                    ? properties.imageDecoratorBlobCss
                    : null
                }
              />
            ))
          }
        </ImageColumn>
        <TextColumn
          textOnLeft={properties.textOnLeft ? properties.textOnLeft : true}
        >
          <TextContent>
            <Subheading>{properties.subheading}</Subheading>
            <HighlightedHeading>{properties.heading}</HighlightedHeading>
            <Description>{properties.description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
