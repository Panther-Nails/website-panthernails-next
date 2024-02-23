import React, { useState } from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Clients from "components/features/FourColWithTopImage.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Products from "components/products/TwoColumnWithImageAndProfilePictureReview.js";
import Footer from "components/footers/SimpleFiveColumn";
import CTA from "components/cta/GetStarted";

import chefIconImageSrc from "images/demo/software-development-operations-system-concept.jpg";
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
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide";
import { Body, HighlightedTextSpan } from "components/misc/Layouts";
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
    title: "HRM",
    description:
      "Employee Expence | Visitor Management | Time Office | Leaves & Overtime Control | Payroll | Policy Control.",
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
  const HighlightedText = tw.span`text-primary-500 text-black`;

  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;

  //changes from durgesh
  // const ContainerForButton = tw.div` flex justify-center mb-16 relative bg-transparent z-50 fixed`;
  // const PrimaryButtonForDurgeshPage = tw.a`px-5 py-3 font-bold bg-black rounded bg-pink-500 text-gray-100 hocus:bg-pink-500 shadow-gray-700  hocus:text-gray-900 focus:shadow-inner focus:outline-none transition duration-300 shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  animate-bounce hover:animate-none sticky`;
  const imageCss = tw`rounded-4xl`;
  return (
    <>
      <Body>
        <Hero
          heading={
            <>
              Elevating Engagement, Empowering Growth for{" "}
              <HighlightedText>your business</HighlightedText>
            </>
          }
          description=""
          imageSrc="https://www.xrmroi.com.au/wp-content/uploads/2023/05/img-2.png"
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
          // bgColor={tw`bg-purple-400`}
        />
        <br></br>
        <br></br>
        {/* <ContainerForButton>
        <PrimaryButtonForDurgeshPage href="https://calendly.com/panthernails/influencer-engagement-platform-demo">
          Book a Demo
        </PrimaryButtonForDurgeshPage>
      </ContainerForButton> */}
        <AnimationRevealPage>
          <ScrollingAnimationUpSide y={200}>
            <Products
              // subheading="Products"
              heading={
                <>
                  Our Robust <HighlightedText>Products</HighlightedText>
                </>
              }
              description="Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business."
              textOnLeft={false}
              products={productList}
            />
          </ScrollingAnimationUpSide>
          <br></br>
          <br></br>
          <br></br>

          <ScrollingAnimationUpSide y={200}>
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
          </ScrollingAnimationUpSide>

          {/* To Show our Client Section or Component uncommnet this */}
          {/* <ScrollingAnimationUpSide y={200}>
          <Clients />
        </ScrollingAnimationUpSide> */}
          <ScrollingAnimationUpSide y={100}>
            <CTA
              // text="Let's Develop Your Next Great App! And Make your business grow."
              backgroundColor={tw`bg-purple-500`}
              textCss={tw`text-black font-bold`}
              primaryLinkText="Get Started"
              primaryLinkUrl="http://panthernails.com"
              secondaryLinkText="Contact Us"
              secondaryLinkUrl="http://google.com"
              pushDownFooter={true}
            />
          </ScrollingAnimationUpSide>
          <ScrollingAnimationUpSide y={200}>
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
          </ScrollingAnimationUpSide>
          <Footer />
        </AnimationRevealPage>
      </Body>
    </>
  );
};
