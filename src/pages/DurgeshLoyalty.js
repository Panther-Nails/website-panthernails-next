import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput";
import RasikAppPoster from "components/durgesh/ProductPosterFromFigma";
import { HighlightedText } from "components/misc/Headings";
import RewardSection from "components/durgesh/RewardSection";
import Carousel from "components/durgesh/Carousel";
import { Container } from "components/misc/Layouts";
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
        {/* <Container className="w-screen flex justify-center"> */}
        
        <Carousel />
        {/* </Container> */}
        <RewardSection />
      </AnimationRevealPage>
      ;
    </>
  );
};
