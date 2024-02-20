import React from "react";
import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import GetStarted from "components/cta/GetStarted";
import { PrimaryButton } from "components/misc/Buttons";
import PopupForCards from "components/durgesh/PopupForCards";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:pb-24 pt-0 `}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full text-white text-5xl font-bold`;
const Description = tw(
  SectionDescription
)`w-full text-center text-white text-lg font-semibold`;

const VerticalSpacer = tw.div`mt-10 w-full  `;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm `}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8 bg-teal-400 rounded-lg`}

  animation: cardAnimation 1s ease-in-out;

  @keyframes cardAnimation {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  &:hover {
    animation: cardHoverAnimation 0.9s ease-in-out forwards;
  }
  @keyframes cardHoverAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .imageContainer {
    ${tw`border-black text-center rounded-full p-5 flex-shrink-0 bg-gray-900`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2 `}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none text-lg font-bold `}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose text-black text-base font-medium`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-50 transform translate-x-32 translate-y-48 bg-gray-900`}
`;
//changes
const PrimaryButtonForClosePopup = styled.button`text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold`;
const Popup = styled.div`absolute translateY-500`;
// const ContainerForButton2 = tw.div` flex justify-center mb-16 relative`;

export default ({
  cards = null,
  heading = "Company Capability",
  subheading = "Features",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "HRM",
      description:
        "Employee Expence | Visitor Management | Time Office | Leaves & Overtime Control | Payroll | Policy Control",
    },
    {
      imageSrc: SupportIconImage,
      title: "Visitor,Travel & Expense Mgmt",
      description:
        "Tranvel Plan | Work Plan | Advance Money | Expense Deviations | In-Land & Overseas Travel | Approval Matrix",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Loyalty & Promotions",
      description:
        "Online Order Tracking System | Promotions & Loyalty Program | Incentive Based Loyalty Program",
    },
    // { imageSrc: CustomizeIconImage, title: "Sales, Incentives & Promotions", description:"" },
    // { imageSrc: FastIconImage, title: "Goods Traceability" },
    // { imageSrc: SimpleIconImage, title: "Accounting & Valuations" },
  ];

  if (!cards) cards = defaultCards;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (i) => {
    setSelectedCard(i);
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <ThreeColumnContainer>
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          <VerticalSpacer />
          {cards.map((card, i) => (
            <Column key={i}>
              <Card key={i} onClick={() => handleCardClick(i)}>
                <span className="imageContainer">
                  <img src={card.imageSrc || defaultCardImage} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card.title || "Fully Secure"}</span>
                  <p className="description">
                    {card.description ||
                      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                  </p>
                </span>
              </Card>
            </Column>
          ))}
          <PopupForCards
            isOpen={isOpen}
            onClose={handleClosePopup}
            selectedCard={selectedCard}
          >
            {/* { selectedCard == 1? <GetStarted /> : null } */}
          </PopupForCards>
        </ThreeColumnContainer>
        {/* <DecoratorBlob /> */}
      </Container>
    </>
  );
};
