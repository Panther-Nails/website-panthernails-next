import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import Hero from "components/hero/TwoColumnWithInput";

import Card from "components/cards/ThreeColContactDetails";

import Features from "components/features/VerticalWithAlternateImageAndText.js";

// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import FAQs from "components/faqs/SimpleWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import ProfileImageRasikLoyalty from "images/mission.png";
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
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default ({
  
  products = [
    {
      imageSrc: "https://images.unsplash.com/photo-1625795782700-8acde893181c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2lvbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Mission",
      description:
        `Social, Mobility, Analytics and Cloud are the buzzwords that are shaping todays enterprise. Panther Nails is keen to keep your business up to date with all these contemporary trends. We also provide interfaces that are easy for clients to integrate them with their own apps and services to improve productivity, make decisions faster, provide focus (by reducing context switching), and create collaboration around existing content and workflows.`,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      title: "Vision",
      description:
        "We provide a fresh approach to re-evaluate and transform Company’s business towards modern digital era. We keep on seeking the opportunity to influence and transform your company's business strategies for betterment. We exist to create a purposeful innovation that helps to run business smoothly, focusing on consumer needs, industry trends that fuels growth, and updates in industry around the country.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Values",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    },

  ]
}) => {
  return (
    <AnimationRevealPage>
      <Hero />

      
      <MainFeature1
        subheading={<Subheading>Mission</Subheading>}
        heading="Ease of Business"
        buttonRounded={false}
        description="Social, Mobility, Analytics and Cloud are the buzzwords that are shaping todays enterprise. Panther Nails is keen to keep your business up to date with all these contemporary trends. We also provide interfaces that are easy for clients to integrate them with their own apps and services to improve productivity, make decisions faster, provide focus (by reducing context switching), and create collaboration around existing content and workflows."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />

      <MainFeature1
        subheading={<Subheading>Vision</Subheading>}
        heading="We aim to disrupt the business routine."
        description="We provide a fresh approach to re-evaluate and transform Company’s business towards modern digital era. We keep on seeking the opportunity to influence and transform your company's business strategies for betterment. We exist to create a purposeful innovation that helps to run business smoothly, focusing on consumer needs, industry trends that fuels growth, and updates in industry around the country."        
        buttonRounded={false}
      
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />


      <Card  
        subheading="Values"
        heading={ <>What We <HighlightedText>Believe</HighlightedText></> }
        description=""
        cards={[
          {
            title: "TRUSTWORTHY",
            description: "Armed with domain expertise and meticulous forecasts we allow  your business to escalate."
          },
          {
            title: "INNOVATION",
            description: "Futuristic approach while introducing new products to achieve our vision and mission thereby delivering best outputs."
          },
          {
            title: "RESPONSIBILITY",
            description: "We believe in taking responsibility for what we offer and desire to offer best at reasonable rates along with being responsive for after sales support. "
          },
          {
            title: "INTEGRITY",
            description: "When we face a difficult situation we never compromise our values and principles. We do what is right and not what is easiest. "
          },
          {
            title: "EXCELLENCE",
            description: "We truly believe in our caliber for thoroughly delivering outstanding product and maintain the culture of excellence every single day."
          },
          {
            title: "RELIABLE",
            description: "While considering our clients as assets we pursue relationships with our clients based on transparency, persistence, mutual trust and integrity."
          },
        ]}
      />
    
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />

      <FAQs /> */}
      
      <Footer />
    </AnimationRevealPage>
  );
};
