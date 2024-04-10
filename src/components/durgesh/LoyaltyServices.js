import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import { Parallax } from "react-parallax";

import {
  Container,
  Image,
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
// import { Card } from "@material-tailwind/react";
import { Card } from "components/misc/Layouts";
export default ({
  productServicesHeading = "Rasik Loyalty Services",
  productServicesSubheading = "Rasik Loyalty Services Subheading",
  productServicesCardData = [
    {
      imageUrl: "logo192.png",
      heading: "Physical Gifts",
      description:
        "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
    },
    {
      imageUrl: "logo192.png",
      heading: "Cash Rewards",
      description:
        "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
    },
    {
      imageUrl: "logo192.png",
      heading: "Gift vouchers",
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
}) => {
  return (
    <>
      <Container tw="sm:block lg:flex justify-evenly py-16 lg:px-12">
        {/* NCpadding={padding1}
        NCflex={justifyevenly}
        NCblock={block}
        NCpaddingLG={padding12}
        NCbgColor={green} */}

        <Container tw="flex flex-col gap-8 bg-transparent">
          <Heading tw="px-2 font-roslindale">{productServicesHeading}</Heading>
          <Subheading>{productServicesSubheading}</Subheading>
        </Container>
        <CardGrid tw="flex lg:w-2/3 flex-wrap py-8  border-l-0 lg:origin-bottom ">
          {productServicesCardData.map((card, index) => (
            <Card tw="h-64 w-72 rounded-5xl overflow-y-hidden shadow-xl rounded-lg px-0  lg:-rotate-5">
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
        </CardGrid>
      </Container>
      {/* <Parallax
        bgImage="/SiteIntro-Twitter.png"
        strength={-500}
        horizontal={500}
        tranlateX={(-100, 100)}
      >
        <div style={{ width: "500px", height: "300px" }}>
          <div>Horizontal Parallax Content</div>
        </div>
      </Parallax> */}
    </>
  );
};
