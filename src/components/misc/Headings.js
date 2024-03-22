import tw, { styled, css } from "twin.macro";
import { setshcolor, sethcolor } from "components/misc/addstyle.js";

export const SectionHeading = styled.h1((props) => [
  tw`text-4xl mt-2 text-sitecolor-300  lg:text-5xl text-center tracking-wide px-6 lg:w-full `,
  setshcolor(),
]);
export const Subheading = tw.h5`font-bold text-sitecolor-300  mt-2   text-center w-10/12`; //chenge color primary-500 to 22-2-24
export const HighlightedText = tw.span`text-sitecolor-900`;

export const Heading = styled.h1((props) => [
  tw`text-black p-2 text-xl lg:text-2xl text-center`,
  props.Heading === "headingtext"
    ? tw`md:text-4xl  text-2xl text-sitecolor-900 font-bold w-full   `
    : tw``,
  sethcolor(),
]);
export const Subheading1 = tw.h5`font-bold text-sitecolor-300  p-2   text-center w-10/12`;

export const NewHeadings = styled.h1((props) => [
  tw` `,
  props.NHeading === "headingsizesm"
    ? tw`text-2xl md:text-4xl 3xl:text-6xl `
    : props.NHeading === "headingsizemd"
    ? tw`text-4xl lg:text-5xl 3xl:text-7xl `
    : tw``,

  props.NHtextcolor === "colorPrimarySh"
    ? tw`text-colorPrimarySh `
    : props.NHtextcolor === "colorPrimaryH"
    ? tw`text-colorPrimaryH `
    : tw``,

  props.NHtextposition === "left"
    ? tw`text-left `
    : props.NHtextposition === "center"
    ? tw`text-center `
    : props.NHtextposition === "right"
    ? tw`text-right `
    : tw``,

  props.NHwidth === "full"
    ? tw` w-full`
    : props.NHwidth === "onebytwo"
    ? tw`  w-1/2 `
    : props.NHwidth === "onebyfour"
    ? tw`  w-1/4 `
    : props.NHwidth === "threebyfour"
    ? tw`  w-3/4 `
    : props.NHwidth === "screen"
    ? tw`  w-screen `
    : props.NHwidth === "screenhalf"
    ? tw`  w-half `
    : props.NHwidth === "equalto90"
    ? tw`  w-less `
    : props.NHwidth === "equalto95"
    ? tw`  w-11/12 `
    : tw``,

  props.NHwidthmd === "full"
    ? tw` md:w-full`
    : props.NHwidthmd === "onebytwo"
    ? tw`  md:w-1/2 `
    : props.NHwidthmd === "onebyfour"
    ? tw`  md:w-1/4 `
    : props.NHwidthmd === "threebyfour"
    ? tw`  md:w-3/4 `
    : props.NHwidthmd === "screen"
    ? tw`  md:w-screen `
    : props.NHwidthmd === "screenhalf"
    ? tw`  md:w-half `
    : props.NHwidthmd === "equalto90"
    ? tw`  md:w-less `
    : props.NHwidthmd === "equalto95"
    ? tw`  md:w-11/12 `
    : tw``,

  props.NHwidthlg === "full"
    ? tw` lg:w-full`
    : props.NHwidthlg === "onebytwo"
    ? tw`  lg:w-1/2 `
    : props.NHwidthlg === "onebyfour"
    ? tw`  lg:w-1/4 `
    : props.NHwidthlg === "threebyfour"
    ? tw`  lg:w-3/4 `
    : props.NHwidthlg === "screen"
    ? tw`  lg:w-screen `
    : props.NHwidthlg === "screenhalf"
    ? tw`  lg:w-half `
    : props.NHwidthlg === "equalto90"
    ? tw`  lg:w-less `
    : props.NHwidthlg === "equalto95"
    ? tw`  lg:w-11/12 `
    : tw``,

  props.NHmargin === "margin~1"
    ? tw` m-1`
    : props.NHmargin === "margin~2"
    ? tw`  m-2 `
    : props.NHmargin === "margin~4"
    ? tw`  m-4 `
    : props.NHmargin === "margin~top1"
    ? tw` mt-1`
    : props.NHmargin === "margin~top2"
    ? tw`  mt-2 `
    : props.NHmargin === "margin~top4"
    ? tw`  mt-4 `
    : props.NHmargin === "margin~bottom1"
    ? tw` -mt-1`
    : props.NHmargin === "margin~bottom2"
    ? tw`  -mt-2 `
    : props.NHmargin === "margin~bottom4"
    ? tw`  -mt-4 `
    : props.NHmargin === "margin~left1"
    ? tw` ml-1`
    : props.NHmargin === "margin~left2"
    ? tw`  ml-2 `
    : props.NHmargin === "margin~left4"
    ? tw`  ml-4 `
    : props.NHmargin === "margin~right1"
    ? tw` -ml-1`
    : props.NHmargin === "margin~right2"
    ? tw`  -ml-2 `
    : props.NHmargin === "margin~right4"
    ? tw`  -ml-4 `
    : props.NHmargin === "margin~x1"
    ? tw`  mx-1 `
    : props.NHmargin === "margin~x2"
    ? tw`  mx-2 `
    : props.NHmargin === "margin~x4"
    ? tw`  mx-4 `
    : props.NHmargin === "margin~x1"
    ? tw` my-1`
    : props.NHmargin === "margin~x2"
    ? tw` my-2 `
    : props.NHmargin === "margin~x4"
    ? tw` my-4 `
    : props.NHmargin === "margin~top~sm"
    ? tw` mt-12`
    : props.NHmargin === "margin~top~md"
    ? tw`  mt-32 `
    : props.NHmargin === "margin~top~lg"
    ? tw`  mt-64 `
    : props.NHmargin === "margin~top~xl"
    ? tw`  mt-80 `
    : props.NHmargin === "margin~bottom~sm"
    ? tw` -mt-12`
    : props.NHmargin === "marginbottommd"
    ? tw`  -mt-32 `
    : props.NHmargin === "margin~bottom~lg"
    ? tw`  -mt-64 `
    : props.NHmargin === "margin~bottom~xl"
    ? tw`  -mt-80 `
    : props.NHmargin === "margin~right~sm"
    ? tw` -ml-12`
    : props.NHmargin === "margin~right~md"
    ? tw`  -ml-32 `
    : props.NHmargin === "margin~right~lg"
    ? tw`  -ml-64 `
    : props.NHmargin === "margin~right~xl"
    ? tw`  -ml-80 `
    : props.NHmargin === "margin~left~sm"
    ? tw` ml-12`
    : props.NHmargin === "margin~left~md"
    ? tw`  ml-32 `
    : props.NHmargin === "margin~left~lg"
    ? tw`  ml-64 `
    : props.NHmargin === "margin~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NHpadding === "padding1"
    ? tw` p-1`
    : props.NHpadding === "padding2"
    ? tw`  p-2 `
    : props.NHpadding === "padding4"
    ? tw`  p-4 `
    : props.NHpadding === "padding~top1"
    ? tw` pt-1`
    : props.NHpadding === "padding~top2"
    ? tw`  pt-2 `
    : props.NHpadding === "padding~top4"
    ? tw`  pt-4 `
    : props.NHpadding === "padding~bottom1"
    ? tw`pb-1`
    : props.NHpadding === "padding~bottom2"
    ? tw` pb-2 `
    : props.NHpadding === "padding~bottom4"
    ? tw` pb-4 `
    : props.NHpadding === "padding~left1"
    ? tw`pl-1`
    : props.NHpadding === "padding~left2"
    ? tw` pl-2 `
    : props.NHpadding === "padding~left4"
    ? tw` pl-4 `
    : props.NHpadding === "padding~right1"
    ? tw` pr-1`
    : props.NHpadding === "padding~right2"
    ? tw`  pr-2 `
    : props.NHpadding === "paddingright4"
    ? tw`  pr-4 `
    : props.NHpadding === "padding~x1"
    ? tw`  mx-1 `
    : props.NHpadding === "padding~x2"
    ? tw`  mx-2 `
    : props.NHpadding === "paddingx4"
    ? tw`  mx-4 `
    : props.NHpadding === "paddingy1"
    ? tw`  my-1`
    : props.NHpadding === "paddingy2"
    ? tw`  my-2 `
    : props.NHpadding === "paddingy4"
    ? tw`  my-4 `
    : props.NHpadding === "padding~top~sm"
    ? tw` mt-12`
    : props.NHpadding === "padding~top~md"
    ? tw`  mt-32 `
    : props.NHpadding === "padding~top~lg"
    ? tw`  mt-64 `
    : props.NHpadding === "padding~top~xl"
    ? tw`  mt-80 `
    : props.NHpadding === "padding~bottom~sm"
    ? tw` -mt-12`
    : props.NHpadding === "padding~bottom~md"
    ? tw`  -mt-32 `
    : props.NHpadding === "padding~bottom~lg"
    ? tw`  -mt-64 `
    : props.NHpadding === "padding~bottom~xl"
    ? tw`  -mt-80 `
    : props.NHpadding === "padding~right~sm"
    ? tw` -ml-12`
    : props.NHpadding === "padding~right~md"
    ? tw`  -ml-32 `
    : props.NHpadding === "padding~right~lg"
    ? tw`  -ml-64 `
    : props.NHpadding === "padding~right~xl"
    ? tw`  -ml-80 `
    : props.NHpadding === "padding~left~sm"
    ? tw` ml-12`
    : props.NHpadding === "padding~left~md"
    ? tw`  ml-32 `
    : props.NHpadding === "padding~left~lg"
    ? tw`  ml-64 `
    : props.NHpadding === "padding~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NHfontfamily === "fontone"
    ? tw`font-sans `
    : props.NHfontfamily === "fonttwo"
    ? tw`font-serif `
    : props.NHfontfamily === "fontthree"
    ? tw`font-mono `
    : tw``,

    props.NHfontweight === "light"
    ? tw`font-light `
    : props.NHfontweight === "medium"
    ? tw`font-medium `
    : props.NHfontweight === "semibold"
    ? tw`font-semibold `
    : props.NHfontweight === "bold"
    ? tw`font-bold `
    : props.NHfontweight === "extrabold"
    ? tw`font-extrabold `
    : props.NHfontweight === "black"
    ? tw`font-black `
    : tw``,
]);
