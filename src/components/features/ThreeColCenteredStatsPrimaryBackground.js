import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components"; //eslint-disable-line
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import { SectionDescription } from "components/misc/Typography";

import { Container } from "components/misc/Layouts";

const BaseContainer = styled(Container)`
  background-image: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : "none"};
  ${tw`my-8 lg:my-10 bg-primary-900 text-gray-100 px-8 2xl:max-w-screen-xl mx-auto`}
`;


const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-lg`;

const StatsContainer = tw.div` mb-4 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-lg mx-auto`;
const StatWrapper = tw.div`flex items-center`; 
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`sm:text-xl md:text-xl lg:text-2xl font-medium text-left`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-black`;
const VerticalLine = tw.div`border-l-2 border-gray-300 h-16 mx-8 hidden sm:block`; 

export default ({ children, properties }) => {
  var stats = JSON.parse(properties.stats || "[]");
  return (
    <BaseContainer>
     
        <HeadingContainer>
          {properties.subheading && <Subheading>{properties.subheading}</Subheading>}
          {properties.heading && (
            <HighlightedHeading primaryColor={tw`text-white`}>
              {properties.heading}
            </HighlightedHeading>
          )}
          {/* {properties.description && <Description>{properties.description}</Description>} */}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatWrapper key={index}>
              <Stat>
                <StatValue>{stat.heading}</StatValue>
                <StatKey>{stat.subHeading}</StatKey>
              </Stat>
              {index !== stats.length - 1 && <VerticalLine />} {/* Vertical line except last stat */}
            </StatWrapper>
          ))}
        </StatsContainer>
  
    </BaseContainer>
  );
};
