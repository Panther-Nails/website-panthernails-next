import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Slider from "react-slick";

export const Container = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,

  tw`relative  items-center justify-center text-center bg-colorPrimary`,
  props.backgroundColor === "lightblue" ? tw`bg-red-500` : tw``,
]);

export const ContainerWithTwoCol = styled.div((props) => [tw`flex flex-col `]);
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto `;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto `;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-12 ml-5`; //lg:py-24 to lg:py-12 for home page image upside
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;

//Durgesh
//For Home.js page FeatureStats
export const ContentWithPaddingForHomePage = tw.div`w-screen mx-auto py-20 lg:py-24 bg-blue-300 rounded-lg bg-blue-300 h-full `;
export const Body = tw.div`h-full w-screen `;
export const HighlightedTextSpan = tw.span`text-primary-500`;
export const StickyContainer = tw.div`relative pt-0  top-0 -z-50 lg:sticky`;
export const Column = tw.div`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl ml-0`;

export const CardGrid = styled.div`
  ${tw`flex sm:w-cardGridWidth gap-6 py-5  lg:w-screen px-16 justify-center text-left lg:flex-wrap lg:flex-row  overflow-x-auto `}
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div((props) => [
  tw`flex w-72 flex-col items-start bg-cardPrimary p-4 pb-8 shadow-lg mb-4  rounded-lg relative overflow-hidden `,
  handleProps(props),
]);

export const CardImage = styled.img((props) => [
  tw`w-full h-40 bg-cover mb-5 ease-in-out duration-300 hover:scale-110`,
  props.roundedImage === "roundedImage"
    ? tw`w-24 h-24  bg-cover rounded-full ml-20 shadow-lg shadow-gray-700 `
    : "",
]);

export const CardContent = tw.div`ml-6 mb-6 mt-3 mr-2`;

export const Image = styled.img((props) => [tw`bg-cover h-full w-full`]);

export const CardSlider = styled(Slider)`
  ${tw`mt-16 flex flex-row gap-6 py-5 w-screen  justify-between  text-left pl-12 pr-12 lg:flex-wrap`}
  .slick-track {
    ${tw`justify-between `}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1 `}
  }
`;

//Function used for using props in another components
const handleProps = (props) => {
  return props.rounded === "full"
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
    : // :props.backgroundColor === "dark green"
      // ? tw`bg-green-800`
      // : props.backgroundColor === "light green"
      // ? tw`bg-green-300`
      // : props.backgroundColor === "green"
      // ? tw`bg-green-500`
      // : props.backgroundColor === "dark red"
      // ? tw`bg-red-800`
      // : props.backgroundColor === "light red"
      // ? tw`bg-red-300`
      // : props.backgroundColor === "red"
      // ? tw`bg-red-500`
      // : props.backgroundColor === "dark blue"
      // ? tw`bg-blue-800`
      // : props.backgroundColor === "light blue"
      // ? tw`bg-blue-300`
      // : props.backgroundColor === "blue"
      // ? tw`bg-blue-500`
      tw``;
};
