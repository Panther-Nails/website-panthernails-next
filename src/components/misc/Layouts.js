import tw from "twin.macro";

export const Container = tw.div`relative xl:(w-full flex items-center justify-center) overflow-hidden p-4 bg-sitecolor-100`;//add overflow hidden at 21-2-24, add paddinf-4 at 8-3-24
export const ContentWithPaddingXl= tw.div`max-w-screen-xl xl:(w-full  h-fourfifth) mx-auto py-20 lg:py-4`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;
