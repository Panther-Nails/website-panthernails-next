import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ProcessChildComponents } from "DynamicPage";

const Container = tw.div`relative overflow-hidden`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ HPJSON, CPJSON, children, data, properties }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {properties.subheading && (
          <Subheading>{properties.subheading}</Subheading>
        )}
        <Heading>{properties.heading}</Heading>
        {properties.description && (
          <Description>{properties.description}</Description>
        )}
        <VerticalSpacer />
        {ProcessChildComponents(children)}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
