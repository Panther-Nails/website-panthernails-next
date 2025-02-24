import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container } from "components/misc/Layouts";
import { HighlightedHeading } from "components/misc/Headings.js";

const SingleColumn = tw.div`py-10`;

const HeadingInfoContainer = tw.div`flex flex-col items-center justify-center m-auto w-[90%]`;
const Description = tw.p`mt-4 px-4 lg:px-0 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const Content = tw.div`mt-16`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Description>{properties.subheading}</Description>
        </HeadingInfoContainer>
        <Content>{ProcessChildComponentsSeparately(children)}</Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
