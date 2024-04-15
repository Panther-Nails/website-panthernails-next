import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, Image } from "components/misc/Layouts";
import { Heading } from "components/misc/Typography";

import { getButtonByType } from "components/DynamicControls/Controls";

export default ({
  data = {
    heading:
      "Experience seamless HR management with One App: Smarter, faster, better!",
    componentStyle: {
      buttonType: "Primary", //Primary, ThemeButton, default, Secondary, GradientDuotone
      componentBgImageUrl: "",
      cardstyles: {
        cardBgImageUrl: "",
        rotate: "5",
      },
    },
    componentProperties: {
      buttonTextFirst: "Contact us",
      buttonTextFirstUrl: "/",
      productImageSrc: "",
      buttonTextSecond: "Explore our App",
      buttonTextFirstUrl: "/",
      productSrcWithMockup: "/smacoProductSectionImage3.png",
      textOn: "right",
    },
  },
}) => {
  let ButtonFromJson = getButtonByType(data.componentStyle.buttonType);

  return (
    <>
      <Container tw=" sm:columns-1 lg:columns-2 sm:flex-row px-8 ">
        <Container tw="flex-col sm:h-1/2 lg:h-screen bg-transparent flex pt-24  gap-12 flex items-center">
          <Image
            src={data.componentProperties.productImageSrc}
            tw="h-24 w-24 "
          ></Image>
          <Heading tw="text-2xl md:text-xl lg:text-4xl  text-productPosterOnPrimary text-left lg:ml-24 ">
            {data.heading}
          </Heading>
          <Container tw="bg-transparent flex-col lg:inline w-full flex items-center justify-evenly">
            <Container tw="flex lg:flex-row gap-12 bg-transparent">
              <Container tw="bg-transparent">
                {data.componentProperties.buttonTextFirst && (
                  <ButtonFromJson
                    href={data.componentProperties.buttonUrl}
                    target="blank"
                  >
                    {data.componentProperties.buttonTextFirst}
                  </ButtonFromJson>
                )}
              </Container>
              <Container tw="bg-transparent">
                {data.componentProperties.buttonTextSecond && (
                  <ButtonFromJson
                    href={data.componentProperties.buttonUrl}
                    target="blank"
                  >
                    {data.componentProperties.buttonTextSecond}
                  </ButtonFromJson>
                )}
              </Container>
            </Container>
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
};
