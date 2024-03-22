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

export const NewContainer  = styled.div((props) => [
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

  props.NCmargin === "margin~1"
    ? tw` m-1`
    : props.NCmargin === "margin~2"
    ? tw`  m-2 `
    : props.NCmargin === "margin~4"
    ? tw`  m-4 `
    : props.NCmargin === "margin~top1"
    ? tw` mt-1`
    : props.NCmargin === "margin~top2"
    ? tw`  mt-2 `
    : props.NCmargin === "margin~top4"
    ? tw`  mt-4 `
    : props.NCmargin === "margin~bottom1"
    ? tw` -mt-1`
    : props.NCmargin === "margin~bottom2"
    ? tw`  -mt-2 `
    : props.NCmargin === "margin~bottom4"
    ? tw`  -mt-4 `
    : props.NCmargin === "margin~left1"
    ? tw` ml-1`
    : props.NCmargin === "margin~left2"
    ? tw`  ml-2 `
    : props.NCmargin === "margin~left4"
    ? tw`  ml-4 `
    : props.NCmargin === "margin~right1"
    ? tw` -ml-1`
    : props.NCmargin === "margin~right2"
    ? tw`  -ml-2 `
    : props.NCmargin === "margin~right4"
    ? tw`  -ml-4 `
    : props.NCmargin === "margin~x1"
    ? tw`  mx-1 `
    : props.NCmargin === "margin~x2"
    ? tw`  mx-2 `
    : props.NCmargin === "margin~x4"
    ? tw`  mx-4 `
    : props.NCmargin === "margin~x1"
    ? tw` my-1`
    : props.NCmargin === "margin~x2"
    ? tw` my-2 `
    : props.NCmargin === "margin~x4"
    ? tw` my-4 `
    : props.NCmargin === "margin~top~sm"
    ? tw` mt-12`
    : props.NCmargin === "margin~top~md"
    ? tw`  mt-32 `
    : props.NCmargin === "margin~top~lg"
    ? tw`  mt-64 `
    : props.NCmargin === "margin~top~xl"
    ? tw`  mt-80 `
    : props.NCmargin === "margin~bottom~sm"
    ? tw` -mt-12`
    : props.NCmargin === "marginbottommd"
    ? tw`  -mt-32 `
    : props.NCmargin === "margin~bottom~lg"
    ? tw`  -mt-64 `
    : props.NCmargin === "margin~bottom~xl"
    ? tw`  -mt-80 `
    : props.NCmargin === "margin~right~sm"
    ? tw` -ml-12`
    : props.NCmargin === "margin~right~md"
    ? tw`  -ml-32 `
    : props.NCmargin === "margin~right~lg"
    ? tw`  -ml-64 `
    : props.NCmargin === "margin~right~xl"
    ? tw`  -ml-80 `
    : props.NCmargin === "margin~left~sm"
    ? tw` ml-12`
    : props.NCmargin === "margin~left~md"
    ? tw`  ml-32 `
    : props.NCmargin === "margin~left~lg"
    ? tw`  ml-64 `
    : props.NCmargin === "margin~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NCpadding === "padding1"
    ? tw` p-1`
    : props.NCpadding === "padding2"
    ? tw`  p-2 `
    : props.NCpadding === "padding4"
    ? tw`  p-4 `
    : props.NCpadding === "padding~top1"
    ? tw` pt-1`
    : props.NCpadding === "padding~top2"
    ? tw`  pt-2 `
    : props.NCpadding === "padding~top4"
    ? tw`  pt-4 `
    : props.NCpadding === "padding~bottom1"
    ? tw`pb-1`
    : props.NCpadding === "padding~bottom2"
    ? tw` pb-2 `
    : props.NCpadding === "padding~bottom4"
    ? tw` pb-4 `
    : props.NCpadding === "padding~left1"
    ? tw`pl-1`
    : props.NCpadding === "padding~left2"
    ? tw` pl-2 `
    : props.NCpadding === "padding~left4"
    ? tw` pl-4 `
    : props.NCpadding === "padding~right1"
    ? tw` pr-1`
    : props.NCpadding === "padding~right2"
    ? tw`  pr-2 `
    : props.NCpadding === "paddingright4"
    ? tw`  pr-4 `
    : props.NCpadding === "padding~x1"
    ? tw`  mx-1 `
    : props.NCpadding === "padding~x2"
    ? tw`  mx-2 `
    : props.NCpadding === "padding~x4"
    ? tw`  mx-4 `
    : props.NCpadding === "padding~x1"
    ? tw`  my-1`
    : props.NCpadding === "padding~x2"
    ? tw`  my-2 `
    : props.NCpadding === "padding~x4"
    ? tw`  my-4 `
    : props.NCpadding === "padding~top~sm"
    ? tw` mt-12`
    : props.NCpadding === "padding~top~md"
    ? tw`  mt-32 `
    : props.NCpadding === "padding~top~lg"
    ? tw`  mt-64 `
    : props.NCpadding === "padding~top~xl"
    ? tw`  mt-80 `
    : props.NCpadding === "padding~bottom~sm"
    ? tw` -mt-12`
    : props.NCpadding === "padding~bottom~md"
    ? tw`  -mt-32 `
    : props.NCpadding === "padding~bottom~lg"
    ? tw`  -mt-64 `
    : props.NCpadding === "padding~bottom~xl"
    ? tw`  -mt-80 `
    : props.NCpadding === "padding~right~sm"
    ? tw` -ml-12`
    : props.NCpadding === "padding~right~md"
    ? tw`  -ml-32 `
    : props.NCpadding === "padding~right~lg"
    ? tw`  -ml-64 `
    : props.NCpadding === "padding~right~xl"
    ? tw`  -ml-80 `
    : props.NCpadding === "padding~left~sm"
    ? tw` ml-12`
    : props.NCpadding === "padding~left~md"
    ? tw`  ml-32 `
    : props.NCpadding === "padding~left~lg"
    ? tw`  ml-64 `
    : props.NCpadding === "padding~left~xl"
    ? tw`  ml-80 `
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
    ? tw` bg-sitecolor-500 `
    : tw``,

  props.NCdisplayhide === "displayhide"
    ? tw` xsm:hidden`
    :props.NCdisplayhide === "displayhidesm"
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
    ? tw` flex`
    : props.NCflex === "itemscol"
    ? tw` flex flex-col `
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
]);


// const Image = tw.img`w-full h-8/12 bg-white`;


export const Image  = styled.img((props) => [
  tw`relative `,

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