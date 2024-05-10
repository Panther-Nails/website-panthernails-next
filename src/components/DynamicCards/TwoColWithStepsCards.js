import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400 md:mr-6`;
const StepText = tw.div`mt-3 md:mt-0`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Steps = tw.ul`mt-12`;
export default ({ index, children, properties }) => {
  return (
    <Step key={index}>
      {properties.showNumbering ? (
        <StepNumber>{(index + 1).toString().padStart(2, "0")}</StepNumber>
      ) : (
        <></>
      )}
      <StepText>
        <StepHeading>{properties.heading}</StepHeading>
        <StepDescription>{properties.description}</StepDescription>
        <Subheading>{properties.subHeading}</Subheading>
      </StepText>
    </Step>
  );
};
