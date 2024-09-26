import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";

const Column = tw.div`xl:mr-12 xl:last:mr-0`;

const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;
const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({ index, children, properties }) => {



  return (
    <CardColumn key={index}>
      <Card>
        <CardImage imageSrc={properties.imageSrc} />
        <CardText>
          <CardHeader>
            <CardCompany>{properties.company}</CardCompany>
            <CardType>{properties.type}</CardType>
          </CardHeader>
          <CardTitle>{properties.title}</CardTitle>
          <CardMeta>
            <CardMetaFeature>
              <TimeIcon /> {properties.durationText}
            </CardMetaFeature>
            <CardMetaFeature>
              <LocationIcon /> {properties.locationText}
            </CardMetaFeature>
          </CardMeta>
          <CardAction>{properties.cardLinkText}</CardAction>
        </CardText>
      </Card>
    </CardColumn>
  );
};
