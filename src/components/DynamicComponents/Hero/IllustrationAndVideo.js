import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import DynamicNavbar from "../DynamicNavbar";
import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12  lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative  flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative`;

export default ({
  data = {
    heading: "Modern React Templates, Just For You",
    componentProperties: {
      description:
        "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
      primaryButtonText: "Get Started",
      primaryButtonUrl: "#",
      watchVideoButtonText: "Watch Video",
      watchVideoYoutubeUrl: "https://www.youtube.com/embed/_GuOjXYl5ew",
      imageSrc:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <DynamicNavbar />
      <Container>
        <TwoColumn tw="justify-evenly pt-8 lg:pt-3">
          <LeftColumn>
            <Heading>{data.heading}</Heading>
            <Paragraph>{data.componentProperties.description}</Paragraph>
            <Actions>
              <PrimaryButton
                as="a"
                href={data.componentProperties.primaryButtonUrl}
              >
                {data.componentProperties.primaryButtonText}
              </PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">
                  {data.componentProperties.watchVideoButtonText}
                </span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer tw="p-6 lg:p-24 lg:pr-0">
              <img src={data.componentProperties.imageSrc} tw="" alt="Hero" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  );
};
