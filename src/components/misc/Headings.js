import tw, { styled,css } from "twin.macro";

export const SectionHeading = tw.h2`text-4xl text-sitecolor-300  lg:text-5xl text-center tracking-wide px-6 lg:w-full `
export const Subheading = tw.h5`font-bold text-sitecolor-300  mt-2   text-center w-10/12`//chenge color primary-500 to 22-2-24
export const HighlightedText = tw.span`text-sitecolor-900`;

  export const Heading = styled.h1(props => [
    tw`text-sitecolor-900  text-center`,
    props.Heading === 'headingtext'? tw`md:text-4xl  text-2xl font-bold w-full   ` :
    tw``,
  ]);
export const Subheading1 = tw.h5`font-bold text-sitecolor-300  mt-2   text-center w-10/12`;
