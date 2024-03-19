import tw, { styled, css } from "twin.macro";
import { setbg } from "components/misc/addstyle.js";

// Container = tw.div`bg-sitecolor-100 text-sitecolor-300   min-h-full w-full flex-col md:(flex flex-row ) items-center justify-center   `;
const a = "flex-col h-1/2   md:(w-1/2 h-screen )"; //you and use apply telwind like that

export const Container = styled.div((props) => [
  tw`relative overflow-hidden flex items-center gap-4 justify-center text-center  `,
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
    ? tw`lg:(h-screen w-full mt-0)  mt-4 h-1/2  flex-col   `
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
export const ContentWithPaddingXl = tw.div`max-w-screen-xl 2xl:(w-full  h-fourfifth) mx-auto py-20 lg:py-4`;
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
  ? tw`  h-1/4 `
  : props.NCwidth === "threebyfour"
  ? tw`  h-3/4 `
  : props.NCwidth === "screen"
  ? tw`  w-screen `
  : props.NCwidth === "screenhalf"
  ? tw`  w-half `
  : props.NCwidth === "equalto90"
  ? tw`  w-less `
  : props.NCwidth === "equalto95"
  ? tw`  w-11/12 `
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

  props.NCmargin === "margin~1"
  ? tw` m-1`
  : props.NCmargin === "margin~2"
  ? tw`  m-2 `
  : props.NCmargin === "margin~4"
  ? tw`  m-4 `
  :props.NCmargin === "margin~top1"
  ? tw` mt-1`
  : props.NCmargin === "margin~top2"
  ? tw`  mt-2 `
  : props.NCmargin === "margin~top4"
  ? tw`  mt-4 `
  :props.NCmargin === "margin~bottom1"
  ? tw` -mt-1`
  : props.NCmargin === "margin~bottom2"
  ? tw`  -mt-2 `
  : props.NCmargin === "margin~bottom4"
  ? tw`  -mt-4 `
  :props.NCmargin === "margin~left1"
  ? tw` ml-1`
  : props.NCmargin === "margin~left2"
  ? tw`  ml-2 `
  : props.NCmargin === "margin~left4"
  ? tw`  ml-4 `
  :props.NCmargin === "margin~right1"
  ? tw` -ml-1`
  : props.NCmargin === "margin~right2"
  ? tw`  -ml-2 `
  : props.NCmargin === "margin~right4"
  ? tw`  -ml-4 `
  : props.NCmargin === "margin~x1"
  ? tw`  px-1 `
  : props.NCmargin === "margin~x2"
  ? tw`  px-2 `
  : props.NCmargin === "margin~x4"
  ? tw`  px-4 `
  : props.NCmargin === "margin~x1"
  ? tw` py-1`
  : props.NCmargin === "margin~x2"
  ? tw` py-2 `
  : props.NCmargin === "margin~x4"
  ? tw` py-4 `
  :props.NCmargin === "margin~top~sm"
  ? tw` pt-12`
  : props.NCmargin === "margin~top~md"
  ? tw`  pt-32 `
  : props.NCmargin === "margin~top~lg"
  ? tw`  pt-64 `
  : props.NCmargin === "margin~top~xl"
  ? tw`  pt-80 `
  :props.NCmargin === "margin~bottom~sm"
  ? tw` pb-12`
  : props.NCmargin === "margin~bottom~md"
  ? tw`  pb-32 `
  : props.NCmargin === "margin~bottom~lg"
  ? tw`  pb-64 `
  : props.NCmargin === "margin~bottom~xl"
  ? tw`  pb-80 `
  :props.NCmargin === "margin~right~sm"
  ? tw` pr-12`
  : props.NCmargin === "margin~right~md"
  ? tw`  pr-32 `
  : props.NCmargin === "margin~right~lg"
  ? tw`  pr-64 `
  : props.NCmargin === "margin~right~xl"
  ? tw`  pr-80 `
  :props.NCmargin === "margin~left~sm"
  ? tw` pl-12`
  : props.NCmargin === "margin~left~md"
  ? tw`  pl-32 `
  : props.NCmargin === "margin~left~lg"
  ? tw`  pl-64 `
  : props.NCmargin === "margin~left~xl"
  ? tw`  pl-80 `
  : tw``,


  props.NCpadding === "padding~1"
  ? tw` p-1`
  : props.NCpadding === "padding~2"
  ? tw`  p-2 `
  : props.NCpadding === "padding~4"
  ? tw`  p-4 `
  :props.NCpadding === "padding~top1"
  ? tw` pt-1`
  : props.NCpadding === "padding~top2"
  ? tw`  pt-2 `
  : props.NCpadding === "padding~top4"
  ? tw`  pt-4 `
  :props.NCpadding === "padding~bottom1"
  ? tw`pb-1`
  : props.NCpadding === "padding~bottom2"
  ? tw` pb-2 `
  : props.NCpadding === "padding~bottom4"
  ? tw` pb-4 `
  :props.NCpadding === "padding~left1"
  ? tw`pl-1`
  : props.NCpadding === "padding~left2"
  ? tw` pl-2 `
  : props.NCpadding === "padding~left4"
  ? tw` pl-4 `
  :props.NCpadding === "padding~right1"
  ? tw` pr-1`
  : props.NCpadding === "padding~right2"
  ? tw`  pr-2 `
  : props.NCpadding === "padding~right4"
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
  :props.NCpadding === "padding~top~sm"
  ? tw` mt-12`
  : props.NCpadding === "padding~top~md"
  ? tw`  mt-32 `
  : props.NCpadding === "padding~top~lg"
  ? tw`  mt-64 `
  : props.NCpadding === "padding~top~xl"
  ? tw`  mt-80 `
  :props.NCpadding === "padding~bottom~sm"
  ? tw` -mt-12`
  : props.NCpadding === "padding~bottom~md"
  ? tw`  -mt-32 `
  : props.NCpadding === "padding~bottom~lg"
  ? tw`  -mt-64 `
  : props.NCpadding === "padding~bottom~xl"
  ? tw`  -mt-80 `
  :props.NCpadding === "padding~right~sm"
  ? tw` -ml-12`
  : props.NCpadding === "padding~right~md"
  ? tw`  -ml-32 `
  : props.NCpadding === "padding~right~lg"
  ? tw`  -ml-64 `
  : props.NCpadding === "padding~right~xl"
  ? tw`  -ml-80 `
  :props.NCpadding === "padding~left~sm"
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


  props.NCflexgap === "flexgapsm"
  ? tw` gap-2`
  : props.NCflexgap === "flexgapmd"
  ? tw` gap-4 `
  : props.NCflexgap === "flexgaplg"
  ? tw`  gap-6 `
  : props.NCflexgap === "flexgapxl"
  ? tw` gap-8 `
  : tw``,

  props.NCresponsive === "responsive"
  ? tw` flex flex-col md:flex-row`
  : tw``,

  props.NCoverflow === "overflowhide"
  ? tw` overflow-hidden`
  : tw``,

  props.NCsticky === "stickontop"
  ? tw` sticky top-0`
  :props.NCsticky === "stickonmid"
  ? tw` sticky top-1/2`
  : tw``,

  props.NCrounded === 'full'
  ? tw`rounded-full` 
  :props.NCrounded === '5' 
  ? tw`rounded-5xl` 
  :props.NCrounded === '4' 
  ? tw`rounded-4xl` 
  :props.NCrounded === '3' 
  ? tw`rounded-3xl` 
  :props.NCrounded === '2' 
  ? tw`rounded-2xl` 
  :props.NCrounded === '1' 
  ? tw`rounded-xl` 
  :tw``,





]);
