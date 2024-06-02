import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "../misc/Layouts.js";

const ImageText = styled.span`
  ${tw` -my-16 text-center text-5xl font-black `}

  background-image: url("https://images.unsplash.com/photo-1569448634236-16398247262e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText = styled.span`
  ${tw` -my-16 text-center text-5xl font-black `}

  background-image: linear-gradient(to right, #00000000, #1e90ffff);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ({ text = "Our Expertise", textOnLeft = true }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <ImageText css={tw`absolute`}> {text} </ImageText>
      <StyledText css={tw`absolute`}> {text} </StyledText>
    </Container>
  );
};
