import React, { useState } from "react";
import tw from "twin.macro";
import TwoColWithSideMenu from "./TwoColWithSideMenu";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import Menu from "./Menu";

const Content = tw.div`flex flex-row basis-1/2`;
const Container = tw.div`flex flex-col`;

const Header = tw.h1`block p-1`;

const Cards = tw.div`flex `;

const Card = tw.div`flex basis-1/4 h-48 p-1 m-1 bg-gray-200 shadow`;

export default ({}) => {
  return (
    <>
      <Header>Test</Header>
    </>
  );
};
