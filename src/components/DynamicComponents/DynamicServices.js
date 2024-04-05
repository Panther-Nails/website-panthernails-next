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

export default ({
  data = {
    heading: "Main Heading",
    subheading: "Subheading goes here",
    cards: [
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyWAr2i3-RgOJB2p0xQNVEab0z104ofxaUw&usqp=CAU",
        heading: null,
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yWZ12WGQpryzMpoPnGtpnJjFvKl8nlHR5g&usqp=CAU",
        heading: "Mobile Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyWAr2i3-RgOJB2p0xQNVEab0z104ofxaUw&usqp=CAU",
        heading: "Web Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yWZ12WGQpryzMpoPnGtpnJjFvKl8nlHR5g&usqp=CAU",
        heading: "Mobile Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yWZ12WGQpryzMpoPnGtpnJjFvKl8nlHR5g&usqp=CAU",
        heading: "Mobile Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyWAr2i3-RgOJB2p0xQNVEab0z104ofxaUw&usqp=CAU",
        heading: "Web Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yWZ12WGQpryzMpoPnGtpnJjFvKl8nlHR5g&usqp=CAU",
        heading: "Mobile Application",
        description:
          "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      },
    ],
  },
}) => {
  var cardShowSize = null;
  // if (cardsDataForPantherNailsServices.length >= 4) {
  //   cardShowSize = 4;
  // } else {
  //   cardShowSize = cardShowSize;
  // }

  const sliderSettings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img src={`${cardsData[i].imageUrl}`} tw="" />
    //     </a>
    //   );
    // },

    dots: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(data);
  return (
    <Container>
      {data.heading && <Heading tw="sm:pt-5">{data.heading}</Heading>}
      <Subheading tw="pt-6 sm:text-justify lg:text-center px-12">
        {data.subheading}
      </Subheading>
      <CardSlider {...sliderSettings} tw="pt-8 lg:pt-3 ">
        {data.cards.map((card, index) => (
          <Card>
            <Container tw="overflow-hidden bg-transparent pt-0 w-full flex lg:items-center lg:justify-center">
              <CardImage src={card.imageUrl} alt="Card Image" />
            </Container>
            <CardContent>
              <CardHeading>{card.heading}</CardHeading>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardSlider>
    </Container>
  );
};
