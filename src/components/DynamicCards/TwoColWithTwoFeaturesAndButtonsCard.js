import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

export default ({ index, properties, children }) => {
  return (
    <>
      <Feature key={index}>
        {properties.icon && (
          <FeatureIconContainer>{<properties.icon />}</FeatureIconContainer>
        )}
        <FeatureText>
          <FeatureHeading>{properties.title}</FeatureHeading>
          <FeatureDescription>{properties.description}</FeatureDescription>
        </FeatureText>
      </Feature>
    </>
  );
};
