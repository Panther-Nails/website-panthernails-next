import tw from "twin.macro";
import styled from "styled-components";
import { isIOS } from "@fluentui/react";
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 `;

//Durgesh Changes All sections headings and subheading typography

export const Heading = styled.h1((props) => [
  tw`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-colorOnPrimary text-center`,
]);
export const Subheading = styled.p((props) => [
  tw`text-lg font-normal text-gray-700 lg:text-xl sm:px-16 px-5 xl:px-48 dark:text-gray-700 mb-5 text-center`,
]);

//For card sections
export const CardHeading = styled.h2((props) => [tw`text-2xl font-bold `]);

export const CardDescription = styled.p((props) => [
  tw`text-gray-700 font-semibold `,
]);

export const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;
