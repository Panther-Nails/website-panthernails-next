import React, { Suspense } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import {
  ImportDynamicComponent,
  ProcessChildComponents,
  getChildComponentName,
} from "DynamicPage";

const Container = tw.div`relative`;

const SingleColumn = tw.div`py-10`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;


const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-lg leading-loose`;

const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20 mb-2`;

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

export default ({ CPJSON, HPJSON, data, children,finalJson }) => {
  console.log("finalJson",finalJson);
  console.log("CPJSON", CPJSON);
  console.log("childrendata", children);

  // var overriedData = Object.keys(HPJSON).length > 0 ? HPJSON : CPJSON;
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{finalJson.heading}</HeadingTitle>
          <HeadingDescription>{finalJson.subheading}</HeadingDescription>
        </HeadingInfoContainer>

        <Content>
      {children.map((child, index) => {
        
        var hpJson=JSON.parse(child.HPJSON)
        return (
          <Card key={index} reversed={index % 2 === 1}>
            <Image imageSrc={hpJson.imageSrc} />
            <Details>
              <CustomerInfo>
                <CustomerProfilePicture
                  src={hpJson.profileImageSrc}
                ></CustomerProfilePicture>
              </CustomerInfo>
              <Title>{hpJson.title}</Title>
              <Description>{hpJson.description}</Description>
            </Details>
          </Card>
        );
      })}
    </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
