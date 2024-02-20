//personal imports
import Features from "components/features/GauravVerticalWithAlternateImageAndText copy";




import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Header from "../headers/light.js";
import ProductImageCLM from "images/ProductCLM.png";
import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import ProfileImageCLM from "images/CLM.png";
import ProfileImageRasikLoyalty from "images/Loyalty.png";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
const buttonRoundedCss = tw`rounded-full  w-32 ml-40  flex overflow-hidden hover:( w-80)`;

const Container = tw.div`relative  `;
const Content = tw.div`mt-24 lg:mt-24 lg:mb-10 flex flex-col sm:items-center lg:items-stretch `;
const Icone=tw.img`w-12 h-12 rounded-full ml-16 `
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20 mb-2 `;


// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

export default ({
  products = [
    {
      imageSrc: ProductImageRasikLoyalty,
      profileImageSrc: ProfileImageRasikLoyalty,
      subtitle: "Customer Loyalty Platform",
      title: "Rasik Loyalty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/RasikLoyalty",
    },
    {
      imageSrc: ProductImageCLM,
      profileImageSrc: ProfileImageCLM,
      subtitle: "Contract Labour Management",
      title: "Panther Nails One App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/OneApp",
    },
  ],

  heading = <></>,
  description = <></>,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",

  roundedHeaderButton,
}) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <Content>
          <Heading>{heading}</Heading>
          <Paragraph>{description}</Paragraph>
          <PrimaryButtonBase
            as="a"
            href={primaryButtonUrl}
            css={buttonRoundedCss}
          >
            {primaryButtonText}
            <Icone src={ProfileImageCLM}/>
            <Icone src={ProfileImageRasikLoyalty}/>
          </PrimaryButtonBase>
          {/* <img src={ProfileImageCLM}/> */}
          {/* <Icone src={ProfileImageCLM}/> */}
          <Features products={products} heading={<></>} description={<></>} />
        </Content>
        
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
