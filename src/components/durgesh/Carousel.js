import React from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
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
} from "components/misc/Layouts";
import { PrimaryButton } from "@fluentui/react";
import { PrimaryThemeButton } from "components/misc/Buttons";
const Card = styled.div``;
const Image = styled.img``;
const DivTag = styled.div``;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default ({
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <DivTag tw="h-screen bg-pink-200 flex items-center justify-center">
        <div tw="h-40 w-72 ml-8 ">
          <Slider {...settings} tw=" bg-blue-400 mr-8">
            {cardsData.map((card, index) => (
              <Card tw=" rounded-xl">
                <Image
                  src={card.imageUrl}
                  tw="lg:h-56 w-full mb-3 bg-cover px-6"
                />
                <CardContent tw="lg:h-40 ">
                  <CardHeading tw="">{card.heading}</CardHeading>
                  <CardDescription tw=" ">{card.description}</CardDescription>
                </CardContent>
                <PrimaryThemeButton tw="text-black p-2 text-sm px-4">
                  {rewardSectionButtonText}
                </PrimaryThemeButton>
              </Card>
            ))}
          </Slider>
        </div>
      </DivTag>
    </>
  );
};
