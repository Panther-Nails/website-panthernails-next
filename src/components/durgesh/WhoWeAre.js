import React from "react";
import { Card, Container, Image } from "components/misc/Layouts";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import {
  CardDescription,
  CardHeading,
  Heading,
} from "components/misc/Typography";
import { Subheading } from "components/misc/Headings";
import { PrimaryThemeButton } from "components/misc/Buttons";
import { Routes } from "react-router-dom";
import DurgeshTeams from "components/cards/DurgeshTeams";

export default ({
  WhoWeAreHeading = "~ Who We Are ",
  WhoWeAreHeadingSecond = "We Help To Get Solutions",
  WhoWeAreSubheading = "We are a genial technology company delivering insightful enterprise software that foster your business. We focus on building a company culture capable of delivering superior stakeholder value by helping people to make the most of each moment. Our expertise provides you access to your business at any moment, at work, at home or on the move. The bespoke solutions are designed to serve very specific need of yours. The reporting engine covers detailed minutiae of your business transactions.",
  cardsDataForWhoWeAre = [
    {
      iconImageSrc: "/rocketPngForWhoWeAre.png",
      cardHeading: "First",
      cardDescription: "cardDescription first",
    },
    {
      iconImageSrc: "/lightPngForWhoWeAre.png",
      cardHeading: "Second",
      cardDescription: "cardDescription second",
    },
  ],
  WhoWeAreButtonText = "Our Team",
  WhoWeAreImage = "/WhoWeAreImageWithText.png",
}) => {
  return (
    <>
      <Container tw="lg:columns-2  lg:flex-row gap-0 px-12 ">
        <Container tw="flex flex-col lg:px-12 bg-transparent text-justify">
          <Heading tw="lg:text-xl lg:float-left pt-8 lg:text-left">
            {WhoWeAreHeading}
          </Heading>
          <Heading tw="lg:text-3xl lg:float-left  pt-8 lg:text-left">
            {WhoWeAreHeadingSecond}
          </Heading>
          <Subheading tw=" lg:text-left pt-8 text-black ">
            {WhoWeAreSubheading}
          </Subheading>
        </Container>
        <Container tw=" flex flex-col lg:flex-row gap-3 lg:px-12 py-8 bg-transparent">
          {cardsDataForWhoWeAre.map((card, index) => (
            <Card tw="py-2 ">
              <Container tw="flex sm:flex-col lg:flex-row bg-transparent">
                <Image src={card.iconImageSrc} tw="h-16 w-16"></Image>
                <Container tw="bg-transparent text-left ml-3">
                  <CardHeading>{card.cardHeading}</CardHeading>
                  <CardDescription>{card.cardDescription}</CardDescription>
                </Container>
              </Container>
            </Card>
          ))}
        </Container>
        <Container tw="lg:text-left lg:px-8 bg-transparent">
          <PrimaryThemeButton
            tw=""
            onClick={() => {
              <DurgeshTeams />;
            }}
          >
            {WhoWeAreButtonText}
          </PrimaryThemeButton>
        </Container>
        <Container tw="sm:h-32 lg:h-screen py-12 lg:px-16 bg-transparent">
          <Image src={WhoWeAreImage}></Image>
        </Container>
      </Container>
    </>
  );
};
