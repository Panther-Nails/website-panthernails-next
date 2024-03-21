import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { Container, Image } from "components/misc/Layouts";
import { Heading } from "components/misc/Typography";
import { PrimaryThemeButton } from "components/misc/Buttons";
// import { productImageMockupSrc } from "";

export default ({
  posterHeading = "Experience seamless HR management with One App: Smarter, faster, better!",
  productButtonText = "Contact us",
  productImageSrc = "https://play-lh.googleusercontent.com/IkkzDJ59I3NHCAiLjVlgSjSkrDURP3hIGbbXN2M24QM_H7f2rZ4hsOUpsrl6pTjqYj21=w240-h480-rw",
  productImageMockupSrc = "H:\Development\GitRepo\website-panthernails-next\src\images\demo\MockupForProductSection.png"
  
}) => {
  return (
    <Container tw="sm:h-1/2 bg-black columns-2 h-screen sm:flex-row">
      <Container tw=" h-screen bg-transparent flex p-8 sm:flex-row lg:flex-col ">
        <Image src={productImageSrc} tw="h-24 w-24 rounded-full"></Image>
        <Heading tw="text-sm md:text-xl lg:text-2xl xl:text-3xl relative text-white">
          {posterHeading}
        </Heading>
        <PrimaryThemeButton tw="relative animate-bounce mt-5">
          {productButtonText}
        </PrimaryThemeButton>
      </Container>
      <Container tw="h-screen bg-transparent">
        <Image
          src={productImageMockupSrc}
          alt="Mockup Image here"
        ></Image>
      </Container>
    </Container>
  );
};
