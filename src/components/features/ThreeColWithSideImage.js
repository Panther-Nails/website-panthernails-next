import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container } from "../misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-6`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Description = tw(SectionDescription)`w-5/6 text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {properties.subHeading && (
          <Subheading>{properties.subHeading}</Subheading>
        )}
        <HighlightedHeading>{properties.heading}</HighlightedHeading>
        {properties.description && (
          <Description>{properties.description}</Description>
        )}
        <VerticalSpacer />
        {ProcessChildComponentsSeparately(children)}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
