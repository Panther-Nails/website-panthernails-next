import tw from "twin.macro";
import styled from "styled-components";
const PrimaryButton1 = tw.button`       hocus:(bg-green-900 animate-none) `;

// export const PrimaryButton = tw.button`px-8 py-3 my-8 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-sitecolor-900 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
// //chenge after hover bg primary to green-900 14-2-24 

 
export const PrimaryButton = styled.button(props => [
    tw`px-8 py-3 my-8 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-sitecolor-900 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`,
    props.rounded === 'full'? tw`rounded-full` :
    props.animation === 'animation' ? tw`animate-bounce` :
    props.animation === 'animationnone' ? tw`animate-none` :
    props.bgcolor === 'green' ? tw`bg-green-600` :
    tw``,
  ]);

export const Card = styled.div(props => [
  tw`bg-gray-100 p-4 pb-8 shadow-lg w-72 mb-4`,
  props.rounded === 'full'? tw`rounded-full` :
  props.rounded === '5' ? tw`rounded-5xl` :
  props.rounded === '4' ? tw`rounded-4xl` :
  props.rounded === '3' ? tw`rounded-3xl` :
  props.rounded === '2' ? tw`rounded-2xl` :
  props.rounded === '1' ? tw`rounded-xl` :
  tw``,
]);
 