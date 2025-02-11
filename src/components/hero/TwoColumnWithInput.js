import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { HighlightedHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const Content = tw.div`mt-24 lg:mt-24 lg:mb-10 flex flex-col sm:items-center lg:items-stretch text-center`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

export default ({ properties, children, index, data }) => {
  return (
    <>
      <Container>
        <Content>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Paragraph>{properties.description}</Paragraph>
        </Content>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
