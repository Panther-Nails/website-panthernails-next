import React from "react";

// import MainFeature1 from "components/features/TwoColWithButton.js";
import Header from "../components/headers/light.js";
import tw, { styled } from "twin.macro";
import Cards from "../components/cards/GauravThreeColSlider copy.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Hero from "components/hero/GauravTwoColumnWithInput copy.js";
// import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import Aboutus, {
  Icons,
} from "../components/features/GauravTwoColSingleFeatureWithStats copy.js";

import {
  SectionHeading,
  HighlightedText,
  Subheading,
} from "components/misc/Headings.js";

import ProductFeatures from "../components/faqs/SimpleWithSideImage.js";
import PlatforWeProvide from "../components/features/GauravTwoColWithButton copy.js";
import RevordSystem from "../components/testimonials/GauravThreeColumnWithProfileImage copy.js";


import Features1 from "components/features/ThreeColWithSideImage.js";

import Testimonial from "../components/testimonials/TwoColumnWithImage.js";

import Footer from "../components/footers/FiveColumnWithInputForm.js";

import Blog from "../components/blogs/GridWithFeaturedPost.js";

import ParellexanimG from "../pages/ParellexanimG.js";
import ParellexServices from "../pages/ParellexServices.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import { Containerbgcolor,NewContainer } from "components/misc/Layouts.js";

import Gauravhero from "../components/hero/Gauravhero.js";

import Product from "../components/pricing/GauravThreePlans .js";

export const Hovereffect = tw.div`hover:(scale-150 duration-500 shadow-2xl)`;

export default ({
  bgcolor="sitebgcolor",
  serviceCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "Cloud Infrastructure with a safe & secured credentials enabled with SSO.",
    },
    {
      imageSrc: SupportIconImage,
      description:
        "Prudence customer success team that can converse in major indian languages.",
      title: "Support",
    },
    {
      imageSrc: CustomizeIconImage,
      description:
        "A Rapid & Stable Development Based on Panther Nails After8 Framework makes it easy. ",
      title: "Customizable",
    },
    {
      imageSrc: ReliableIconImage,
      description:
        "The application provides uninterrupted access to the system and 99% up time.",
      title: "Reliable",
    },
    {
      imageSrc: FastIconImage,
      description:
        "Robust & Scalable Cloud Infrastructure where you get ready to grow with your business.",
      title: "Fast",
    },
    {
      imageSrc: SimpleIconImage,
      description:
        "Features that are designed to serve indeed requirement of the users",
      title: "Easy",
    },
  ],
  Faqs = [
    {
      question: "Gaurav",
      answer:
        "The loyalty points are rewarded on scanning the unique QR associated with coupon codes.",
    },
  ],
}) => {
  return (
    <>
      <Containerbgcolor Containerbgcolor={bgcolor}>
        {/* <AnimationRevealPage> */}
        {/* <Hero>
        
       </Hero> */}

        <Header />
        <Gauravhero />

        <ParellexanimG />
        <Aboutus heading="My Heading" />

        <Product></Product>
        <ParellexServices></ParellexServices>

        {/* <Cards /> */}
        <Features1
          // subheading={<Subheading>Keeping customers on top</Subheading>}
          heading={
            <>
              We have Amazing <HighlightedText>Service.</HighlightedText>
            </>
          }
          description="a genial technology company delivering insightful enterprise software that foster your business."
          cards={serviceCards}
        />
        <ProductFeatures></ProductFeatures>
        <PlatforWeProvide />
        <RevordSystem></RevordSystem>

        {/* <Testimonial /> */}
        <Blog />
        <NewContainer NCwidth={"full"} NCbg={"bgred"}>hellooooo</NewContainer>
        <Footer />
        {/* <ThreeColWithSideImage/> */}

        {/* </AnimationRevealPage> */}

        
      </Containerbgcolor>
    </>
  );
};
