import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.backgroundImageUrl});
      ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen `}
    `}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;
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

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;
const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({ data, properties }) => {
  return (
    <Container backgroundImageUrl={properties.backgroundImageUrl}>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>{properties.notification}</Notification>
            <Heading>
              <span>{properties.heading}</span>
              <br />
            </Heading>
            <PrimaryAction
              onClick={() => {
                window.open(`${properties.buttonUrl}`, "_blank");
              }}
            >
              {properties.buttonText}
            </PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url={properties.videoId}
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
