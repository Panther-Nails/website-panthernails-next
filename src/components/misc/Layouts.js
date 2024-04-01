import tw, { styled, css } from "twin.macro";
import { setbg } from "components/misc/addstyle.js";

// Container = tw.div`bg-sitecolor-100 text-sitecolor-300   min-h-full w-full flex-col md:(flex flex-row ) items-center justify-center   `;
const a = "flex-col h-1/2   md:(w-1/2 h-screen )"; //you and use apply telwind like that

//   flex items-center  justify-center flex-col md:flex-row

export const Container = styled.div((props) => [
  tw`relative overflow-hidden flex items-center gap-4 justify-center   `,
  props.Container === "ItemscenterCol"
    ? tw` flex-col p-4 bg-transparent`
    : props.Container === "Itemscenterbgtransparent"
    ? tw` `
    : props.Container === "ItemscenterColWidthhalf"
    ? tw` ${a} `
    : props.Container === "Itemshideonmovileview"
    ? tw`hidden md:(w-1/2 h-screen block )    `
    : props.Container === "ItemsInPhoneAndWindow"
    ? tw` flex-col md:flex-row lg:h-full `
    : props.Container === "ItemsInPhoneAndWindowhalf"
    ? tw`lg:(h-screen w-full mt-0)  mt-4 h-1/2  flex-col `
    : props.Container === "StickContainerontop"
    ? tw` md:(h-screen w-1/2 ) z-30 sticky top-0   `
    : tw``,
  setbg(),
]);

export const Containerbgcolor = styled.div((props) => [
  // tw`bg-primary-100 `,
  // theme === "blue"
  //   ? tw`bg-blue-100`
  //   : theme === "red"
  //   ? tw`bg-red-500`
  //   : theme === "tan"
  //   ? tw`bg-sitecolor-100`
  //   : tw``,
]);

export const SimpleContainer = styled.div((props) => [
  tw`relative w-full  `,
  props.SimpleContainer === "Defultcontainer"
    ? tw` md:( flex-row) flex flex-col `
    : props.SimpleContainer === "Defultcontainercol"
    ? tw`  flex flex-col `
    : props.SimpleContainer === "Defultcontainercentercol"
    ? tw`items-center  mt-2  justify-center w-full h-full  flex flex-col `
    : props.SimpleContainer === "Defultcontainersticktophalf"
    ? tw`border-2 border-sitecolor-900 rounded-lg h-half p-4 bg-black  sticky top-0  `
    : props.SimpleContainer === "DefultcontainerHalf"
    ? tw`md:w-1/2  z-10  w-full `
    : tw``,
]);

export const Container90 = styled.div((props) => [
  tw`w-11/12   text-center   rounded items-center justify-center`,
  props.Container90 === "Container90up"
    ? tw` -mt-32 bg-white `
    : props.Container90 === "Container90col"
    ? tw`  flex flex-col `
    : props.Container90 === "DefultcontainerHalf"
    ? tw`md:w-1/2  z-10  w-full `
    : tw``,
]);

// export const Container = tw.div`relative xl:(w-full flex items-center justify-center) overflow-hidden p-4 bg-sitecolor-100`;//add overflow hidden at 21-2-24, add paddinf-4 at 8-3-24
// export const Container90= tw.div`md:w-11/12 px-12 -mt-32 text-center bg-white p-8 rounded items-center justify-center`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl  mx-auto py-20 lg:py-4`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;

// const handleProps=(props)=>
// {
//   if(props.SimpleContainer == "Defultcontainer")
//   {
//     console.log("In handle")
//     return (tw` bg-black`)
//   }
// }

// export const SimpleContainer = styled.div(props => [
//   tw`relative w-full`,

//   handleProps(props),

// ])

//new type of conatiner
// export const NewContainer = styled.div((props) => [
//   tw`relative `,
// props.NCwidth === "full"
//   ? tw` w-full`
//   : props.NCwidth === "screen"
//   ? tw`  w-screen `
//   : props.NCwidth === "half"
//   ? tw`  w-half `
//   : props.NCwidth === "equalto90"
//   ? tw`  w-less `
//   : props.NCwidth === "equalto90"
//   ? tw`  w-less `
//   : tw``,
// ]);

