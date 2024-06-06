import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container } from "components/misc/Layouts.js";
import Menu from "./Menu";

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col md:flex-row items-center lg:flex-row flex-wrap lg:justify-center mx-auto w-full h-screen`}
`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between w-screen  items-center`;
const Column = tw.div` max-w-md mx-auto md:max-w-none md:mx-0 `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-1/5 mt-16 md:mt-0 `,

  props.menuOnLeft === "true" ? tw` md:order-first` : tw`  md:order-last`,
]);

export default ({ menuOnLeft, Left, Right }) => {
  return (
    <Container>
      <TwoColumn tw="">
        <TextColumn menuOnLeft={menuOnLeft} tw="bg-primary-100">
          {Left}
        </TextColumn>
        <ThreeColumnContainer tw="bg-red-300">{Right}</ThreeColumnContainer>
      </TwoColumn>
    </Container>
  );
};
