import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const HeadingContainer = tw.div``;
const Heading = tw.h1`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  index,
  children,
  properties,
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "The strength of the team is each individual member. The strength of each member is the team.",
  cards = [
    {
      imageSrc: "https://panthernails.com/img/manoj.png",
      position: "Founder & Director",
      name: "Manoj J. Chandak",
      links: [
        {
          url: "https://www.linkedin.com/in/manojchandak/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://panthernails.com/img/face/rupesh.JPG",
      position: "Co-Founder & Director",
      name: "Rupesh P. Telang",
      links: [
        {
          url: "https://www.linkedin.com/in/rupeshtelang/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://panthernails.com/img/face/Pawan.png",
      position: "Director - Smart Apps Division",
      name: "Pawan C. Bari",
      links: [
        {
          url: "https://www.linkedin.com/in/pawan-bari-438059131/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://panthernails.com/img/face/rupchand.png",
      position: "SME - Customer Success",
      name: "Rupchand Jawale",
      links: [
        {
          url: "https://www.linkedin.com/in/rupchand-jawale-9b840b17/",
          icon: LinkedinIcon,
        },
      ],
    },
  ],
}) => {


  // var links1= [
  //   {
  //     url: "https://www.linkedin.com/in/manojchandak/",
  //     icon: LinkedinIcon,
  //   },
  // ]

  // console.log("links1",JSON.stringify(links1));
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {properties.subHeading && <Subheading>{properties.subHeading}</Subheading>}
          {properties.heading && <Heading>{properties.heading}</Heading>}
          {properties.description && <Description>{properties.description}</Description>}
        </HeadingContainer>

        <Cards>
        {ProcessChildComponentsSeparately(children)}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
