import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithVideo";
import MainFeature from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Statistics from "components/features/TwoColWithStat";

import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";

import CTA from "components/cta/GetStarted";
import Testimonial from "components/testimonials/TwoColumnWithImageSlider.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

import tw from "twin.macro";
import { ReactComponent as HandleIcon } from "images/simple-icon.svg";
import ProfileIcon from "images/contact-us-illustration.svg";

import PhoneImageRasikLoyalty from "images/RASIK.png";

import ProfileImageRasikLoyalty from "images/Loyalty.png";
import ProfileImageCLM from "images/CLM.png";

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProductImageCLM from "images/ProductCLM.png";

import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";

import {} from "components/headers/light";
import styled from "styled-components";

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center lg:mr-20 border-b
`;

export const NavLinks = tw.div`inline-block pb-5`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const LogoLink = styled(NavLink)`
  ${tw`items-center font-black text-2xl!`};
`;

const HighlightedText = tw.span`text-primary-500`;

const Subheading = tw.span`tracking-wider text-sm font-medium`;

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
    {
      imageSrc: ProductImageCLM,
      profileImageSrc: ProfileImageCLM,
      subtitle: "Contract Labour Management",
      title: "Panther Nails One App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/OneApp",
    },
  ],
}) => {
  return (
    <AnimationRevealPage>
      <DesktopNavLinks>
        <NavLinks>
          <LogoLink>Admin Panel</LogoLink>
          <NavLink>One</NavLink>
          <NavLink>One</NavLink>
          <NavLink>One</NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink>Welcome, UserName</NavLink>
          <NavLink>Logout</NavLink>
        </NavLinks>
      </DesktopNavLinks>
      <Features
        subheading={<Subheading>Keeping customers on top</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        description="a genial technology company delivering insightful enterprise software that foster your business."
        cards={[]}
      />

      <Statistics
        subheading={<Subheading>Keeping customers on top</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        description="a genial technology company delivering insightful enterprise software that foster your business."
        cards={[]}
      />

      <MainFeature
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />

      <MainFeature
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />

      <CTA />

      <Footer />
    </AnimationRevealPage>
  );
};
