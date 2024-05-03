import React, { Suspense } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import {
  ImportDynamicComponent,
  ProcessChildComponents,
  ProcessChildComponentsSeparately,
  getChildComponentName,
} from "DynamicPage";
import AlternateTextImageCard from "components/DynamicCards/AlternateTextImageCard";
import { getProperties } from "services/JsonService";

const Container = tw.div`relative`;

const SingleColumn = tw.div`py-10`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

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

const Content = tw.div`mt-16`;

export default ({ CPJSON, HPJSON, data, children, properties }) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{properties.heading}</HeadingTitle>
          <HeadingDescription>{properties.subheading}</HeadingDescription>
        </HeadingInfoContainer>
        <Content>
          {/* {children.map((child, index) => {
            var childProperties = getProperties(child);

            return (
              <AlternateTextImageCard
                properties={childProperties}
                children={child.Children}
                index={index}
              />
            );
          })} */}
          {ProcessChildComponentsSeparately(children)}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