export const NewContainer = styled.div((props) => [
  tw`relative `,

  props.NCwidth === "full"
    ? tw` w-full`
    : props.NCwidth === "onebytwo"
    ? tw`  w-1/2 `
    : props.NCwidth === "onebyfour"
    ? tw`  w-1/4 `
    : props.NCwidth === "threebyfour"
    ? tw`  w-3/4 `
    : props.NCwidth === "screen"
    ? tw`  w-screen `
    : props.NCwidth === "screenhalf"
    ? tw`  w-half `
    : props.NCwidth === "equalto90"
    ? tw`  w-less `
    : props.NCwidth === "equalto95"
    ? tw`  w-11/12 `
    : tw``,

  props.NCwidthmd === "full"
    ? tw` md:w-full`
    : props.NCwidthmd === "onebytwo"
    ? tw`  md:w-1/2 `
    : props.NCwidthmd === "onebyfour"
    ? tw`  md:w-1/4 `
    : props.NCwidthmd === "threebyfour"
    ? tw`  md:w-3/4 `
    : props.NCwidthmd === "screen"
    ? tw`  md:w-screen `
    : props.NCwidthmd === "screenhalf"
    ? tw`  md:w-half `
    : props.NCwidthmd === "equalto90"
    ? tw`  md:w-less `
    : props.NCwidthmd === "equalto95"
    ? tw`  md:w-11/12 `
    : tw``,

  props.NCwidthlg === "full"
    ? tw` lg:w-full`
    : props.NCwidthlg === "onebytwo"
    ? tw`  lg:w-1/2 `
    : props.NCwidthlg === "onebyfour"
    ? tw`  lg:w-1/4 `
    : props.NCwidthlg === "threebyfour"
    ? tw`  lg:w-3/4 `
    : props.NCwidthlg === "screen"
    ? tw`  lg:w-screen `
    : props.NCwidthlg === "screenhalf"
    ? tw`  lg:w-half `
    : props.NCwidthlg === "equalto90"
    ? tw`  lg:w-less `
    : props.NCwidthlg === "equalto95"
    ? tw`  lg:w-11/12 `
    : tw``,

  props.NCheight === "full"
    ? tw` h-full`
    : props.NCheight === "onebytwo"
    ? tw`  h-1/2 `
    : props.NCheight === "onebyfour"
    ? tw`  h-1/4 `
    : props.NCheight === "threebyfour"
    ? tw`  h-3/4 `
    : props.NCheight === "screen"
    ? tw`  h-screen `
    : props.NCheight === "screenhalf"
    ? tw`  h-half `
    : props.NCheight === "equalto95"
    ? tw`  h-less `
    : props.NCheight === "equalto90"
    ? tw`  h-11/12 `
    : tw``,

  props.NCheightmd === "full"
    ? tw` md:h-full`
    : props.NCheightmd === "onebytwo"
    ? tw`  md:h-1/2 `
    : props.NCheightmd === "onebyfour"
    ? tw`  md:h-1/4 `
    : props.NCheightmd === "threebyfour"
    ? tw`  md:h-3/4 `
    : props.NCheightmd === "screen"
    ? tw`  md:h-screen `
    : props.NCheightmd === "screenhalf"
    ? tw`  md:h-half `
    : props.NCheightmd === "equalto95"
    ? tw`  md:h-less `
    : props.NCheightmd === "equalto90"
    ? tw`  md:h-11/12 `
    : tw``,

  props.NCheightlg === "full"
    ? tw` lg:h-full`
    : props.NCheightlg === "onebytwo"
    ? tw`  lg:h-1/2 `
    : props.NCheightlg === "onebyfour"
    ? tw`  lg:h-1/4 `
    : props.NCheightlg === "threebyfour"
    ? tw`  lg:h-3/4 `
    : props.NCheightlg === "screen"
    ? tw`  lg:h-screen `
    : props.NCheightlg === "screenhalf"
    ? tw`  lg:h-half `
    : props.NCheightlg === "equalto95"
    ? tw`  lg:h-less `
    : props.NCheightlg === "equalto90"
    ? tw`  lg:h-11/12 `
    : tw``,

  props.NCmargin === "margin1"
    ? tw` m-1`
    : props.NCmargin === "margin2"
    ? tw`  m-2 `
    : props.NCmargin === "margin4"
    ? tw`  m-4 `
    : props.NCmargin === "margintop1"
    ? tw` mt-1`
    : props.NCmargin === "margintop2"
    ? tw`  mt-2 `
    : props.NCmargin === "margintop4"
    ? tw`  mt-4 `
    : props.NCmargin === "marginbottom1"
    ? tw` -mt-1`
    : props.NCmargin === "marginbottom2"
    ? tw`  -mt-2 `
    : props.NCmargin === "marginbottom4"
    ? tw`  -mt-4 `
    : props.NCmargin === "marginleft1"
    ? tw` ml-1`
    : props.NCmargin === "marginleft2"
    ? tw`  ml-2 `
    : props.NCmargin === "marginleft4"
    ? tw`  ml-4 `
    : props.NCmargin === "marginright1"
    ? tw` -ml-1`
    : props.NCmargin === "marginright2"
    ? tw`  -ml-2 `
    : props.NCmargin === "marginright4"
    ? tw`  -ml-4 `
    : props.NCmargin === "marginx1"
    ? tw`  mx-1 `
    : props.NCmargin === "marginx2"
    ? tw`  mx-2 `
    : props.NCmargin === "marginx4"
    ? tw`  mx-4 `
    : props.NCmargin === "marginx1"
    ? tw` my-1`
    : props.NCmargin === "marginx2"
    ? tw` my-2 `
    : props.NCmargin === "marginx4"
    ? tw` my-4 `
    : props.NCmargin === "margintopsm"
    ? tw` mt-12`
    : props.NCmargin === "margintopmd"
    ? tw`  mt-32 `
    : props.NCmargin === "margintoplg"
    ? tw`  mt-64 `
    : props.NCmargin === "margintopxl"
    ? tw`  mt-80 `
    : props.NCmargin === "marginbottomsm"
    ? tw` -mt-12`
    : props.NCmargin === "marginbottommd"
    ? tw`  -mt-32 `
    : props.NCmargin === "marginbottomlg"
    ? tw`  -mt-64 `
    : props.NCmargin === "marginbottomxl"
    ? tw`  -mt-80 `
    : props.NCmargin === "marginrightsm"
    ? tw` -ml-12`
    : props.NCmargin === "marginrightmd"
    ? tw`  -ml-32 `
    : props.NCmargin === "marginrightlg"
    ? tw`  -ml-64 `
    : props.NCmargin === "marginrightxl"
    ? tw`  -ml-80 `
    : props.NCmargin === "marginleftsm"
    ? tw` ml-12`
    : props.NCmargin === "marginleftmd"
    ? tw`  ml-32 `
    : props.NCmargin === "marginleftlg"
    ? tw`  ml-64 `
    : props.NCmargin === "marginleftxl"
    ? tw`  ml-80 `
    : tw``,

  props.NCpadding === "padding1"
    ? tw` p-1`
    : props.NCpadding === "padding2"
    ? tw`  p-2 `
    : props.NCpadding === "padding4"
    ? tw`  p-4 `
    : props.NCpadding === "paddingtop1"
    ? tw` pt-1`
    : props.NCpadding === "paddingtop2"
    ? tw`  pt-2 `
    : props.NCpadding === "paddingtop4"
    ? tw`  pt-4 `
    : props.NCpadding === "paddingbottom1"
    ? tw`pb-1`
    : props.NCpadding === "paddingbottom2"
    ? tw` pb-2 `
    : props.NCpadding === "paddingbottom4"
    ? tw` pb-4 `
    : props.NCpadding === "paddingleft1"
    ? tw`pl-1`
    : props.NCpadding === "paddingleft2"
    ? tw` pl-2 `
    : props.NCpadding === "paddingleft4"
    ? tw` pl-4 `
    : props.NCpadding === "paddingright1"
    ? tw` pr-1`
    : props.NCpadding === "paddingright2"
    ? tw`  pr-2 `
    : props.NCpadding === "paddingright4"
    ? tw`  pr-4 `
    : props.NCpaddingx === "paddingx1"
    ? tw`  px-1 `
    : props.NCpadding === "paddingtopsm"
    ? tw` pt-12`
    : props.NCpadding === "paddingtopmd"
    ? tw`  pt-32 `
    : props.NCpadding === "paddingtoplg"
    ? tw`  pt-64 `
    : props.NCpadding === "paddingtopxl"
    ? tw`  pt-80 `
    : props.NCpadding === "paddingbottomsm"
    ? tw` pb-12`
    : props.NCpadding === "paddingbottommd"
    ? tw`  pb-32 `
    : props.NCpadding === "paddingbottomlg"
    ? tw`  pb-64 `
    : props.NCpadding === "paddingbottomxl"
    ? tw`  pb-80 `
    : props.NCpadding === "paddingrightsm"
    ? tw` pr-12`
    : props.NCpadding === "paddingrightmd"
    ? tw`  pr-32 `
    : props.NCpadding === "paddingrightlg"
    ? tw`  pr-64 `
    : props.NCpadding === "paddingrightxl"
    ? tw`  pr-80 `
    : props.NCpadding === "paddingleftsm"
    ? tw` pl-12`
    : props.NCpadding === "paddingleftmd"
    ? tw`  pl-32 `
    : props.NCpadding === "paddingleftlg"
    ? tw`  pl-64 `
    : props.NCpadding === "paddingleftxl"
    ? tw`  pl-80 `
    : tw``,

  props.NCpaddingx === "paddingx2"
    ? tw`  px-2 `
    : props.NCpaddingx === "paddingx4"
    ? tw`  px-4 `
    : props.NCpaddingx === "paddingx8"
    ? tw`  px-8 `
    : tw``,

  props.NCpaddingy === "paddingy1"
    ? tw`  py-1`
    : props.NCpaddingy === "paddingy2"
    ? tw`  py-2 `
    : props.NCpaddingy === "paddingy4"
    ? tw`  py-4 `
    : props.NCpaddingy === "paddingy20"
    ? tw`  py-20 `
    : tw``,

  props.NCbgcolor === "Primary"
    ? tw` bg-red-700`
    : props.NCbgcolor === "transparent"
    ? tw` bg-transparent `
    : props.NCbgcolor === "white"
    ? tw` bg-white `
    : props.NCbgcolor === "black"
    ? tw` bg-black `
    : props.NCbgcolor === "tan"
    ? tw` bg-colorPrimaryBg `
    : props.NCbgcolor === "nav"
    ? tw` bg-colorSecondary `
    : props.NCbgcolor === "pink"
    ? tw` bg-red-500 `
    : tw``,

  props.NCdisplayhide === "displayhide"
    ? tw` xsm:hidden`
    : props.NCdisplayhide === "displayhidesm"
    ? tw` sm:hidden`
    : props.NCdisplayhide === "displayhidemd"
    ? tw` md:hidden `
    : props.NCdisplayhide === "displayhidelg"
    ? tw` lg:hidden  `
    : tw``,

  props.NCdisplayblock === "displayblock"
    ? tw` xsm:block`
    : props.NCdisplayblock === "displayblocksm"
    ? tw` sm:block`
    : props.NCdisplayblock === "displayblockmd"
    ? tw` md:block`
    : props.NCdisplayblock === "displayblocklg"
    ? tw` lg:block`
    : tw``,

  props.NCdisplayinline === "displayinlinesm"
    ? tw` sm:inline`
    : props.NCdisplayinline === "displayinlinekmd"
    ? tw` md:inline`
    : props.NCdisplayinline === "displayinlinelg"
    ? tw` lg:inline`
    : tw``,

  props.NCflex === "itemsrow"
    ? tw` flex `
    : props.NCflex === "itemscol"
    ? tw` flex flex-col `
    : tw``,

  props.NCflexmd === "itemsrow"
    ? tw` md:flex-row`
    : props.NCflex === "itemscol"
    ? tw` flex md:flex-col `
    : tw``,

  props.Possition === "absolute"
    ? tw` absolute`
    : props.Possition === "fixed"
    ? tw` fixed `
    : props.Possition === "static"
    ? tw` static `
    : tw``,

  props.NCflexdirection === "itemscenter"
    ? tw` flex justify-center items-center`
    : props.NCflex === "evenly"
    ? tw` flex  items-center justify-evenly `
    : props.NCflex === "between"
    ? tw` flex  items-center justify-between `
    : tw``,

  props.NCflexwrap === "wrap"
    ? tw` flex flex-wrap`
    : props.NCflexwrap === "wrapreverse"
    ? tw` flex flex-wrap-reverse`
    : props.NCflexwrap === "nowrap"
    ? tw` flex flex-nowrap`
    : tw``,

  props.NCflexgap === "flexgapsm"
    ? tw` gap-2`
    : props.NCflexgap === "flexgapmd"
    ? tw` gap-4 `
    : props.NCflexgap === "flexgaplg"
    ? tw`  gap-6 `
    : props.NCflexgap === "flexgapxl"
    ? tw` gap-8 `
    : tw``,

  props.NCresponsive === "responsive" ? tw` flex flex-col md:flex-row` : tw``,

  props.NCoverflow === "overflowhide" ? tw` overflow-hidden` : tw``,

  props.NCsticky === "stickontop"
    ? tw` sticky top-0`
    : props.NCsticky === "stickbelowTop"
    ? tw` sticky top-1`
    : props.NCsticky === "stickonmid"
    ? tw` sticky top-1/2`
    : tw``,

  props.NCrounded === "full"
    ? tw`rounded-full`
    : props.NCrounded === "rounded"
    ? tw`rounded`
    : props.NCrounded === "5"
    ? tw`rounded-5xl`
    : props.NCrounded === "4"
    ? tw`rounded-4xl`
    : props.NCrounded === "3"
    ? tw`rounded-3xl`
    : props.NCrounded === "2"
    ? tw`rounded-2xl`
    : props.NCrounded === "1"
    ? tw`rounded-xl`
    : tw``,

  props.NCborder === "bordersolide1"
    ? tw` border-solid border `
    : props.NCborder === "bordersolide2"
    ? tw` border-solid border-2 `
    : props.NCborder === "bordersolide4"
    ? tw` border-solid border-4 `
    : tw``,

  props.NCbordercolor === "primary"
    ? tw` border-black  `
    : props.NCbordercolor === "secondary"
    ? tw` border-blue-300 `
    : props.NCbordercolor === "random"
    ? tw` border-sitecolor-900 `
    : tw``,

  props.NCzindex === "zindex0"
    ? tw` z-0  `
    : props.NCzindex === "zindex1"
    ? tw` z-10 `
    : props.NCzindex === "zindex2"
    ? tw` z-20 `
    : props.NCzindex === "zindex3"
    ? tw` z-30 `
    : props.NCzindex === "zindex4"
    ? tw` z-40 `
    : tw``,
  props.NCtextcolor === "colorPrimarySh"
    ? tw`text-colorPrimarySh `
    : props.NHtextcolor === "colorPrimaryH"
    ? tw`text-colorPrimaryH `
    : tw``,
]);

