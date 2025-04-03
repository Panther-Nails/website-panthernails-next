import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import { HighlightedHeading } from "components/misc/Headings";

// const PrimaryBackgroundContainer = tw.div`py-4 lg:py-8 bg-secondary-500 rounded-lg relative w-[95%] m-auto`;
const Row = tw.div`px-4 w-[100%] mx-auto flex items-center justify-center relative z-10 flex-col lg:flex-row text-center lg:text-left gap-4`;
const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)`md:w-[60] mx-auto`;

const PrimaryBackgroundContainer = styled.div`
  ${tw`py-4 bg-secondary-500 rounded-lg relative w-[95%] m-auto 2xl:max-w-screen-xl`}
`;

const BasePrimaryBackgroundContainer = styled(PrimaryBackgroundContainer)`
  background-image: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : "none"};

  background-size: cover;
  background-position: center;
`;

const ImageContainer = tw.div`md:w-[70%] lg:w-[40%] flex flex-col justify-center items-center`;
const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;
const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const Image = tw.img` w-[70%] h-[50%] `;
const SecondaryLink = tw(
  Link
)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

const SubHeading = tw.div`text-lg sm:text-xl font-bold text-[#C37E2F] text-center `;
export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <BasePrimaryBackgroundContainer
        backgroundImageUrl={properties.backgroundImageUrl}
       
      >
        <Row>
          <TextContainer>
            <HighlightedHeading
              primaryColor={tw`text-white`}
              textStyle={tw`text-2xl sm:text-5xl text-center lg:text-left   mx-auto`}
            >
              {properties.heading}
            </HighlightedHeading>
          </TextContainer>
          <ImageContainer>
            <Image src={properties.imageSrc} />
          </ImageContainer>
        </Row>
      </BasePrimaryBackgroundContainer>
    </Container>
  );
};
