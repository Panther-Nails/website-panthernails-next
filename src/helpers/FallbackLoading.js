import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.backgroundImageUrl});
      ${tw`relative  bg-center bg-cover  h-screen w-full`}
    `}
`;

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

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100  font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 
text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100
 focus:shadow-outline`;

export default () => {
  return (
    <Container tw="bg-white relative sticky p-12">
      <HeroContainer tw="rounded-lg ">
        <TwoColumn>
          <LeftColumn>
            <Notification tw="h-8 w-48 bg-[#e3e3e3] rounded-sm animate-pulse"></Notification>

            <Heading tw="bg-[#e3e3e3] border border-[#63797F] rounded p-3 animate-pulse">
              <span tw="text-[#63797F]">Loading...</span>
              <br />
            </Heading>
            <PrimaryAction tw="bg-[#e3e3e3] w-24"></PrimaryAction>
          </LeftColumn>
          <RightColumn tw="bg-[#cccccc] h-72 w-screen lg:w-144 sm:m-12 lg:m-0 rounded-lg animate-pulse"></RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
