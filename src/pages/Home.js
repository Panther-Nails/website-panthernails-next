import React, { useState, useEffect, useRef } from "react";
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
import ScrollingAnimationUpSideYaxis from "components/durgesh/ScrollYaxis";
import AnimatedHeading from "components/durgesh/AnimatedHeading";
import { PrimaryButton } from "components/misc/Buttons";
import GetStarted from "components/cta/GetStarted";
import Login from "./Login";

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
    title: "Human Resource Management",
    description:
      "Employee Expence | Visitor Management | Time Office | Leaves & Overtime Control | Payroll | Policy Control.",
  },
  {
    imageSrc: SupportIconImage,
    description:
      "Prudence customer success team that can converse in major indian languages.",
    title: "Loyalty & Promotions",
  },
  {
    imageSrc: CustomizeIconImage,
    description:
      "A Rapid & Stable Development Based on Panther Nails After8 Framework makes it easy. ",
    title: "Travelling & Expence Management",
  },
  {
    imageSrc: ReliableIconImage,
    description:
      "The application provides uninterrupted access to the system and 99% up time.",
    title: "Accounting & Valuations",
  },
  {
    imageSrc: FastIconImage,
    description:
      "Robust & Scalable Cloud Infrastructure where you get ready to grow with your business.",
    title: "Production & Planning",
  },
  {
    imageSrc: SimpleIconImage,
    description:
      "Features that are designed to serve indeed requirement of the users",
    title: "Goods Traceability",
  },
];

const AutoPopup = tw.div`absolute h-full w-full z-50 backdrop-blur-sm flex flex-col items-center`;
const PopupCloseButton = tw.button`bg-red-500 mb-0 text-white font-bold mt-0 hocus:text-gray-900 focus:shadow-inner focus:outline-none transition duration-300 shadow-md  hover:from-pink-500 hover:to-yellow-500`;
export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-primary-500 text-black `; //bg-[url('https://w7.pngwing.com/pngs/378/777/png-transparent-pink-paint-illustration-ink-brush-pen-red-hair-brush-purple-ink-text-thumbnail.png')] bg-center bg-cover`;

  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;

  const imageCss = tw`rounded-4xl`;

  // //auto popup
  // const [showPopup, setShowPopup] = useState(false);
  // const scrollPositionRef = useRef(0);
  // const popupRef = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //     document.body.style.overflow = "auto";
  //     scrollPositionRef.current = window.scrollY;
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   if (showPopup && popupRef.current) {
  //     const windowHeight = window.innerHeight;
  //     const popupHeight = popupRef.current.offsetHeight;
  //     const topOffset = (windowHeight - popupHeight) / 2;
  //     popupRef.current.style.top = `${topOffset}px`;
  //     popupRef.current.style.left = "50%";
  //     popupRef.current.style.transform = "translateX(-50%)";
  //   }
  // }, [showPopup]);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  //   document.body.style.overflow = "auto";
  //   window.scrollTo(0, scrollPositionRef.current);
  // };
  // //auto popup

  return (
    <>
      <Body>
        {/* {showPopup ? (
          <AutoPopup ref={popupRef} style={{ position: "fixed", zIndex: 999 }}>
            <PopupCloseButton onClick={handleClosePopup}>
              Close
            </PopupCloseButton>
            <GetStarted />
          </AutoPopup>
        ) : null} */}
        <Hero
          heading={
            <>
              Elevating Engagement, Empowering Growth for{" "}
              <HighlightedText>your business</HighlightedText>
            </>
          }
          description="Embark on a journey of transformation with our bespoke enterprise software solutions, meticulously crafted to amplify your business potential."
          imageSrc="https://cutesolution.com/html/techvio/assets/img/home-font.png"
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

        {/* <AnimationRevealPage> */}
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
        {/* <br></br>
          <br></br> */}
        <br></br>

        {/* <ScrollingAnimationUpSide y={200}> */}
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
        {/* </ScrollingAnimationUpSide> */}

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
                value: 2, //"2",
              },
              {
                key: "Clients",
                value: 35, //"35+",
              },
              {
                key: "Hard Workers",
                value: 50, //"50+",
              },
            ]}
          />
        </ScrollingAnimationUpSide>
        {/* To Show our Client Section or Component uncommnet this */}
        {/* <ScrollingAnimationUpSide y={200}>
          <Clients textCss={tw`text-purple-800`} />
        </ScrollingAnimationUpSide> */}
        <Footer />
        {/* </AnimationRevealPage> */}
      </Body>
    </>
  );
};
