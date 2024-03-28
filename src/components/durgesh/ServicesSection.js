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
  Card,
  CardGrid,
  CardImage,
  Container,
  CardContent,
} from "components/misc/Layouts";

const CardSlider = styled(Slider)`
  ${tw`flex flex-row  w-screen justify-center text-left lg:flex-col`}
  .slick-track {
    ${tw`flex gap-6  `}
  }
  .slick-slide {
    ${tw` `}
  }
  .slick-list {
    ${tw``}
  }
`;

// const ModalContainer = tw.div`absolute  rounded-xl shadow-lg p-5 h-full w-screen z-50 backdrop-blur-sm items-center justify-center bg-white`;
// const CloseButton = tw.a` text-teal-500 font-bold  cursor-pointer ml-4 mt-2 underline`;

export default ({
  heading = "Main Heading",
  subheading = "Subheading goes here",
  cardsData = [
    {
      id: 1,
      imageUrl: "/RewardsImages/cashRewards.png",

      heading: "Cash Rewards",
      description:
        "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
    },

    {
      id: 2,
      imageUrl: "/RewardsImages/PhysicalGifts.png",

      heading: "Physical Gifts",
      description:
        "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
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
  isOnClick = false,
  bgColor = tw``,
  buttonText = "Learn More",
  roundedSize = "0",
  containerCss = null,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //slider from react
  var cardShowSize = null;
  if (cardsData.length >= 4) {
    cardShowSize = 4;
  } else {
    cardShowSize = cardShowSize;
  }

  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 4,
      //   },
      // },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container css={containerCss} tw="h-screen lg:w-screen sm:py-12">
      {/* {isModalOpen && (
        <ModalContainer>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          <SimpleWithSideImage />
        </ModalContainer>
      )} */}

      <Heading tw="sm:pt-5">{heading}</Heading>
      <Subheading tw="pt-6 sm:text-justify lg:text-center px-12">
        {subheading}
      </Subheading>
      <CardSlider ref={setSliderRef} {...sliderSettings} tw="pt-8 lg:pt-3">
        {/* //ref={setSliderRef} {...sliderSettings} */}
        {cardsData.map((card, index) => (
          <Card rounded={roundedSize}>
            <Container tw="overflow-hidden bg-transparent pt-0 w-full flex lg:items-center lg:justify-center">
              <CardImage src={card.imageUrl} alt="Card Image" />
            </Container>
            <CardContent>
              <CardHeading>{card.heading}</CardHeading>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
            {/* {isOnClick == true ? (
              <CloseButton
                onClick={isOnClick == true ? () => handleClick() : null}
              >
                {buttonText}
              </CloseButton>
            ) : null} */}
          </Card>
        ))}
      </CardSlider>
    </Container>
  );
};
