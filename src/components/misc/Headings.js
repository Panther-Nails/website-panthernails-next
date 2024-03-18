import tw, { styled,css } from "twin.macro";
import { setshcolor,sethcolor } from "components/misc/addstyle.js";



export const SectionHeading = styled.h2(prop=>[
  tw`text-4xl mt-2 text-sitecolor-300  lg:text-5xl text-center tracking-wide px-6 lg:w-full `,
  setshcolor()
])
export const Subheading = tw.h5`font-bold text-sitecolor-300  mt-2   text-center w-10/12`//chenge color primary-500 to 22-2-24
export const HighlightedText = tw.span`text-sitecolor-900`;

  export const Heading = styled.h1(props => [
    tw`text-black p-2 text-xl lg:text-2xl text-center`,
    props.Heading === 'headingtext'? tw`md:text-4xl  text-2xl text-sitecolor-900 font-bold w-full   ` :
    tw``,
    sethcolor()
  ]);
export const Subheading1 = tw.h5`font-bold text-sitecolor-300  p-2   text-center w-10/12`;
