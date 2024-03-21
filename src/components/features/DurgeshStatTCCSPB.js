import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import tw from "twin.macro";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingForHomePage,
} from "components/misc/Layouts";
import {
  SectionDescription,
  Heading,
  Subheading,
} from "components/misc/Typography";
import { PrimaryButton } from "@fluentui/react";
const Container = tw(
  ContainerBase
)`my-8 lg:my-10  text-gray-100 -mx-8 px-8 bg-statContainerPrimary mr-0 ml-0`;
const HeadingContainer = tw.div``;
// const Heading = tw(
//   SectionHeading
// )`sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold`;
// const Subheading = tw(
//   SubheadingBase
// )`text-gray-100 text-center text-black font-bold`;
// const Description = tw(
//   SectionDescription
// )`text-gray-400 text-center mx-auto max-w-screen-md text-black font-bold`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stats = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium text-black font-bold`;
const StatValue = tw(
  animated.div
)`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black font-bold`;

export default ({
  subheading = "",
  heading = "Over 9000 Projects Completed",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats = [
    {
      key: "Clients",
      value: 2500,
    },
    {
      key: "Revenue",
      value: 100,
    },
    {
      key: "Employees",
      value: 150,
    },
  ],
}) => {
  const [animatedStats, setAnimatedStats] = useState([]);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    setAnimatedStats(stats.map((stat) => ({ ...stat, displayValue: 0 })));
  }, [stats]);

  const totalValue = stats.reduce((acc, stat) => acc + stat.value, 0);
  const animatedProps = useSpring({
    displayValue: inView
      ? animatedStats.reduce((acc, stat) => acc + stat.value, 0)
      : 0,
    from: { displayValue: 0 },
    config: { duration: 2000 },
  });

  return (
    <Container ref={ref}>
      {/* <PrimaryButton>pricing</PrimaryButton> */}
      {/* Attach the ref to the Container */}
      {/* <ContentWithPaddingForHomePage> */}
      <HeadingContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Subheading>{description}</Subheading>}
      </HeadingContainer>
      <StatsContainer>
        {animatedStats.map((stat, index) => (
          <Stats key={index}>
            <StatValue>
              {animatedProps.displayValue.interpolate((val) =>
                Math.round((val / totalValue) * stat.value)
              )}
            </StatValue>
            <StatKey>{stat.key}</StatKey>
          </Stats>
        ))}
      </StatsContainer>
      {/* </ContentWithPaddingForHomePage> */}
    </Container>
  );
};
