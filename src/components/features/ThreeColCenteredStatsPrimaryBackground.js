import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default ({ children, properties }) => {
  const localStats = () => {
    var stats = JSON.parse(properties.stats);
    return stats.map((stat, index) => {
      return (
        <Stat key={index}>
          <StatValue>{stat.heading}</StatValue>
          <StatKey>{stat.subHeading}</StatKey>
        </Stat>
      );
    });
  };
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <HighlightedHeading primaryColor={tw`text-white`}>
            {properties.heading}
          </HighlightedHeading>
          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeadingContainer>
        <StatsContainer>
          {properties.stats
            ? localStats()
            : ProcessChildComponentsSeparately(children)}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
