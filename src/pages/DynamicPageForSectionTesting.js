import DynamicMockupWithBg from "components/DynamicComponents/DynamicMockupWithBg";
import DynamicProductPoster from "components/DynamicComponents/DynamicProductPoster";
import DynamicProduct from "components/DynamicComponents/DynamicProductPoster";
import DynamicServices from "components/DynamicComponents/DynamicServices";
import DynamicServicesWithRoatedCards from "components/DynamicComponents/DynamicServicesWithRoatedCards";
import DynamicTextWithImage from "components/DynamicComponents/DynamicTextWithImage";
import React from "react";

export default ({}) => {
  return (
    <>
      {/* <DynamicMockupWithBg /> */}
      <DynamicTextWithImage />
      {/* <DynamicServices /> */}
      <DynamicServicesWithRoatedCards />
      <DynamicProductPoster />
    </>
  );
};
