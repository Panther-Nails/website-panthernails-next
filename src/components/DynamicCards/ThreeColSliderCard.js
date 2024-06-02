import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";

const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl `,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 mx-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div` text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;

const KnowMoreLink = styled.a`
  ${tw`mt-4 sm:mt-0  flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playText {
    ${tw`text-lg `}
  }
`;
export default ({ index, properties, children }) => {
  return (
    <Card key={index}>
      <CardImage imageSrc={properties.imageSrc} />
      <TextInfo>
        <TitleReviewContainer>
          <Title>{properties.title}</Title>
          {properties.rating && (
            <RatingsInfo>
              <StarIcon />
              <Rating>{properties.rating}</Rating>
            </RatingsInfo>
          )}
        </TitleReviewContainer>
        <SecondaryInfoContainer>
          <IconWithText>
            <Text>{properties.locationText}</Text>
            {properties.knowMoreLinkUrl}
          </IconWithText>
          <IconWithText>
            <IconContainer>
              <PriceIcon />
            </IconContainer>
            <Text>{properties.pricingText}</Text>
          </IconWithText>
        </SecondaryInfoContainer>
        <Description>
          {properties.description}
          <KnowMoreLink href={properties.linkUrl}>
            <span className="playText">{properties.linkText}</span>
          </KnowMoreLink>
        </Description>
      </TextInfo>
      <PrimaryButton>Book a Meeting</PrimaryButton>
    </Card>
  );
};
