import tw from "twin.macro";

export const Container = tw.div`relative pt-0`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 `;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-12 ml-5`; //lg:py-24 to lg:py-12 for home page image upside
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;

//Durgesh 
//For Home.js page FeatureStats
export const ContentWithPaddingForHomePage= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 bg-blue-300 rounded-lg bg-blue-300`;
export const Body = tw.div`h-full w-screen`;
export const HighlightedTextSpan = tw.span`text-primary-500`;
export const StickyContainer = tw.div`relative pt-0 lg:sticky top-0 -z-50`;


