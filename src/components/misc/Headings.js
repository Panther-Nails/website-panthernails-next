import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";

export const SectionHeading = tw.h1`text-4xl sm:text-5xl text-primary-900 tracking-wide text-center `;
export const Subheading = tw.h5`font-bold text-primary-500`;

const DynamicHeading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

const HeadingText = styled.span((props) => [
  `color:${props.color}`,
]);
// const StyledContainer = styled.div((props) => [
//   tw`fixed flex z-50  w-full `,
//   positions[props.position],
// ]);

export function HighlightedHeading(props) {
  return (
    <DynamicHeading>
      {props.children.split("`").map((chunk, index) => {
        console.log("props", props.primaryColor);
        if (index % 2 === 0)
          return (
            <HeadingText color={props.primaryColor}>
              {chunk}
            </HeadingText>
          );
        else return <HeadingText tw="text-primary-500">{chunk}</HeadingText>;
      })}
      {console.log("children", props.children)}
    </DynamicHeading>
  );
}
