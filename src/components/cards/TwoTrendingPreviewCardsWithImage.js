import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  SectionHeading,
} from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container } from "components/misc/Layouts";

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Column = tw.div``;

const ThreeColumn = styled(Column)((props) => [
  tw`flex  flex-wrap`,
  props.textOnLeft === "true" ? tw`flex-row-reverse ` : tw`flex-row `,
]);

const HeadingColumn = tw(Column)`w-full xl:w-1/3`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingDescription = tw.p` px-2 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

export default ({ index, children, properties }) => {
  return (
    <Container id="Products">
      <Content>
        <ThreeColumn textOnLeft={properties.textOnLeft}>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HighlightedHeading>{properties.heading}</HighlightedHeading>
              <HeadingDescription>{properties.description}</HeadingDescription>
              {properties.linkUrl ? (
                <PrimaryLink href={properties.linkUrl} target="_blank">
                  {properties.linkText} <ArrowRightIcon />
                </PrimaryLink>
              ) : (
                <></>
              )}
            </HeadingInfoContainer>
          </HeadingColumn>
          {ProcessChildComponentsSeparately(children)}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
