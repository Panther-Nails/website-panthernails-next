import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, Image } from "components/misc/Layouts";
import { Heading } from "components/misc/Typography";
import { PrimaryThemeButton } from "components/misc/Buttons";
import { PrimaryButton } from "@fluentui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default ({
  posterHeading = "Experience seamless HR management with One App: Smarter, faster, better!",
  productButtonText = "Contact us",
  productImageSrc = "",
  // productImageMockupSrc = ""
  leftFirst = true,
  productButtonTextSecond = "Explore our App",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Container
        tw="bg-productPosterPrimary sm:columns-1 lg:columns-2 lg:h-screen sm:flex-row px-8"
        // ref={ref}
      >
        {leftFirst ? (
          <>
            <Container tw="flex-col sm:h-1/2 lg:h-screen bg-transparent flex p-8  gap-12 flex items-center">
              <Image src={productImageSrc} tw="h-32 w-32 "></Image>
              <Heading tw="text-2xl md:text-xl lg:text-4xl  text-productPosterOnPrimary text-left lg:ml-24 ">
                {posterHeading}
              </Heading>
              <Container tw="bg-transparent flex-col lg:inline w-full flex items-center justify-evenly">
                <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5  px-8 rounded-2xl">
                  {productButtonText}
                </PrimaryThemeButton>
                <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5 px-8 rounded-2xl ">
                  {productButtonTextSecond}
                </PrimaryThemeButton>
              </Container>
            </Container>
            <Container tw="lg:h-screen bg-transparent   lg:pt-20  lg:block">
              <Image
                src="/smacoProductSectionImage3.png"
                alt="Mockup Image here"
                tw="lg:h-144 lg:w-150 bg-cover "
              ></Image>
            </Container>
          </>
        ) : (
          <>
            <Container tw="lg:h-screen bg-transparent   lg:pt-20  lg:block">
              <Image
                src="/raskikAppPosterForProductSection.png"
                alt="Mockup Image here"
                tw="lg:h-144 lg:w-150 bg-cover lg:ml-24 "
              ></Image>
            </Container>
            <Container tw="flex-col sm:h-1/2 lg:h-screen bg-transparent flex p-8  gap-12 flex items-center">
              <Image src={productImageSrc} tw="h-32 w-32 "></Image>
              <Heading tw="text-2xl md:text-xl lg:text-4xl  text-productPosterOnPrimary text-left lg:ml-24 ">
                {posterHeading}
              </Heading>
              <Container tw="bg-transparent flex-col lg:inline w-full flex items-center justify-evenly">
                <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5  px-8 rounded-2xl">
                  {productButtonText}
                </PrimaryThemeButton>
                <PrimaryThemeButton tw="text-xl  py-4 px-0 lg:mt-5 px-8 rounded-2xl ">
                  {productButtonTextSecond}
                </PrimaryThemeButton>
              </Container>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};
