import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";

const Container = styled.div`bg-primary-900 text-gray-100 -mx-8 px-8 text-left`;

const PlansContainer = styled.div`
  ${tw`flex flex-wrap justify-between lg:justify-start lg:items-start`}
`;
const Plan = styled.div`
  ${tw` max-w-sm bg-white rounded-lg  px-6 sm:px-10 lg:px-6   mx-3 flex flex-col text-left`}
`;

const PlanFeatures = styled.ul`
  ${tw` flex-1  lg:-mx-6 -mx-6 sm:-mx-10  px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0 hover:underline `}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-[#0067b8] tracking-wide`}
    }
  }
`;

const TextContainer = tw.div`w-[90%] m-auto`;

export default ({ properties, children, index, data }) => {
  var siteMapArray = JSON.parse(properties.siteMapJson || "[]");

  return (
    <Container tw="bg-white lg:flex lg:flex-col gap-8 py-12">
      <TextContainer>
        <HighlightedHeading tw="text-left text-black text-3xl font-serif pl-8 py-12">
          {properties.heading}
        </HighlightedHeading>
      </TextContainer>
      <PlansContainer tw="md:flex items-center justify-center">
        {siteMapArray.map((plan, index) => (
          <Plan key={index} featured={plan.featured}>
            <PlanFeatures>
              <span className="nameAndFeaturedContainer">
                <span tw="lg:text-xl xl:text-xl font-bold uppercase tracking-wider text-black">
                  {plan.name}
                </span>
              </span>
              {plan.features.map((feature, index) => (
                <li className="feature" key={index}>
                  <a
                    href={feature.link}
                    className="text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {feature.name}
                  </a>
                </li>
              ))}
            </PlanFeatures>
          </Plan>
        ))}
      </PlansContainer>
    </Container>
  );
};
