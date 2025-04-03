import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";

const Container = styled.div`bg-primary-900 text-gray-100 -mx-8 px-8  text-center md:text-left `;

const PlansContainer = styled.div`
  ${tw`flex flex-wrap justify-between pt-8 `}
`;
const Plan = styled.div`
  ${tw`w-full md:w-1/2  lg:w-1/4 bg-white  gap-4  py-4  flex flex-col items-center text-center md:text-left`}
`;

const PlanFeatures = styled.ul`
  ${tw`   lg:-mx-6 -mx-6 sm:-mx-10  px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  
    .icon {
      ${tw`w-6 h-6 text-primary-500 `}
    }
    
  }
`;
const LinkWrapper= tw.div` mt-6  hover:underline text-center md:text-left`
const Link = tw.a`font-semibold text-[#0067b8]  text-center  text-base`;
const TextContainer = tw.div`w-[90%] m-auto`;

export default ({ properties, children, index, data }) => {
  var siteMapArray = JSON.parse(properties.siteMapJson || "[]");

  return (
    <Container tw="bg-white lg:flex lg:flex-col gap-8 py-12">
      <TextContainer>
        <HighlightedHeading tw="text-center md:text-left text-black text-3xl font-serif pl-8 py-12">
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
                <LinkWrapper
                  className="feature"
                  key={index}
                  tw="text-center md:text-left"
                >
                  <Link href={feature.link} target="_blank" rel="noreferrer">
                    {feature.name}
                  </Link>
                </LinkWrapper>
              ))}
            </PlanFeatures>
          </Plan>
        ))}
      </PlansContainer>
    </Container>
  );
};
