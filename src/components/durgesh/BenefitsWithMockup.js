import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { CardDescription, CardHeading } from "components/misc/Typography";

const Container = tw.div`flex h-full w-screen bg-teal-300 justify-evenly`;

const CardGrid = tw.div`flex flex-wrap md:flex-row  lg:w-1/2  items-center justify-center `;

const Card = styled.div`
  ${tw`bg-gray-100 p-4 pb-0 rounded-4xl shadow-lg h-64 w-72 items-center justify-center flex-row cursor-pointer pt-8 mr-10 border-r-teal-300 border-2`}//h-80 w-72
`;

const CardImage = tw.img`w-24 h-24 bg-cover rounded-full  ml-20 `;
const CardContent = tw.div`ml-6 `; //mb-8 pb-0

const Mockup = tw.div`relative rounded-5xl shadow-xl w-72 h-144 mt-4 mb-4 `;
const Screen = tw.div`absolute inset-0 bg-white overflow-hidden rounded-5xl  bg-transparent`;
const Camera = tw.div`absolute top-0 left-1/2 transform translate-x-1/2 mt-2 ml-5 w-4 h-4 bg-gray-300 rounded-full border-2 border-black`;
const Speaker = tw.div`absolute top-0 right-1/2 transform translate-x-1/2 mt-3 w-12 h-2 bg-gray-300 rounded-full border-2 border-black`;
const HomeButton = tw.div`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-8 h-8 bg-gray-300 rounded-full border-2 border-black`;
const Image = tw.img`bg-cover h-full w-full`;

export default ({
  cardsData = [
    {
      id: 1,
      imageUrl:
        "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433",
      heading: "Cash Rewards",
      description:
        "Earn cash rewards effortlessly through our loyalty program. Redeemable through various channels including bank accounts, wallets, UPIs, and cash cards.",
      hoverIndexUrl:
        "https://th.bing.com/th/id/OIP.WY3T4CB1EfeAP5HJIXZ6-wAAAA?pid=ImgDet&w=111&h=212&c=7",
    },
    //for cash rewards description:"Earn and redeem cash rewards effortlessly through our B2B loyalty program. With seamless disbursement options including bank accounts, wallets, UPIs, and cash cards, rewards are just a click away. Join now for a hassle-free experience",

    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th/id/OIP.skGPbYgW7-HfIGVptTMvGAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      heading: "Physical Gifts",
      description:
        "Panther Nails helps you offer a wide range of relevant products as gifts to your partners, all with quick delivery services.",
      hoverIndexUrl:
        "https://th.bing.com/th?id=OIP.2v45ciu_Sg9oeBL-7cdrawHaOn&w=177&h=349&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 3,
      imageUrl:
        "https://th.bing.com/th/id/OIP.skGPbYgW7-HfIGVptTMvGAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      heading: "Gift vouchers",
      description:
        "Enjoy the freedom to select from a wide range of gift vouchers, catering to various interests and preferences. Instant delivery ensures convenience.",
      hoverIndexUrl:
        "https://th.bing.com/th?id=OIP.uMFgED_67GbDSj__9Eti1AAAAA&w=185&h=336&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFashcNgpAy2WyLkO3dP4HDa_livNCalgUkw&usqp=CAU",
      heading: "Free trip",
      description:
        "Embark on unforgettable adventures with our free trip rewards. Explore exciting destinations and create lasting memories, courtesy of our loyalty program.",
      hoverIndexUrl:
        "https://th.bing.com/th/id/OIP.wVb90AOR14b2FYz35VTK_gAAAA?pid=ImgDet&w=107&h=212&c=7",
    },
  ],

  heading = "Heading",
  subheading = "Subheading",
}) => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const handleCardHover = (index) => {
    setHoverIndex(index);
  };

  return (
    <>
      <Container>
        <Mockup>
          <Screen>
            <Image src={cardsData[hoverIndex].hoverIndexUrl} />
          </Screen>
          {/* <Camera />
          <Speaker />
          <HomeButton /> */}
        </Mockup>
        <CardGrid>
          {cardsData.map((card, index) => (
            <Card onMouseEnter={() => handleCardHover(index)}>
              {/* <CardImage src={card.imageUrl} alt="Card Image" /> */}
              <CardContent>
                <CardHeading tw="underline decoration-teal-300 underline-offset-[4px] mb-2">
                  {card.heading}
                </CardHeading>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </>
  );
};
