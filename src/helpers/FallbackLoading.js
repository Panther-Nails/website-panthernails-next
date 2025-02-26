import React from "react";
import tw from "twin.macro";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line

const Container = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.backgroundImageUrl});
      ${tw`relative bg-center bg-cover h-screen w-full`}
    `}
`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const LoadingAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const Skeleton = styled.div`
  ${tw`relative bg-gray-300 rounded-sm`}
  background-image: linear-gradient(90deg, #e0e0e0, #f0f0f0, #e0e0e0);
  background-size: 200px 100%;
  animation: ${LoadingAnimation} 1.5s infinite linear;
`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw(Skeleton)`my-4 h-8 w-48 bg-gray-300`;

const PrimaryAction = styled(Skeleton)`
  ${tw`h-12 w-24 mt-10`}
`;

export default () => {
  return (
    <Container tw="bg-white relative sticky p-12">
      <HeroContainer tw="rounded-lg">
        <TwoColumn>
          <LeftColumn>
            <Notification />
            <Heading tw="bg-gray-300 border border-gray-400 rounded p-3">
              <Skeleton>
                <span tw="text-gray-400">Loading...</span>
                <br />
              </Skeleton>
            </Heading>
            <PrimaryAction />
          </LeftColumn>
          <RightColumn tw="bg-gray-300 h-72 w-screen lg:w-144 sm:m-12 lg:m-0 rounded-lg"></RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
