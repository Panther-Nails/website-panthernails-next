import React from "react";

// import MainFeature1 from "components/features/TwoColWithButton.js";
import Header from "../components/headers/light.js";
import tw,{styled} from "twin.macro";
import Cards from "../components/cards/GauravThreeColSlider copy.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Hero from "components/hero/GauravTwoColumnWithInput copy.js";
// import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { SectionHeading } from "components/misc/Headings.js";
import ProfileImageCLM from "images/CLM.png";
import ProfileImageRasikLoyalty from "images/Loyalty.png";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import ProductFeatures from "../components/faqs/SimpleWithSideImage.js";
import PlatforWeProvide from "../components/features/GauravTwoColWithButton copy.js";
import RevordSystem from "../components/testimonials/GauravThreeColumnWithProfileImage copy.js";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Features1 from "components/features/ThreeColWithSideImage.js";

import Testimonial from "../components/testimonials/TwoColumnWithImage.js";

import Footer from "../components/footers/FiveColumnWithInputForm.js";

import ParellexanimG from "../pages/ParellexanimG.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import ThreeColSimpleWithImage from "components/blogs/ThreeColSimpleWithImage.js";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage.js";


export const Hovereffect=tw.div`hover:(scale-150 duration-500 shadow-2xl)`

const buttonRoundedCss = tw`rounded-full  w-32 ml-40  flex overflow-hidden hover:( w-80)`;
const HighlightedText = tw.span`text-sitecolor-900`;
const imageCss =tw`rounded-4xl bg-black`;
const Container = tw.div`bg-sitecolor-100 text-sitecolor-300 relative  min-h-full w-full flex-col md:(flex flex-row ) items-center justify-center   `;//hover:scale-110
const Left = tw.div` h-1/2 w-screen  md:(w-1/2 h-screen -mt-8 )   flex items-center justify-evenly flex-col  `;
const Right = styled.div`${tw`hidden w-8/12 bg-gray-1000 w-screen  md:(w-1/2 h-screen block) overflow-hidden flex items-center justify-center ` }

`;

const Right1 = styled.div(({variable})=>[
  tw`h-screen bg-gray-1000 w-screen  md:w-2/3 -mt-8 flex items-center justify-center`,
  tw`hover:bg-red-400`,
  // tw`hover:rotate-180 duration-1000`,
  // tw`hover:skew-y-12 duration-1000`,
  // tw`hover:origin-top-left rotate-180 duration-1000`,
  tw``


])
// origin-bottom-left
const Rightimg = tw.img`md:(h-10/12)  w-full h-4/12 hover:scale-110 duration-500  `;
const PrimaryButton1 = tw.button`mt-8 animate-bounce px-8 py-3 font-bold rounded-full bg-green-600 text-gray-100 hocus:(bg-green-900 animate-none) hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const Subheading1 = tw.h5`font-bold text-sitecolor-300  mt-4 text-center w-10/12`;
const Icone = tw.img`w-12 h-12 rounded-full ml-16 `;
const buttonRoundedCss1 = tw`rounded-full  w-32 ml-40  flex overflow-hidden hover:( w-80)`;

//testing components






export default ({
  Subheading = tw.span`tracking-wider text-sm font-medium`,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
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
}) => {
  return (
    <>
      {/* <AnimationRevealPage> */}
        {/* <Hero>
        
       </Hero> */}

        <Header />
         <Container>
          <Left>
            <SectionHeading>
              Run your entire <HighlightedText>business</HighlightedText> in one
              place
            </SectionHeading>
            <Subheading1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Subheading1>
            <PrimaryButton1
              as="a"
              href={primaryButtonUrl}
              css={buttonRoundedCss1}
            >
              {primaryButtonText}
              {/* <Icone src={ProfileImageCLM}/>
            <Icone src={ProfileImageRasikLoyalty}/>  */}
             </PrimaryButton1>
          </Left>
          <Right>
            
            <Rightimg src="https://cdn.dribbble.com/userupload/12468591/file/original-4c59268356fb18e647e1e0847ba82d14.png?resize=1024x768&vertical=center" />
          </Right>
        </Container>
        <ParellexanimG/>
        {/* <Cards /> */}
        <Features1
          subheading={<Subheading1>Keeping customers on top</Subheading1>}
          heading={
            <>
              We have Amazing <HighlightedText>Service.</HighlightedText>
            </>
          }
          description="a genial technology company delivering insightful enterprise software that foster your business."
          cards={serviceCards}
        />
        <ProductFeatures></ProductFeatures>
        <PlatforWeProvide/>
        <RevordSystem></RevordSystem>
        
        {/* <Testimonial /> */}
        <Footer />
        {/* <ThreeColWithSideImage/> */}
        
      {/* </AnimationRevealPage> */}

      {/* <Right1 ></Right1> */}
    </>
  );
};
