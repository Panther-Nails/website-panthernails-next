import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Slider from "react-slick";
import { getStyle } from "components/DynamicControls/Controls";

export let Container = styled.div((props) => [
  tw`relative  justify-center text-center bg-colorPrimary bg-no-repeat bg-cover`,
  css`
    ${getStyle(props)}
  `,
  props.backgroundColor === "lightblue" ? tw`bg-red-500` : tw``,
  // props.textOn === "left" ? tw`md:order-first` : tw`md:order-last`,
  // props.textOn === "right" ? tw`md:order-last` : tw`md:order-first`,
]);

export const FullScreenContainer = styled.div((props) => [
  tw`h-screen  bg-colorPrimary`,
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
  ${tw`flex sm:w-cardGridWidth gap-6 py-5  lg:w-screen px-16 justify-center text-left flex-wrap lg:flex-row  overflow-x-auto `}
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div((props) => [
  tw`flex w-72 flex-col items-start bg-cardPrimary p-4 pb-8 shadow-lg mb-4 relative  overflow-hidden `,
  css`
    ${getStyle(props)}
  `,
]);
export const CardImage = styled.img((props) => [
  tw`w-full h-40 bg-cover mb-5 ease-in-out duration-300 hover:scale-110`,
  props.roundedImage === "roundedImage"
    ? tw`w-24 h-24  bg-cover rounded-full ml-20 shadow-lg shadow-gray-700 `
    : "",
]);

export const CardContent = tw.div`ml-6 mb-6 mt-3 mr-2`;

export const Image = styled.img((props) => [
  tw`bg-cover sm:block h-full w-full `,
]);

export const CardSlider = styled(Slider)`
  ${tw`flex flex-row w-screen justify-center  text-left lg:flex-col`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw` `}
  }
  .slick-list {
    ${tw``}
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
    : tw``;
};

export const ImageContainer = styled.div((props) => [tw``]);
export const TextContent = tw.div`lg:py-8 text-center md:text-left`;

export const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const ColumnDynamic = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
export const ImageColumn = tw(ColumnDynamic)`md:w-6/12 flex-shrink-0 relative`;

export const TextColumn = styled(ColumnDynamic)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

export const cardStyle = ({ props }) => [
  props.rotate === true ? tw`lg:-rotate-5` : tw``,
  props.bordered === true ? tw`border border-gray-300` : "",
  props.rounded === true ? tw`rounded-lg` : tw``,
];

export const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
export const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
