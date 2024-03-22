import tw, { styled, css } from "twin.macro";
import { setsdcolor, setdcolor } from "components/misc/addstyle.js";

// export const SectionDescription = tw.p` text-sm md:text-base lg:text-lg font-medium leading-relaxed text-sitecolor-300 max-w-xl`;
export const SectionDescription = styled.p((props) => [
  tw`text-sm md:text-base lg:text-lg font-medium w-10/12 py-1 text-center  text-gray-500 `,
  props.SectionDescription === "sectiondecriptioncolor"
    ? tw` text-sitecolor-300 `
    : tw``,
  setsdcolor(),
]);
export const Description = styled.p((props) => [
  tw`text-sm md:text-base py-1 text-center lg:text-lg font-medium leading-relaxed text-gray-500 max-w-xl`,
  props.Description === "descriptioncolor"
    ? tw` text-sitecolor-300 w-10/12  `
    : tw``,
  setdcolor(),
]);

export const NewDescription = styled.h1((props) => [
  tw` `,
  props.NDescription === "dsizesm"
    ? tw`text-sm md:text-lg 3xl:text-2xl `
    : props.NDescription === "dsizemd"
    ? tw`text-base lg:text-xl 3xl:text-3xl `
    : tw``,

  props.NDtextcolor === "colorPrimarySd"
    ? tw`text-colorPrimarySd `
    : props.NDtextcolor === "colorPrimaryD"
    ? tw`text-colorPrimaryD `
    : tw``,

  props.NDtextposition === "left"
    ? tw`text-left `
    : props.NDtextposition === "center"
    ? tw`text-center `
    : props.NDtextposition === "right"
    ? tw`text-right `
    : tw``,

  props.NDwidth === "full"
    ? tw` w-full`
    : props.NDwidth === "onebytwo"
    ? tw`  w-1/2 `
    : props.NDwidth === "onebyfour"
    ? tw`  w-1/4 `
    : props.NDwidth === "threebyfour"
    ? tw`  w-3/4 `
    : props.NDwidth === "screen"
    ? tw`  w-screen `
    : props.NDwidth === "screenhalf"
    ? tw`  w-half `
    : props.NDwidth === "equalto90"
    ? tw`  w-less `
    : props.NDwidth === "equalto95"
    ? tw`  w-11/12 `
    : props.NDwidth === "equalto85"
    ? tw`  w-10/12 `
    : tw``,

  props.NDwidthmd === "full"
    ? tw` md:w-full`
    : props.NDwidthmd === "onebytwo"
    ? tw`  md:w-1/2 `
    : props.NDwidthmd === "onebyfour"
    ? tw`  md:w-1/4 `
    : props.NDwidthmd === "threebyfour"
    ? tw`  md:w-3/4 `
    : props.NDwidthmd === "screen"
    ? tw`  md:w-screen `
    : props.NDwidthmd === "screenhalf"
    ? tw`  md:w-half `
    : props.NDwidthmd === "equalto90"
    ? tw`  md:w-less `
    : props.NDwidthmd === "equalto95"
    ? tw`  md:w-11/12 `
    : tw``,

  props.NDwidthlg === "full"
    ? tw` lg:w-full`
    : props.NDwidthlg === "onebytwo"
    ? tw`  lg:w-1/2 `
    : props.NDwidthlg === "onebyfour"
    ? tw`  lg:w-1/4 `
    : props.NDwidthlg === "threebyfour"
    ? tw`  lg:w-3/4 `
    : props.NDwidthlg === "screen"
    ? tw`  lg:w-screen `
    : props.NDwidthlg === "screenhalf"
    ? tw`  lg:w-half `
    : props.NDwidthlg === "equalto90"
    ? tw`  lg:w-less `
    : props.NDwidthlg === "equalto95"
    ? tw`  lg:w-11/12 `
    : tw``,

  props.NDmargin === "margin~1"
    ? tw` m-1`
    : props.NDmargin === "margin~2"
    ? tw`  m-2 `
    : props.NDmargin === "margin~4"
    ? tw`  m-4 `
    : props.NDmargin === "margin~top1"
    ? tw` mt-1`
    : props.NDmargin === "margin~top2"
    ? tw`  mt-2 `
    : props.NDmargin === "margin~top4"
    ? tw`  mt-4 `
    : props.NDmargin === "margin~bottom1"
    ? tw` -mt-1`
    : props.NDmargin === "margin~bottom2"
    ? tw`  -mt-2 `
    : props.NDmargin === "margin~bottom4"
    ? tw`  -mt-4 `
    : props.NDmargin === "margin~left1"
    ? tw` ml-1`
    : props.NDmargin === "margin~left2"
    ? tw`  ml-2 `
    : props.NDmargin === "margin~left4"
    ? tw`  ml-4 `
    : props.NDmargin === "margin~right1"
    ? tw` -ml-1`
    : props.NDmargin === "margin~right2"
    ? tw`  -ml-2 `
    : props.NDmargin === "margin~right4"
    ? tw`  -ml-4 `
    : props.NDmargin === "margin~x1"
    ? tw`  mx-1 `
    : props.NDmargin === "margin~x2"
    ? tw`  mx-2 `
    : props.NDmargin === "margin~x4"
    ? tw`  mx-4 `
    : props.NDmargin === "margin~x1"
    ? tw` my-1`
    : props.NDmargin === "margin~x2"
    ? tw` my-2 `
    : props.NDmargin === "margin~x4"
    ? tw` my-4 `
    : props.NDmargin === "margintopsm"
    ? tw` mt-12`
    : props.NDmargin === "margintopmd"
    ? tw`  mt-32 `
    : props.NDmargin === "margintoplg"
    ? tw`  mt-48 `
    : props.NDmargin === "margintopxl"
    ? tw`  mt-80 `
    : props.NDmargin === "margin~bottom~sm"
    ? tw` -mt-12`
    : props.NDmargin === "marginbottommd"
    ? tw`  -mt-32 `
    : props.NDmargin === "margin~bottom~lg"
    ? tw`  -mt-64 `
    : props.NDmargin === "margin~bottom~xl"
    ? tw`  -mt-80 `
    : props.NDmargin === "margin~right~sm"
    ? tw` -ml-12`
    : props.NDmargin === "margin~right~md"
    ? tw`  -ml-32 `
    : props.NDmargin === "margin~right~lg"
    ? tw`  -ml-64 `
    : props.NDmargin === "margin~right~xl"
    ? tw`  -ml-80 `
    : props.NDmargin === "margin~left~sm"
    ? tw` ml-12`
    : props.NDmargin === "margin~left~md"
    ? tw`  ml-32 `
    : props.NDmargin === "margin~left~lg"
    ? tw`  ml-64 `
    : props.NDmargin === "margin~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NDpadding === "padding1"
    ? tw` p-1`
    : props.NDpadding === "padding2"
    ? tw`  p-2 `
    : props.NDpadding === "padding4"
    ? tw`  p-4 `
    : props.NDpadding === "padding~top1"
    ? tw` pt-1`
    : props.NDpadding === "padding~top2"
    ? tw`  pt-2 `
    : props.NDpadding === "padding~top4"
    ? tw`  pt-4 `
    : props.NDpadding === "padding~bottom1"
    ? tw`pb-1`
    : props.NDpadding === "padding~bottom2"
    ? tw` pb-2 `
    : props.NDpadding === "padding~bottom4"
    ? tw` pb-4 `
    : props.NDpadding === "padding~left1"
    ? tw`pl-1`
    : props.NDpadding === "padding~left2"
    ? tw` pl-2 `
    : props.NDpadding === "padding~left4"
    ? tw` pl-4 `
    : props.NDpadding === "padding~right1"
    ? tw` pr-1`
    : props.NDpadding === "padding~right2"
    ? tw`  pr-2 `
    : props.NDpadding === "paddingright4"
    ? tw`  pr-4 `
    : props.NDpadding === "paddingx1"
    ? tw`  mx-1 `
    : props.NDpadding === "paddingx2"
    ? tw`  mx-2 `
    : props.NDpadding === "paddingx4"
    ? tw`  mx-4 `
    : props.NDpadding === "paddingx8"
    ? tw`  mx-8 `
    : props.NDpadding === "paddingx12"
    ? tw`  mx-12 `
    : props.NDpadding === "paddingy1"
    ? tw`  my-1`
    : props.NDpadding === "paddingy2"
    ? tw`  my-2 `
    : props.NDpadding === "paddingy4"
    ? tw`  my-4 `
    : props.NDpadding === "padding~top~sm"
    ? tw` mt-12`
    : props.NDpadding === "padding~top~md"
    ? tw`  mt-32 `
    : props.NDpadding === "padding~top~lg"
    ? tw`  mt-64 `
    : props.NDpadding === "padding~top~xl"
    ? tw`  mt-80 `
    : props.NDpadding === "padding~bottom~sm"
    ? tw` -mt-12`
    : props.NDpadding === "padding~bottom~md"
    ? tw`  -mt-32 `
    : props.NDpadding === "padding~bottom~lg"
    ? tw`  -mt-64 `
    : props.NDpadding === "padding~bottom~xl"
    ? tw`  -mt-80 `
    : props.NDpadding === "padding~right~sm"
    ? tw` -ml-12`
    : props.NDpadding === "padding~right~md"
    ? tw`  -ml-32 `
    : props.NDpadding === "padding~right~lg"
    ? tw`  -ml-64 `
    : props.NDpadding === "padding~right~xl"
    ? tw`  -ml-80 `
    : props.NDpadding === "padding~left~sm"
    ? tw` ml-12`
    : props.NDpadding === "padding~left~md"
    ? tw`  ml-32 `
    : props.NDpadding === "padding~left~lg"
    ? tw`  ml-64 `
    : props.NDpadding === "padding~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NDfontfamily === "fontone"
    ? tw`font-sans `
    : props.NDfontfamily === "fonttwo"
    ? tw`font-serif `
    : props.NDfontfamily === "fontthree"
    ? tw`font-mono `
    : tw``,

  props.NDfontweight === "light"
    ? tw`font-light `
    : props.NDfontweight === "medium"
    ? tw`font-medium `
    : props.NDfontweight === "semibold"
    ? tw`font-semibold `
    : props.NDfontweight === "bold"
    ? tw`font-bold `
    : props.NDfontweight === "extrabold"
    ? tw`font-extrabold `
    : props.NDfontweight === "black"
    ? tw`font-black `
    : tw``,
]);
