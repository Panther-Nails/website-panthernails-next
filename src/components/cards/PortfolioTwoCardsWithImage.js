import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft === "true"
    ? tw`xl:order-first`
    : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

export default ({ index, children, properties }) => {
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={properties.textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{properties.subHeading}</Subheading>
              <HeadingTitle>{properties.heading}</HeadingTitle>
              <HeadingDescription>{properties.description}</HeadingDescription>
              <PrimaryLink>
                {properties.linkText} <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {ProcessChildComponentsSeparately(children)}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
