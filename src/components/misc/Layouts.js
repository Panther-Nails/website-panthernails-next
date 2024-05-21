import styled from "styled-components";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

// export const Container = tw.div`relative`;

export const Container = styled.div`
  ${tw`relative overflow-hidden`}

  h2 {
    ${tw`text-5xl font-black tracking-wide mt-4 text-center leading-tight `}
  }

  h5 {
    ${tw`sm:ml-4 mt-4 sm:mt-2 text-primary-500`}
  }
`;

export const Subheading = tw(SubheadingBase)`text-center md:text-left`;
export const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

export const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;

export const StyledText = styled.span`
  ${tw` -my-16 text-center text-6xl font-black `}

  background-image: linear-gradient(to right, #00000000, #1e90ffff);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
