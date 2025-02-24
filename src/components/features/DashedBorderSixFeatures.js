import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { HighlightedHeading } from "components/misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container } from "components/misc/Layouts";

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
const TextContainer = tw.div`w-[90%]`;

export default ({ properties, children, index, data }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        <TextContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
        </TextContainer>
        {ProcessChildComponentsSeparately(children)}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