// const Image = tw.img`w-full h-8/12 bg-white`;

export const Image = styled.img((props) => [
  tw`relative `,

  props.Possition === "absolute"
    ? tw` absolute`
    : props.Possition === "fixed"
    ? tw` fixed `
    : props.Possition === "static"
    ? tw` static `
    : tw``,

  props.Imgwidth === "full"
    ? tw` w-full`
    : props.Imgwidth === "onebytwo"
    ? tw`  w-1/2 `
    : props.Imgwidth === "onebyfour"
    ? tw`  w-1/4 `
    : props.Imgwidth === "threebyfour"
    ? tw`  w-3/4 `
    : props.Imgwidth === "screen"
    ? tw`  w-screen `
    : props.Imgwidth === "screenhalf"
    ? tw`  w-half `
    : props.Imgwidth === "equalto90"
    ? tw`  w-less `
    : props.Imgwidth === "equalto95"
    ? tw`  w-11/12 `
    : props.Imgwidth === "equalto33"
    ? tw`  w-8/12 `
    : props.Imgwidth === "width4"
    ? tw`  w-4 `
    : props.Imgwidth === "width8"
    ? tw`  w-8 `
    : props.Imgwidth === "width16"
    ? tw`  w-16 `
    : props.Imgwidth === "width32"
    ? tw`  w-32 `
    : tw``,

  props.Imgwidthmd === "full"
    ? tw` md:w-full`
    : props.Imgwidthmd === "onebytwo"
    ? tw`  md:w-1/2 `
    : props.Imgwidthmd === "onebyfour"
    ? tw`  md:w-1/4 `
    : props.Imgwidthmd === "threebyfour"
    ? tw`  md:w-3/4 `
    : props.Imgwidthmd === "screen"
    ? tw`  md:w-screen `
    : props.Imgwidthmd === "screenhalf"
    ? tw`  md:w-half `
    : props.Imgwidthmd === "equalto90"
    ? tw`  md:w-less `
    : props.Imgwidthmd === "equalto95"
    ? tw`  md:w-11/12 `
    : tw``,

  props.Imgwidthlg === "full"
    ? tw` lg:w-full`
    : props.Imgwidthlg === "onebytwo"
    ? tw`  lg:w-1/2 `
    : props.Imgwidthlg === "onebyfour"
    ? tw`  lg:w-1/4 `
    : props.Imgwidthlg === "threebyfour"
    ? tw`  lg:w-3/4 `
    : props.Imgwidthlg === "screen"
    ? tw`  lg:w-screen `
    : props.Imgwidthlg === "screenhalf"
    ? tw`  lg:w-half `
    : props.Imgwidthlg === "equalto90"
    ? tw`  lg:w-less `
    : props.Imgwidthlg === "equalto95"
    ? tw`  lg:w-11/12 `
    : tw``,

  props.Imgheight === "full"
    ? tw` h-full`
    : props.Imgheight === "onebytwo"
    ? tw`  h-1/2 `
    : props.Imgheight === "onebyfour"
    ? tw`  h-1/4 `
    : props.Imgheight === "threebyfour"
    ? tw`  h-3/4 `
    : props.Imgheight === "screen"
    ? tw`  h-screen `
    : props.Imgheight === "screenhalf"
    ? tw`  h-half `
    : props.Imgheight === "equalto95"
    ? tw`  h-less `
    : props.Imgheight === "equalto90"
    ? tw`  h-11/12 `
    : props.Imgheight === "equalto33"
    ? tw`  h-8/12 `
    : props.Imgheight === "height4"
    ? tw`  h-4 `
    : props.Imgheight === "height8"
    ? tw`  h-8 `
    : props.Imgheight === "height16"
    ? tw`  h-16 `
    : props.Imgheight === "height32"
    ? tw`  h-32 `
    : tw``,

  props.Imgheightmd === "full"
    ? tw` md:h-full`
    : props.Imgheightmd === "onebytwo"
    ? tw`  md:h-1/2 `
    : props.Imgheightmd === "onebyfour"
    ? tw`  md:h-1/4 `
    : props.Imgheightmd === "threebyfour"
    ? tw`  md:h-3/4 `
    : props.Imgheightmd === "screen"
    ? tw`  md:h-screen `
    : props.Imgheightmd === "screenhalf"
    ? tw`  md:h-half `
    : props.Imgheightmd === "equalto95"
    ? tw`  md:h-less `
    : props.Imgheightmd === "equalto90"
    ? tw`  md:h-11/12 `
    : tw``,

  props.Imgheightlg === "full"
    ? tw` lg:h-full`
    : props.Imgheightlg === "onebytwo"
    ? tw`  lg:h-1/2 `
    : props.Imgheightlg === "onebyfour"
    ? tw`  lg:h-1/4 `
    : props.Imgheightlg === "threebyfour"
    ? tw`  lg:h-3/4 `
    : props.Imgheightlg === "screen"
    ? tw`  lg:h-screen `
    : props.Imgheightlg === "screenhalf"
    ? tw`  lg:h-half `
    : props.Imgheightlg === "equalto95"
    ? tw`  lg:h-less `
    : props.Imgheightlg === "equalto90"
    ? tw`  lg:h-11/12 `
    : tw``,
]);
