import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components";
import styled from "styled-components";
import Hero from "components/hero/TwoColumnWithInput.js";
import OneAppPoster from "components/durgesh/ProductPosterFromFigma";
import OneAppServices from "components/durgesh/LoyaltyServices";
import { Container } from "components/misc/Layouts";
const HighlightedText = tw.span`text-primary-500`;

export default ({
  oneAppServicesCardData = [
    {
      imageUrl: "logo192.png",
      heading: "Work Report",
      description:
        "Paying out employees for his expenses for company work, paying out perks that are not part of his CTC, and any other type of expenses that you see that has to payed out or reimbursed to the employee are managed through this.",
    },
    {
      imageUrl: "logo192.png",
      heading: "Leave Management",
      description:
        "Paying out employees for his expenses for company work, paying out perks that are not part of his CTC, and any other type of expenses that you see that has to payed out or reimbursed to the employee are managed through this.",
    },
    {
      imageUrl: "logo192.png",
      heading: "Accommodation",
      description:
        "Paying out employees for his expenses for company work, paying out perks that are not part of his CTC, and any other type of expenses that you see that has to payed out or reimbursed to the employee are managed through this.",
    },
    {
      imageUrl: "logo192.png",
      heading: "Advance Money",
      description:
        "Paying out employees for his expenses for company work, paying out perks that are not part of his CTC, and any other type of expenses that you see that has to payed out or reimbursed to the employee are managed through this.",
    },
  ],
}) => {
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
      <OneAppPoster
        posterHeading="Experience seamless HR management with One App: Smarter, faster, better!"
        productButtonText="Contact us"
        productImageSrc="./oneAppLogoForProductSection.png"
        productButtonTextSecond="Explore App"
        productSrcWithMockup="/smacoProductSectionImage3.png"
      />
      <OneAppServices
        productServicesHeading="OneApp Services"
        productServicesSubheading="Rasik Loyalty Services Subheading"
        productServicesCardData={oneAppServicesCardData}
      />
      
    </>
  );
};
