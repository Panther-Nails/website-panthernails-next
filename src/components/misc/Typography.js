import tw from "twin.macro";
import styled from "styled-components";
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 `;

//Durgesh Changes All sections headings and subheading typography
const rounded5xl = "bg-black";
export const Heading1 = styled.h1((props) => [
  tw`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center`,
  handleProps(props),
]);

export const Heading = styled.h1((props) => [
    tw`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center`,
    handleProps(props),
  ]);
export const Subheading = styled.p((props) => [
  tw`text-lg font-normal text-gray-700 lg:text-xl sm:px-16 px-5 xl:px-48 dark:text-gray-700 mb-5 text-center`,
]);

//For card sections
export const CardHeading = styled.h2((props) => [tw`text-2xl font-bold `]);

export const CardDescription = styled.p((props) => [
  tw`text-gray-700 font-semibold `,
]);

const handleProps = (props) => {
console.log(props.bgBlack)

};
