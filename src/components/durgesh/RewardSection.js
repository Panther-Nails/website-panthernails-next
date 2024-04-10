import React from "react";
import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Slider from "react-slick";

import {
  Heading,
  Subheading,
  CardDescription,
  CardHeading,
} from "components/misc/Typography";
import {
  CardGrid,
  CardImage,
  Container,
  CardContent,
  // Card,
} from "components/misc/Layouts";
import { PrimaryButton } from "@fluentui/react";
import { PrimaryThemeButton } from "components/misc/Buttons";

// const ModalContainer = tw.div`absolute  rounded-xl shadow-lg p-5 h-full w-screen z-50 backdrop-blur-sm items-center justify-center bg-white`;
// const CloseButton = tw.a` text-teal-500 font-bold  cursor-pointer ml-4 mt-2 underline`;

const Card = styled.div``;

const Image = styled.img``;

export default 
({
  rewardSectionHeading = "Rewards Options",
  rewardSectionDescription = "Description for reward section",
  cardsData = [
    {
      id: 2,
      imageUrl: "/RewardsImages/PhysicalGifts.png",

      heading: "Physical Gifts",
      description:
        "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
    },
    {
      id: 1,
      imageUrl: "/RewardsImages/cashRewards.png",

      heading: "Cash Rewards",
      description:
        "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
    },
    {
      id: 3,
      imageUrl: "/RewardsImages/giftVouchers.png",
      heading: "Gift vouchers",
      description:
        "Enjoy the freedom to select from a wide range of gift vouchers, catering to various interests and preferences. Instant delivery ensures convenience.",
    },
    {
      id: 4,
      imageUrl: "/RewardsImages/freeTrips.png",

      heading: "Free trip",
      description:
        "Embark on unforgettable adventures with our free trip rewards. Explore exciting destinations and create lasting memories, courtesy of our loyalty program.",
    },
  ],
  rewardSectionButtonText = "Learn More",
}) => {
  return (
    <>
      <Container tw=" sm:pb-3 lg:pb-0 pt-8 ">
        <Heading>{rewardSectionHeading}</Heading>
        <Subheading>{rewardSectionDescription}</Subheading>
        <Container tw="lg:h-144 flex flex-wrap lg:py-12 bg-transparent gap-3">
          {cardsData.map((card, index) => (
            <Card tw="h-full w-72 rounded-xl shadow-none bg-transparent">
              <Image
                src={card.imageUrl}
                tw="lg:h-56 w-full mb-3 bg-cover px-6"
              />
              <CardContent tw="lg:h-40 ">
                <CardHeading tw="">{card.heading}</CardHeading>
                <CardDescription tw=" ">{card.description}</CardDescription>
              </CardContent>
              <PrimaryThemeButton tw="text-black p-2 text-sm px-4 ">
                {rewardSectionButtonText}
              </PrimaryThemeButton>
            </Card>
          ))}
        </Container>
      </Container>
    </>
  );
};
