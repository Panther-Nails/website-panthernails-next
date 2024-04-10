import React from "react";
import DynamicMockupWithBg from "components/DynamicComponents/DynamicMockupWithBg";
import DynamicProductPoster from "components/DynamicComponents/DynamicProductPoster";
import DynamicProduct from "components/DynamicComponents/DynamicProductPoster";
import DynamicServices from "components/DynamicComponents/DynamicServices";
import DynamicServicesWithRoatedCards from "components/DynamicComponents/DynamicServicesWithCards";
import DynamicTextWithImage from "components/DynamicComponents/DynamicTextWithImage";
import DynamicNavbar from "components/DynamicComponents/DynamicNavbar";
import ComponentUsingJson from "components/DynamicComponents/ComponentUsingJson";

export default ({}) => {
  return (
    <>
      {/* <DynamicMockupWithBg /> */}
      <DynamicNavbar />
      {/* <ComponentUsingJson /> */}
      <DynamicTextWithImage />
      {/* <DynamicServices /> */}
      <DynamicServicesWithRoatedCards />
      <DynamicProductPoster />
    </>
  );
};
