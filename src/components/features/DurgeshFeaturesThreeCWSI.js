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
import AnimatedHeading from "components/durgesh/AnimatedHeading";
import { Container } from "components/misc/Layouts";
import { Heading, Subheading } from "components/misc/Typography.js";
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:pb-24 pt-0 `}
`;

// const Subheading = tw(SubheadingBase)`mb-4`;
// const Heading = tw(
//   SectionHeading
// )`w-full text-black text-5xl font-bold text-black`;
// const Description = tw(
//   SectionDescription
// )`w-full text-center text-black text-lg font-semibold`;

const VerticalSpacer = tw.div`mt-10 w-full  `;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm mb-5`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8 bg-primary-300 rounded-lg shadow-xl shadow-gray-400  `} //hover:bg-blue-400

  // animation: cardAnimation 1s ease-in-out;

  // @keyframes cardAnimation {
  //   0% {
  //     transform: translateY(0px);
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: translateY(0);
  //     opacity: 1;
  //   }
  // }
  // &:hover {
  //   animation: cardHoverAnimation 0.9s ease-in-out forwards;
  // }
  // @keyframes cardHoverAnimation {
  //   0% {
  //     transform: scale(1);
  //   }
  //   50% {
  //     transform: scale(1.05);
  //   }
  //   100% {
  //     transform: scale(1);
  //   }
  // }

  .imageContainer {
    ${tw`border-black text-center rounded-full p-5 flex-shrink-0 bg-gray-900 bg-gray-300 `}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2 `}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none text-lg font-bold text-black`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose text-black text-base font-medium text-black`}
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
  subheading = "We understand the importance of building strong relationships with your customers and keeping them engaged. That's why we offer a range of innovative solutions to help you drive loyalty and boost sales.",
  defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Human Resource Management",
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
  ],
}) => {
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
          <AnimatedHeading>
            <Heading>{heading}</Heading>
          </AnimatedHeading>
          {subheading && <Subheading>{subheading}</Subheading>}
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
                    {card.subheading ||
                      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                  </p>
                </span>
              </Card>
            </Column>
          ))}

          {/* For card click popup uncomment PopupForCards component below */}
          {/* <PopupForCards
            isOpen={isOpen}
            onClose={handleClosePopup}
            selectedCard={selectedCard}
          >
          </PopupForCards> */}
          {/* { selectedCard == 1? <GetStarted /> : null } */}
        </ThreeColumnContainer>
        {/* <DecoratorBlob /> */}
      </Container>
    </>
  );
};
