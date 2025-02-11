import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${(props) =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
      background: rgb(85,60,154);
      background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
      background: rgb(76,81,191);
      background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

export default ({ children, properties, index }) => {
  var childCard = JSON.parse(properties.features || "[]");

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(
        115deg,
        rgba(56, 178, 172, 1) 0%,
        rgba(129, 230, 217, 1) 100%
      );
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(
        115deg,
        #6415ff,
        #7431ff,
        #8244ff,
        #8e56ff,
        #9a66ff
      );
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(
        115deg,
        rgba(245, 101, 101, 1) 0%,
        rgba(254, 178, 178, 1) 100%
      );
    `,
  ];
  return (
    <>
      <Plan key={index}>
        <PlanHeader>
          <span className="name">{properties.name}</span>
          <span className="price">{properties.price}</span>
          <span className="duration">{properties.duration}</span>
        </PlanHeader>
        <PlanFeatures>
          <span className="feature mainFeature">{properties.mainFeature}</span>
          {childCard.map((feature, index) => (
            <span key={index} className="feature">
              {feature}
            </span>
          ))}
        </PlanFeatures>
        <PlanAction>
          <BuyNowButton
            css={!properties.featured && highlightGradientsCss[index]}
          >
            {properties.buttonText}
          </BuyNowButton>
        </PlanAction>
      </Plan>
    </>
  );
};
