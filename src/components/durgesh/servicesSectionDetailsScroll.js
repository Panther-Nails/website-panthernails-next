import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-secondary-500 rounded-lg relative  bg-black`;
const Row = tw.div` mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left ml-0 mr-0 w-full`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const ImageContainer = tw(ColumnContainer)`ml-16 float-right `;
const TextContainer = tw(ColumnContainer)`ml-12 p-16  `;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;
const Image = tw.img` bg-cover mb-5 rounded-xl float-right h-full w-full `;

const HighlightedText = tw.span`text-primary-900 font-bold`;

export default ({
  text = (
    <>
      {" "}
      Panther Nails helps you offer a wide range of relevant products as gifts
      to your partners, all with quick delivery services.{" "}
      <HighlightedText>business grow</HighlightedText>
    </>
  ),
  backgroundColor = tw`bg-gray-500`,
  textCss = tw`text-black`,
  containerBg = tw``,
  imageSrc = "https://media.istockphoto.com/id/1412305813/photo/3d-online-payment-confirmation-icon-a-credit-card-with-gifts-3d-rendering-illustration.jpg?s=1024x1024&w=is&k=20&c=u3HvyEt0L-QgL4f-uF8_FBMKVP1vx0Z5_5Zw-KkJ0q0=",
}) => {
  return (
    <Container css={containerBg}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer css={backgroundColor}>
          <Row>
            <TextContainer>
              <Text css={textCss}>{text}</Text>
            </TextContainer>
            <ImageContainer>
              <Image src={imageSrc}></Image>
            </ImageContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
