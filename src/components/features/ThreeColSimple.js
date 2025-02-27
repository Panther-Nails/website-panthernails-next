import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import {
  Container,
  ContentWithPaddingXl as ContentWithPadding,
} from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const ContentWithPaddingXl = tw(ContentWithPadding)`py-6`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto `;
const Content = tw.div`w-[100%] flex flex-col items-center `;
const TextContainer = tw.div`max-w-screen-lg flex flex-col items-center justify-center`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Content>
          <TextContainer>
            {properties.subheading && (
              <Subheading>{properties.subheading}</Subheading>
            )}
            {properties.heading && (
              <HighlightedHeading color="text-primary-500">
                {properties.heading}
              </HighlightedHeading>
            )}
            {properties.description && (
              <Description>{properties.description}</Description>
            )}
          </TextContainer>
          <ThreeColumnContainer>
            {ProcessChildComponentsSeparately(children)}
          </ThreeColumnContainer>
        </Content>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
