import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import {
  SectionDescription,
  CardHeading,
  CardDescription,
  Heading,
} from "components/misc/Typography";

import {
  CardGrid,
  Card,
  CardImage,
  Container,
  CardContent,
} from "components/misc/Layouts";

// const CardImage = tw.img`w-24 h-24  bg-cover rounded-full ml-20 shadow-lg shadow-gray-700 hover:scale-105 `;

export default ({
  heading = "Benefits",
  subheading = "Subheading goes here",
  roundedSize = "4",
  backgroundColor = "light green",
  roundedImage = "roundedImage",
  cardsData = [
    {
      id: 1,
      imageUrl:
        "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433",
      heading: "Cash Rewards",
      description:
        "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
    },
    //for cash rewards description:"Earn and redeem cash rewards effortlessly through our B2B loyalty program. With seamless disbursement options including bank accounts, wallets, UPIs, and cash cards, rewards are just a click away. Join now for a hassle-free experience",

    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th/id/OIP.skGPbYgW7-HfIGVptTMvGAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      heading: "Physical Gifts",
      description:
        "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
    },
    {
      id: 3,
      imageUrl:
        "https://th.bing.com/th/id/OIP.skGPbYgW7-HfIGVptTMvGAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      heading: "Gift vouchers",
      description:
        "Enjoy the freedom to select from a wide range of gift vouchers, catering to various interests and preferences. Instant delivery ensures convenience.",
    },
    {
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFashcNgpAy2WyLkO3dP4HDa_livNCalgUkw&usqp=CAU",
      heading: "Free trip",
      description:
        "Embark on unforgettable adventures with our free trip rewards. Explore exciting destinations and create lasting memories, courtesy of our loyalty program.",
    },
  ],
}) => {
  return (
    <>
      <Container tw=" lg:w-screen ">
        <Heading>{heading}</Heading>
        <SectionDescription>{subheading}</SectionDescription>
        <CardGrid>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              backgroundColor={backgroundColor}
              rounded={roundedSize}
            >
              <CardImage
                src={card.imageUrl}
                alt="Card Image"
                roundedImage={roundedImage}
              />

              <CardContent>
                <CardHeading>{card.heading}</CardHeading>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </>
  );
};
