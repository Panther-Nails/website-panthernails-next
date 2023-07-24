import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Clients from "components/features/FourColWithTopImage.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Products from "components/products/TwoColumnWithImageAndProfilePictureReview.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import CTA from "components/cta/GetStarted";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import ProfileImageRasikLoyalty from "images/Loyalty.png";
import ProfileImageCLM from "images/CLM.png";

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProductImageCLM from "images/ProductCLM.png";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const productList = [
  {
    imageSrc: ProductImageRasikLoyalty,
    profileImageSrc: ProfileImageRasikLoyalty,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    customerName: "Rasik Loyalty",
    customerTitle: "Customer Loyalty Platform",
    redirectUrl: "/",
  },
  {
    imageSrc: ProductImageCLM,
    profileImageSrc: ProfileImageCLM,
    quote:
      "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    customerName: "One App",
    customerTitle: "Contract Labour Management",
    redirectUrl: "/",
  },
];

const serviceCards = [
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
];

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-primary-500`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Astute Solutions for <HighlightedText>your business</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Book a Meeting"
        primaryButtonUrl="https://calendly.com/panthernails/influencer-engagement-platform-demo"
        watchVideoButtonText="Watch it live"
        watchVideoYoutubeUrl=""
        links={[
          { title: "About Us", href: "/AboutUs" },
          { title: "Rasik Loyalty Platform", href: "/RasikLoyalty" },
          { title: "Contract Labour Management", href: "/CLM" },
          { title: "Blog", href: "/blog" },
          { title: "Contact Us", href: "/contactus" },
        ]}
      />

        <Clients />

      <Products
        subheading="Products"
        heading={
          <>
            Our Robust <HighlightedText>Products</HighlightedText>
          </>
        }
        description="Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business."
        textOnLeft={false}
        products={productList}
      />

      <FeatureStats
        subheading="Technology Innovations That Transform Your Business"
        heading="Served 3,000,000+ End costumers"
        description="We focus on building a company culture capable of delivering superior stakeholder value by helping people to make the most of each moment."
        stats={[
          {
            key: "Locations",
            value: "2",
          },
          {
            key: "Clients",
            value: "35+",
          },
          {
            key: "Hard Workers",
            value: "50+",
          },
        ]}
      />

      <Features
        subheading={<Subheading>Keeping customers on top</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        description="a genial technology company delivering insightful enterprise software that foster your business."
        cards={serviceCards}
      />

      <CTA
        text="Give us an opportunity for us to present our skills and expertise."
        primaryLinkText="Get Started"
        primaryLinkUrl="http://panthernails.com"
        secondaryLinkText="Contact Us"
        secondaryLinkUrl="http://google.com"
        pushDownFooter={true}
      />

      <Footer />
    </AnimationRevealPage>
  );
};
