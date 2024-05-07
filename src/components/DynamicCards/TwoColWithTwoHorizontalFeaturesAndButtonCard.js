import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

export default ({ index, children, properties }) => {
  return (
    <>
      <Feature key={index}>
        <FeatureHeadingContainer>
          <FeatureIconContainer
            iconFilled={properties.iconFilled}
            iconRoundedFull={properties.iconRoundedFull}
            css={properties.iconContainerCss}
          ></FeatureIconContainer>
          <FeatureHeading>{properties.title}</FeatureHeading>
        </FeatureHeadingContainer>
        <FeatureDescription>{properties.description}</FeatureDescription>
      </Feature>
    </>
  );
};
