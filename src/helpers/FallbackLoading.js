import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../components/headers/light";
import ResponsiveVideoEmbed from "./ResponsiveVideoEmbed";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.backgroundImageUrl});
      ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen `}
    `}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-15`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100  font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({}) => {
  return (
    <Container tw="bg-[#0D0D0D] relative sticky p-12">
      <HeroContainer tw="rounded-lg border border-[#63797F]">
        <TwoColumn>
          <LeftColumn>
            <Notification tw="h-8 w-48 bg-[#252525] rounded-sm"></Notification>

            <Heading tw="bg-[#0d0d0d] border border-[#63797F] rounded p-3">
              <span tw="text-[#63797F]">Just a Second...</span>
              <br />
            </Heading>
            <PrimaryAction tw="bg-[#252525]"></PrimaryAction>
          </LeftColumn>
          <RightColumn tw="bg-[#252525] h-72 w-144 rounded-lg"></RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
