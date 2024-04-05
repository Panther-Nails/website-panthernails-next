import React from "react";
import tw from "twin.macro";
import { css } from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput";
import RasikAppPoster from "components/durgesh/ProductPosterFromFigma";
import { HighlightedText } from "components/misc/Headings";
import RewardSection from "components/durgesh/RewardSection";
import Carousel from "components/durgesh/Carousel";
import LoyaltyServices from "../components/durgesh/LoyaltyServices";
import { Container, StickyContainer } from "components/misc/Layouts";
export default ({}) => {
  return (
    <>
      <AnimationRevealPage>
        <Hero
          headingTextColor={tw`text-rasik-200`}
          heading={
            <>
              Rasik <HighlightedText>Loyalty Platform!</HighlightedText>
            </>
          }
          description={
            <>
              {" "}
              We focus on building products that are capable of delivering
              superior stakeholder value by helping people to make the most of
              each moment.{" "}
            </>
          }
        />

        <RasikAppPoster
          posterHeading="Single App For All Business Automation Needs"
          productButtonText="Contact us"
          productImageSrc="/rasikAppLogoForProductSection.png"
          productButtonTextSecond="Explore App"
          productSrcWithMockup="/raskikAppPosterForProductSection.png"
          leftFirst={true}
        />
        <LoyaltyServices />

        {/* <Carousel /> */}

        <RewardSection />
      </AnimationRevealPage>
      ;
    </>
  );
};
