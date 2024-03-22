import tw from "twin.macro";
import styled from "styled-components";
const PrimaryButton1 = tw.button`       hocus:(bg-green-900 animate-none) `;

// export const PrimaryButton = tw.button`px-8 py-3 my-8 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-sitecolor-900 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
// //chenge after hover bg primary to green-900 14-2-24

export const PrimaryButton = styled.button((props) => [
  tw`px-8 py-3 my-6 font-bold rounded bg-primary-500 3xl:text-xl text-gray-100 hocus:bg-sitecolor-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`,
  props.Rounded === "Full"
    ? tw`rounded-full`
    : props.Rounded === "RoundedFullBgGreen"
    ? tw` bg-green-600 rounded-full`
    : props.Rounded === "RoundedFullAnimation"
    ? tw` rounded-full animate-bounce`
    : props.Rounded === "RoundedFullAnimationBgGreen"
    ? tw`rounded-full my-6 animate-bounce bg-green-600`
    : props.Rounded === "RoundedHalfAnimationBgGreen"
    ? tw`rounded-lg animate-bounce bg-green-600  `
    : props.Rounded === "RoundedHalfbgbrown"
    ? tw`rounded-lg  bg-sitecolor-300  `
    : tw``,
]);

export const Card = styled.div((props) => [
  tw`bg-gray-100 p-4 pb-8 shadow-lg w-72 mb-4`,
  props.rounded === "full"
    ? tw`rounded-full`
    : props.rounded === "5"
    ? tw`rounded-5xl`
    : props.rounded === "4"
    ? tw`rounded-4xl`
    : props.rounded === "3"
    ? tw`rounded-3xl`
    : props.rounded === "2"
    ? tw`rounded-2xl`
    : props.rounded === "1"
    ? tw`rounded-xl`
    : tw``,
]);

