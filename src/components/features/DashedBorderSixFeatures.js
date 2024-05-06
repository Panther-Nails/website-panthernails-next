import React, { Children } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import { ProcessChildComponents } from "DynamicPage";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-center`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ properties, children }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          {properties.heading}{" "}
          <span tw="text-primary-500">
            {properties.highlighHeading && properties.highlighHeading}
          </span>
        </Heading>
        {ProcessChildComponents(children)}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
