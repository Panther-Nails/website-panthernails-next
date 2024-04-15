import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { Container, Image, ImageColumn } from "components/misc/Layouts";
import { HeadingTreact } from "components/misc/Typography";
import { getButtonByType } from "components/DynamicControls/Controls";

export default ({
  data = {
    heading: "Work on big ideas, Without the busywrk",
    componentStyle: {
      buttonType: "Primary", //Primary, Custom, default, Secondary, Gradient, Tailwind,
      componentBgImageUrl: "/",
    },

    componentProperties: {
      buttonText: "Explore All",
      subheading: "Rasik Loyalty Services Subheading",
      buttonUrl: "https://www.uxpin.com/studio/blog/react-design-patterns/",
      imageSrc: "./HeroMockup",
    },
  },
}) => {
  let ButtonFromJson = getButtonByType(data.componentStyle.buttonType);

  return (
    <>
      <Container
        css={tw`lg:h-screen flex items-center pt-16  flex-col lg:pt-24 overflow-hidden`}
      >
        <Container tw="px-12 gap-6 flex flex-col items-center bg-transparent">
          <HeadingTreact css={tw``}>{data.heading}</HeadingTreact>
          {data.componentProperties.buttonText && (
            <ButtonFromJson
              href={data.componentProperties.buttonUrl}
              target="blank"
            >
              {data.componentProperties.buttonText}
            </ButtonFromJson>
          )}
        </Container>
        <Container tw="bg-transparent mt-12 w-auto bg-cover ">
          <Image src="./HeroMockupImage.png" tw="lg:h-128 lg:w-128 bg-cover" />
        </Container>
      </Container>
    </>
  );
};
