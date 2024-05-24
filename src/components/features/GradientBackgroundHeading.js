import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Column = tw.div`w-full max-w-md mx-auto lg:py-20 flex items-center justify-center`;
const ImageText = styled.span`
  ${tw`absolute text-left text-5xl font-black `}

  background-image: url("https://images.unsplash.com/photo-1633469924738-52101af51d87?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText1 = styled.span`
  ${tw` absolute text-left text-5xl font-black `}

  background-image: linear-gradient(to right, #00000000, #1e90ffff);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ({
  data,
  children,
  properties,
  heading = "Testing heading",
}) => {
  var black = "bg-black";
  return (
    <Column>
      <ImageText> {properties.heading} </ImageText>
      <StyledText1> {properties.heading} </StyledText1>
    </Column>
  );
};
