import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import CTA from "components/cta/GetStarted";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

import tw from "twin.macro";

import PhoneImageRasikLoyalty from "images/RASIK.png";

import ProfileImageRasikLoyalty from "images/Loyalty.png";
import ProfileImageCLM from "images/CLM.png";

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProductImageCLM from "images/ProductCLM.png";

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const HighlightedText = tw.span`text-primary-500`;

export default ({}) => {
  return (
    <>
      <Hero
        headingTextColor={tw`text-blue-700`}
        heading={
          <>
            One App{" "}
            <HighlightedText>Contract Labour Management!</HighlightedText>
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
        // bgColor={tw`bg-blue-500`}
      />
    </>
  );
};
