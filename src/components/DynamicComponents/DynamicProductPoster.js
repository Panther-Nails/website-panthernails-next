import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, Image } from "components/misc/Layouts";
import { Heading } from "components/misc/Typography";
import { PrimaryThemeButton } from "components/misc/Buttons";
import { PrimaryButton } from "@fluentui/react";

export default ({
  data = {
    heading:
      "Experience seamless HR management with One App: Smarter, faster, better!",
    componentProperties: {
      buttonTextFirst: "Contact us",
      productImageSrc: "",
      buttonTextSecond: "Explore our App",
      productSrcWithMockup: "/smacoProductSectionImage3.png",
      textOn: "right",
    },
  },
}) => (
  <>
    <Container tw="bg-productPosterPrimary sm:columns-1 lg:columns-2 sm:flex-row px-8 ">
      <Container tw="flex-col sm:h-1/2 lg:h-screen bg-transparent flex pt-24  gap-12 flex items-center">
        <Image
          src={data.componentProperties.productImageSrc}
          tw="h-24 w-24 "
        ></Image>
        <Heading tw="text-2xl md:text-xl lg:text-4xl  text-productPosterOnPrimary text-left lg:ml-24 ">
          {data.heading}
        </Heading>
        <Container tw="bg-transparent flex-col lg:inline w-full flex items-center justify-evenly">
          <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5  px-8 rounded-2xl">
            {data.componentProperties.buttonTextFirst}
          </PrimaryThemeButton>
          <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5 px-8 rounded-2xl ">
            {data.componentProperties.buttonTextSecond}
          </PrimaryThemeButton>
        </Container>
      </Container>

      <Container
        tw="lg:h-screen bg-transparent   lg:pt-20  lg:block"
        textOn={data.componentProperties.textOn}
      >
        <Image
          src={data.componentProperties.productSrcWithMockup}
          alt="Mockup Image here"
          tw="lg:h-144 lg:w-150 bg-cover "
        ></Image>
      </Container>
    </Container>
  </>
);
