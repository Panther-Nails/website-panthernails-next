import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Subheading as SubheadingBase,
  HighlightedHeading,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center w-[90%] m-auto`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

export default ({ children, properties, index, data }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <HighlightedHeading>{properties.heading}</HighlightedHeading>

          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeaderContainer>
        <PlansContainer>
          {ProcessChildComponentsSeparately(children)}

          <DecoratorBlob />
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
