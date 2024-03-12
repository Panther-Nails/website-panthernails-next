import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div((props) => [
  tw`relative pt-0 items-center justify-center text-center`,
  handleProps(props),
]);

export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 `;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-12 ml-5`; //lg:py-24 to lg:py-12 for home page image upside
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;

//Durgesh

//For Home.js page FeatureStats
export const ContentWithPaddingForHomePage = tw.div`w-screen mx-auto py-20 lg:py-24 bg-blue-300 rounded-lg bg-blue-300 h-full `;
export const Body = tw.div`h-full w-screen `;
export const HighlightedTextSpan = tw.span`text-primary-500`;
export const StickyContainer = tw.div`relative pt-0  top-0 -z-50 lg:sticky`;

//serviceSection cards Gridcard
export const ContainerForCardsSections = tw.div`flex flex-col w-screen mx-auto bg-gray-300 items-center justify-center min-h-screen py-8`;

// export const Card = styled.div`
//   ${tw`bg-gray-100 p-4 pb-8 rounded-xl shadow-lg w-72 mb-4 `}
// `;

export const CardGrid = styled.div`
  ${tw`flex flex-col md:flex-row overflow-x-hidden gap-6 pt-5 pb-5 `}
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div((props) => [
  tw`bg-gray-100 p-4 pb-8 shadow-lg w-72 mb-4 sm:flex-shrink rounded-lg `,
  handleProps(props),
]);

export const CardImage = styled.img((props) => [
  tw`w-full h-40 bg-cover mb-5 rounded-xl`,

  handleProps(props),
]);

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
