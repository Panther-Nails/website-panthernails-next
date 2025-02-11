import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import {
  Container as ContainerBase,
  ContentWithVerticalPadding,
  Content2Xl,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left text-white font-black text-center text-3xl sm:text-4xl lg:text-5xl leading-tight`;
const Description = tw(
  SectionDescription
)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`;

export default ({ properties, children, index, data }) => {
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{properties.heading}</Heading>
                <Description>{properties.description}</Description>
                <PrimaryButton as="a" to={properties.buttonUrl}>
                  {properties.buttonText}
                </PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image
                  src={
                    properties.imageSrc
                      ? properties.imageSrc
                      : serverIllustrationImageSrc
                  }
                />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
