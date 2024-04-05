import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import { Container, Image } from "components/misc/Layouts";
import { Heading, Subheading } from "components/misc/Typography";

export default ({
  ourStoryHeading = "Our Story",
  ourStorySubheading = "With lots of unique blocks, you can easily build a page without coding in Figma.",
  ourStoryImage = "./SiteIntro-Twitter.png",
  ourStoryDetailsDescription = "We are a genial technology company delivering insightful enterprise software that foster your business. We focus on building a company culture capable of delivering superior stakeholder value by helping people to make the most of each moment. Our expertise provides you access to your business at any moment, at work, at home or on the move. The bespoke solutions are designed to serve very specific need of yours. The reporting engine covers detailed minutiae of your business transactions.",
  ourStoryDetailsHeading = "Describe",
}) => {
  return (
    <>
      <Container tw="">
        <Container>
          <Heading>{ourStoryHeading}</Heading>
          <Subheading>{ourStorySubheading}</Subheading>
        </Container>
        <Container tw="p-12 pb-0">
          <Image src={ourStoryImage} />
        </Container>
        {/* <Container tw="columns-2 flex lg:flex-row items-center justify-center lg:gap-24 p-12 mx-12 mt-0">
          <Heading tw="float-left float-left w-1/2 ">
            {ourStoryDetailsHeading}
          </Heading>
          <Subheading tw="w-1/2 text-left">
            {ourStoryDetailsDescription}
          </Subheading>
        </Container> */}
      </Container>
    </>
  );
};
