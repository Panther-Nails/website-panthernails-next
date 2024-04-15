import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "components/headers/light.js";

import { Container } from "components/misc/Layouts";
import DynamicNavbar from "../DynamicNavbar";
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

// const Container = styled.div`
//   ${}
//   background-image: url("https://oneapp.panthernails.com/img/hero-bg.jpg");
// `;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg text-gray-100 text-center leading-loose`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default ({
  data = {
    heading: "Events for Your Business!",
    componentProperties: {
      description: "description",
      bgImageSrc: "https://oneapp.panthernails.com/img/hero-bg.jpg",
    },
  },
}) => {
  return (
    <Container
      css={tw`relative  bg-center bg-cover h-screen min-h-144`}
      backgroundImageUrl={data.componentProperties.bgImageSrc}
    >
      <DynamicNavbar />
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>{data.heading}</Heading>
          <Paragraph>{data.componentProperties.description}</Paragraph>
        </Content>
      </HeroContainer>
    </Container>
  );
};