export const NewPrimaryButton = styled.button((props) => [
  tw``,
  props.rounded === "full"
    ? tw`rounded-full`
    : props.rounded === "5"
    ? tw`rounded-5xl`
    : props.rounded === "4"
    ? tw`rounded-4xl`
    : props.rounded === "3"
    ? tw`rounded-3xl`
    : props.rounded === "2"
    ? tw`rounded-2xl`
    : props.rounded === "1"
    ? tw`rounded-xl`
    : props.rounded === "0"
    ? tw`rounded-lg`
    : tw``,

  props.NBbgcolor === "Primary"
    ? tw` bg-red-700`
    : props.NBbgcolor === "transparent"
    ? tw` bg-transparent `
    : props.NBbgcolor === "white"
    ? tw` bg-white `
    : props.NBbgcolor === "black"
    ? tw` bg-black `
    : props.NBbgcolor === "tan"
    ? tw` bg-colorPrimaryBg `
    : props.NBbgcolor === "nav"
    ? tw` bg-sitecolor-500 `
    : props.NBbgcolor === "btnPrimary"
    ? tw` bg-green-600 `
    : props.NBbgcolor === "btnSecendary"
    ? tw` bg-sitecolor-300 `
    : props.NBbgcolor === "btnthird"
    ? tw` bg-sitecolor-1000 `
    : tw``,
    
  props.NBbganimation === "bounce"
    ? tw`animate-bounce duration-300`
    : props.NBbganimation === "scale"
    ? tw`hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline duration-200`
    : tw``,

  props.NBmargin === "margin~1"
    ? tw` m-1`
    : props.NBmargin === "margin~2"
    ? tw`  m-2 `
    : props.NBmargin === "margin4"
    ? tw`  m-4 `
    : props.NBmargin === "margin~top1"
    ? tw` mt-1`
    : props.NBmargin === "margin~top2"
    ? tw`  mt-2 `
    : props.NBmargin === "margintop4"
    ? tw`  mt-4 `
    : props.NBmargin === "margin~bottom1"
    ? tw` -mt-1`
    : props.NBmargin === "margin~bottom2"
    ? tw`  -mt-2 `
    : props.NBmargin === "margin~bottom4"
    ? tw`  -mt-4 `
    : props.NBmargin === "margin~left1"
    ? tw` ml-1`
    : props.NBmargin === "margin~left2"
    ? tw`  ml-2 `
    : props.NBmargin === "margin~left4"
    ? tw`  ml-4 `
    : props.NBmargin === "margin~right1"
    ? tw` -ml-1`
    : props.NBmargin === "margin~right2"
    ? tw`  -ml-2 `
    : props.NBmargin === "margin~right4"
    ? tw`  -ml-4 `
    : props.NBmargin === "margin~x1"
    ? tw`  mx-1 `
    : props.NBmargin === "margin~x2"
    ? tw`  mx-2 `
    : props.NBmargin === "margin~x4"
    ? tw`  mx-4 `
    : props.NBmargin === "marginy1"
    ? tw` my-1`
    : props.NBmargin === "marginy2"
    ? tw` my-2 `
    : props.NBmargin === "marginy4"
    ? tw` my-4 `
    : props.NBmargin === "margin~top~sm"
    ? tw` mt-12`
    : props.NBmargin === "margin~top~md"
    ? tw`  mt-32 `
    : props.NBmargin === "margin~top~lg"
    ? tw`  mt-64 `
    : props.NBmargin === "margin~top~xl"
    ? tw`  mt-80 `
    : props.NBmargin === "margin~bottom~sm"
    ? tw` -mt-12`
    : props.NBmargin === "marginbottommd"
    ? tw`  -mt-32 `
    : props.NBmargin === "margin~bottom~lg"
    ? tw`  -mt-64 `
    : props.NBmargin === "margin~bottom~xl"
    ? tw`  -mt-80 `
    : props.NBmargin === "margin~right~sm"
    ? tw` -ml-12`
    : props.NBmargin === "margin~right~md"
    ? tw`  -ml-32 `
    : props.NBmargin === "margin~right~lg"
    ? tw`  -ml-64 `
    : props.NBmargin === "margin~right~xl"
    ? tw`  -ml-80 `
    : props.NBmargin === "margin~left~sm"
    ? tw` ml-12`
    : props.NBmargin === "margin~left~md"
    ? tw`  ml-32 `
    : props.NBmargin === "margin~left~lg"
    ? tw`  ml-64 `
    : props.NBmargin === "margin~left~xl"
    ? tw`  ml-80 `
    : tw``,

  props.NBpadding === "paddingx1"
    ? tw`  px-1 `
    : props.NBpadding === "paddingx2"
    ? tw`  px-2 `
    : props.NBpadding === "paddingx3"
    ? tw`  px-3 `
    : props.NBpadding === "paddingx4"
    ? tw`  px-4 `
    : props.NBpadding === "paddingx6"
    ? tw`  px-6 `
    : props.NBpadding === "paddingx8"
    ? tw`  px-8 `
    : props.NBpadding === "paddingx10"
    ? tw`  px-10 `
    : props.NBpadding === "paddingx12"
    ? tw`  px-12 `
    : props.NBpadding === "paddingx16"
    ? tw`  px-16 `
    : tw``,

  props.NBpaddingy === "paddingy1"
    ? tw`  py-1 `
    : props.NBpaddingy === "paddingy2"
    ? tw`  py-2 `
    : props.NBpaddingy === "paddingy3"
    ? tw`  py-3 `
    : props.NBpaddingy === "paddingy4"
    ? tw`  py-4 `
    : props.NBpaddingy === "paddingy6"
    ? tw`  py-6 `
    : props.NBpaddingy === "paddingy8"
    ? tw`  py-8 `
    : props.NBpaddingy === "paddingy10"
    ? tw`  py-10 `
    : props.NBpaddingy === "paddingy12"
    ? tw`  py-12 `
    : props.NBpaddingy === "paddingy16"
    ? tw`  py-16 `
    : tw``,

  props.NBhover === "bgchange"
    ? tw` hocus:bg-sitecolor-900 duration-300`
    : tw``,

  props.NBtext === "textsize" ? tw` md:text-lg 3xl:text-3xl` : tw``,
  props.NBtextcolor === "textwhite" ? tw` text-white` : tw``,
]);
