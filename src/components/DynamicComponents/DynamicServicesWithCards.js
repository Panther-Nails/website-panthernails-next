import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import { getButtonByType } from "components/DynamicControls/Controls";
import {
  Container,
  CardGrid,
  CardContent,
  CardImage,
} from "components/misc/Layouts";
import {
  CardDescription,
  CardHeading,
  Heading,
} from "components/misc/Typography";
import { Subheading } from "components/misc/Headings";
import { Card } from "components/misc/Layouts";

export default ({
  data = {
    heading: "Rasik Loyalty Services",
    componentStyle: {
      buttonType: "Primary", //Primary, Custom, default, Secondary, Gradient, Tailwind,
      componentBgImageUrl: "",
      cardstyles: {
        cardBgImageUrl: "",
        rotate: "5",
      },
    },
    componentProperties: {
      buttonText: "Explore All",
      subheading: "Rasik Loyalty Services Subheading",
      buttonUrl: "https://www.uxpin.com/studio/blog/react-design-patterns/",
      cards: [
        {
          imageUrl: "logo192.png",
          heading: "Physical Gifts",
          rotate: "5",
          description:
            "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
          imageUrlbgCard:
            "https://images.pexels.com/photos/18013815/pexels-photo-18013815/free-photo-of-little-cat-by-tracks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          imageUrl: "logo192.png",
          heading: "Cash Rewards",
          description:
            "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",

          imageUrlbgCard:
            "https://images.pexels.com/photos/20780447/pexels-photo-20780447/free-photo-of-a-woman-taking-a-photo-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          imageUrl: "logo192.png",
          heading: "Gift vouchers",
          rotate: "5",
          description:
            "Enjoy the freedom to select from a wide range of gift vouchers, catering to various interests and preferences. Instant delivery ensures convenience.",
        },
        {
          imageUrl: "logo192.png",
          heading: "Free trip",
          description:
            "Embark on unforgettable adventures with our free trip rewards. Explore exciting destinations and create lasting memories, courtesy of our loyalty program.",
        },
      ],
    },
  },
}) => {
  let ButtonFromJson = getButtonByType(data.componentStyle.buttonType);

  return (
    <>
      <Container
        tw="sm:block lg:flex justify-evenly py-16 px-12 lg:mx-12 lg:my-6 rounded-xl"
        backgroundImageUrl={data.componentStyle.componentBgImageUrl}
      >
        {/* //flex-col for control the heading and cards */}
        <Container tw="flex flex-col gap-8 bg-transparent">
          <Heading tw="px-2 font-roslindale">{data.heading}</Heading>
          <Subheading>{data.componentProperties.subheading}</Subheading>
        </Container>
        <CardGrid
          css={[
            tw`flex lg:w-2/3  py-8  border-l-0 lg:origin-bottom px-4 flex-row bg-transparent`,
          ]}
        >
          {data.componentProperties.cards.map((card, index) => (
            <Card
              css={[
                tw`h-64 w-72 overflow-y-hidden shadow-xl rounded-lg px-0 lg:-rotate-5`,
              ]}
              backgroundImageUrl={data.componentStyle.cardstyles.cardBgImageUrl}
            >
              <CardContent tw="flex flex-col ">
                <Container tw="flex flex-row gap-3 bg-transparent justify-start">
                  <CardImage
                    src={card.imageUrl}
                    alt="Card Image"
                    tw="h-8 w-8"
                  />
                  <CardHeading tw="underline decoration-teal-300 underline-offset-[4px] mb-2">
                    {card.heading}
                  </CardHeading>
                </Container>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
          <Container tw="bg-transparent">
            {data.componentProperties.buttonText && (
              <ButtonFromJson
                href={data.componentProperties.buttonUrl}
                target="blank"
              >
                {data.componentProperties.buttonText}
              </ButtonFromJson>
            )}
          </Container>
        </CardGrid>
      </Container>
    </>
  );
};
