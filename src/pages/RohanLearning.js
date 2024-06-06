import React, { useState } from "react";
import tw from "twin.macro";
import TwoColWithSideMenu from "./TwoColWithSideMenu";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import Menu from "./Menu";

export default ({}) => {
  return (
    <>
      <TwoColWithSideMenu menuOnLeft="true" Left={<Menu />} Right={<Menu />} />
    </>
  );
};
