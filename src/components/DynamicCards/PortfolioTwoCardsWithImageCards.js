import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto px-4 lg:px-0`;
const Card = styled.div((props) => [
  ` background-color:${props.bgColor};`,
  tw`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`,
]);
// const CardImage = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`h-80 bg-cover bg-center rounded `,
// ]);

const CardImage = tw.img`h-80 bg-cover bg-center rounded w-full `;

const CardText = tw.div`mt-4`;
const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold text-center`;

const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({ index, children, properties }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const _handleNavigation = (buttonUrl) => {
    console.log("buttonUrl", buttonUrl);
    navigate(buttonUrl); // Navigate to the given URL
  };
  console.log(properties.imageSrc);

  return (
    <CardColumn key={index} tw="bg-white">
      <Card tw="">
        <CardImage src={properties.imageSrc} />
        <CardText>
          <CardHeader>
            <CardCompany>{properties.company}</CardCompany>
            <CardType>{properties.type}</CardType>
          </CardHeader>
          <CardTitle>{properties.title}</CardTitle>
          <CardAction onClick={() => _handleNavigation(properties.buttonUrl)}>
            {properties.buttonText}
          </CardAction>
        </CardText>
      </Card>
    </CardColumn>
  );
};
