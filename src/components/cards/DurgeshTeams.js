import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  ContentWithPaddingXl,
  Card,
  Container,
} from "components/misc/Layouts.js";
import { Subheading } from "components/misc/Headings";
import { Heading, SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import CustomStyle from "components/durgesh/CustomStyle/CustomStyle";
import { PrimaryButton } from "@fluentui/react";
// import { Card } from "@fluentui/react-components";

// const HeadingContainer = tw.div``
// const Heading = tw(SectionHeading)``
// const Subheading = tw(SubheadingBase)`text-center mb-3`
// const Description = tw(SectionDescription)`mx-auto text-center`
const Cards = tw.div`flex sm:flex-shrink sm:overflow-x-auto flex-row justify-center sm:max-w-2xl lg:max-w-6xl mx-auto`;

// const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`
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
  return (
    <Container tw="lg:h-screen">
      <ContentWithPaddingXl>
        <Container>
          {subheading && <Subheading>{subheading}</Subheading>}
          {/* {heading && <CustomStyle.Heading>{heading}</CustomStyle.Heading>} */}
          {heading && <Heading>{heading}</Heading>}
          {description && (
            <SectionDescription>{description}</SectionDescription>
          )}
        </Container>

        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
