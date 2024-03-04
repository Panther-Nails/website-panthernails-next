import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import CTA from "components/cta/GetStarted";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

import tw from "twin.macro";

import PhoneImageRasikLoyalty from "images/RASIK.png";

import ProfileImageRasikLoyalty from "images/Loyalty.png";
import ProfileImageCLM from "images/CLM.png";

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProductImageCLM from "images/ProductCLM.png";
import { Body } from "components/misc/Layouts";
import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";
import ThreePlans from "components/pricing/ThreePlans";

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

export default ({
  products = [
    {
      imageSrc: ProductImageRasikLoyalty,
      profileImageSrc: ProfileImageRasikLoyalty,
      subtitle: "Customer Loyalty Platform",
      title: "Rasik Loyalty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/RasikLoyalty",
    },
    // {
    //   imageSrc: ProductImageCLM,
    //   profileImageSrc: ProfileImageCLM,
    //   subtitle: "Contract Labour Management",
    //   title: "Panther Nails One App",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   url: "/OneApp"
    // },
  ],
}) => {
  return (
    <Body>
      <Hero
        //  bgColor={tw`bg-rasik-300`}
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

      <AnimationRevealPage>
        <Features products={products} heading={<></>} description={<> </>} />

        <DashedBorderSixFeatures
          headTitle="Rasik "
          bgColor={tw`bg-transparent`}
          textCss={tw`text-rasik-200`}
        />

        <CTA
          backgroundColor={tw`bg-rasik-200`}
          containerBg={tw`bg-black`}
          text={
            <>
              Build relationships with influencers to make your{" "}
              <HighlightedText>Business grow</HighlightedText>
            </>
          }
          primaryLinkText="Schedule a meeting"
          primaryLinkUrl="http://panthernails.com"
          secondaryLinkText="Call us"
          secondaryLinkUrl="https://wa.me/918087144244"
          pushDownFooter={false}
        />
        <ThreePlans
        heading='Redeemption opations'
        />

        <Testimonial
          Heading="Our Esteemed Customers"
          textCss={tw`text-rasik-200`}
        />

        <FAQ textCss={tw`text-rasik-200`} />

        <Footer bgColor={tw`bg-rasik-200`} />
      </AnimationRevealPage>
    </Body>
  );
};