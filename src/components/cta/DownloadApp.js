import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import {
  ContentWithPaddingXl,
  Container as ContainerBase,
} from "components/misc/Layouts";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import appleIconImageSrc from "images/apple-icon.png";
import googlePlayIconImageSrc from "images/google-play-icon.png";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const Container = tw(ContainerBase)`bg-primary-900 `;
const Content = tw(ContentWithPaddingXl)``;
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`;
const TextContainer = tw(ColumnContainer)``;
const Heading = tw(
  SectionHeading
)`text-gray-100 lg:text-left max-w-none text-3xl leading-snug font-bold  `;
const Subheading = tw(SubheadingBase)`text-yellow-500 mb-4 tracking-wider`;

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center md:block sm:block gap-3 `;
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full md:flex lg:inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 sm:my-2 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const ImageContainer = tw(
  ColumnContainer
)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-purple-800 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-pink-800 opacity-50`;
export default ({
  index,
  properties,
  children,

  link1IconSrc = appleIconImageSrc,
  link2IconSrc = googlePlayIconImageSrc,
}) => {
  return (
    <Container>
      <Content>
        <Row>
          <TextContainer>
            {properties.subheading && (
              <Subheading>{properties.subheading}</Subheading>
            )}
            <Heading tw="text-white">{properties.heading}</Heading>
            <LinksContainer>
              <Link href={properties.leftButtonUrl} target="_black">
                <img src={link1IconSrc} alt="" />
                <span>{properties.leftButtonText}</span>
              </Link>
              <Link href={properties.rightButtonUrl} target="_black">
                <img src={link2IconSrc} alt="" />
                <span>{properties.rightButtonText}</span>
              </Link>
            </LinksContainer>
          </TextContainer>
          <ImageContainer>
            <img src={properties.imageSrc} alt="" tw="w-64" />
          </ImageContainer>
        </Row>
        <Row>{ProcessChildComponentsSeparately(children)}</Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </DecoratorBlobContainer>
      </Content>
    </Container>
  );
};
