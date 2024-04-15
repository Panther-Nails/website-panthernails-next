import React from "react";
import DynamicMockupWithBg from "components/DynamicComponents/DynamicMockupWithBg";
import DynamicProductPoster from "components/DynamicComponents/DynamicProductPoster";
import DynamicProduct from "components/DynamicComponents/DynamicProductPoster";
import DynamicServices from "components/DynamicComponents/DynamicServices";
import DynamicServicesWithRoatedCards from "components/DynamicComponents/DynamicServicesWithCards";
import DynamicTextWithImage from "components/DynamicComponents/DynamicTextWithImage";
import DynamicNavbar from "components/DynamicComponents/DynamicNavbar";
import TextCenterWithMockup from "components/DynamicComponents/Hero/TextCenterWithMockup";
import IllustrationAndVideo from "components/DynamicComponents/Hero/IllustrationAndVideo";
import BackgroundAsImageWithCenteredContent from "components/DynamicComponents/Hero/BackgroundAsImageWithCenteredContent";
import ThreeColSimple from "components/DynamicComponents/Features/ThreeColSimple";
import ThreeColSimpleWithImage from "components/DynamicComponents/Features/ThreeColSimpleWithImage";
import TwoColContactUs from "components/DynamicComponents/ContactUs/TwoColContactUs";

export default ({}) => {
  return (
    <>
      {/* <DynamicMockupWithBg /> */}
      {/* <DynamicNavbar /> */}
      <TwoColContactUs />
      <ThreeColSimpleWithImage />
      <ThreeColSimple />
      <BackgroundAsImageWithCenteredContent />
      <IllustrationAndVideo />
      <TextCenterWithMockup />
      <DynamicTextWithImage />
      {/* <DynamicServices /> */}
      <DynamicServicesWithRoatedCards />
      <DynamicProductPoster />
    </>
  );
};
