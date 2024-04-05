import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { Container } from "components/misc/Layouts";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import {
  TwoColumn,
  ImageColumn,
  TextContent,
  TextColumn,
} from "components/misc/Layouts";
import {
  SubheadingTreact,
  HeadingTreact,
  DescriptionTreact,
} from "components/misc/Typography";

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

export default ({
  data = {
    subheading: "Our Expertise",
    heading: "Designed & Developed by Professionals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    componentProperties: {
      primaryButtonText: "Learn More",
      primaryButtonUrl: "https://timerse.com",
      imageSrc: TeamIllustrationSrc,
      buttonRounded: true,
      imageRounded: true,
      imageBorder: false,
      imageShadow: false,
      imageCss: null,
      imageDecoratorBlob: false,
      imageDecoratorBlobCss: null,
      textOnLeft: false,
      showButton: false,
    },
  },
}) => {
  return (
    <>
      <Container tw="px-12">
        <TwoColumn tw="py-3">
          <TextColumn textOnLeft={data.componentProperties.textOnLeft}>
            <TextContent>
              <SubheadingTreact>{data.subheading}</SubheadingTreact>
              <HeadingTreact>{data.heading}</HeadingTreact>
              <DescriptionTreact>{data.description}</DescriptionTreact>
            </TextContent>
          </TextColumn>
          <ImageColumn>
            <Image
              css={data.componentProperties.imageCss}
              src={data.componentProperties.imageSrc}
              imageBorder={data.componentProperties.imageBorder}
              imageShadow={data.componentProperties.imageShadow}
              imageRounded={data.componentProperties.imageRounded}
            />
            {data.componentProperties.imageDecoratorBlob && (
              <DecoratorBlob
                css={data.componentProperties.imageDecoratorBlobCss}
              />
            )}
          </ImageColumn>
        </TwoColumn>
      </Container>
    </>
  );
};
