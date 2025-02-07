import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";

const Column = tw.div``;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0 `;
const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs flex  flex-col items-center`;
const CardImage = styled.img((props) => [
  tw`h-80 w-full bg-cover bg-center rounded  `,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-sm`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;
const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full text-center mt-8 `;
export default ({ index, children, properties }) => {
  return (
    <CardColumn key={index}>
      <Card>
        <CardImage src={properties.imageSrc} />
        <CardText>
          <CardHeader>
            <CardType>{properties.type}</CardType>
            <CardPrice>
              <CardPriceAmount>{properties.pricingText} </CardPriceAmount>
              <span>{properties.extraText}</span>
            </CardPrice>
          </CardHeader>
          <CardTitle>{properties.title}</CardTitle>
          <FeatureDescription>{properties.description}</FeatureDescription>
          <CardMeta>
            <CardMetaFeature>
              {properties.trendingText ? <TrendingIcon /> : <></>}
              <>{properties.trendingText}</>
            </CardMetaFeature>
            <CardMetaFeature>
              {properties.durationText ? <TimeIcon /> : <></>}
              <>{properties.durationText}</>
            </CardMetaFeature>
            <CardMetaFeature>
              {properties.locationText ? <LocationIcon /> : <></>}
              <>{properties.locationText}</>
            </CardMetaFeature>
          </CardMeta>
        </CardText>
        <CardAction as="a" href={properties.buttonUrl}>
          {properties.buttonText}
        </CardAction>
      </Card>
    </CardColumn>
  );
};
