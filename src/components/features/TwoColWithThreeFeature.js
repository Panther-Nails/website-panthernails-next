import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col md:flex-row items-center lg:flex-row flex-wrap lg:justify-center mx-auto`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full w-48 mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-2 bg-gray-100 hocus:shadow hocus:shadow-lg duration-300 `}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-12 items-center`;
const Column = tw.div` max-w-md mx-auto md:max-w-none md:mx-0 `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-1/3 mt-16 md:mt-0 `,

  props.textOnLeft === "true"
    ? tw`md:pl-20 md:order-first`
    : tw`  md:order-last`,
]);
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export default ({
  properties,
  children,
  index,
  linkText = "Learn More",
  imageContainerCss = null,
  imageCss = null,
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  var inputs = JSON.parse(properties.inputs);
  return (
    <Container>
      <TwoColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <Heading>{properties.heading}</Heading>
          <Description>{properties.description}</Description>
        </TextColumn>
        <ThreeColumnContainer>
          {inputs.map((input, i) => (
            <Column key={i}>
              <Card href={input.url} target="_blank" title={input.title}>
                {properties.imageVisible === "true" && (
                  <span className="imageContainer" css={imageContainerCss}>
                    <img src={input.imageSrc} alt="" css={imageCss} />
                  </span>
                )}
                {properties.textVisible === "true" && (
                  <>
                    <span className="title">{input.title}</span>
                    <p className="description">{input.description}</p>
                    {properties.url && (
                      <span className="link">
                        <span target="_blank" href={properties.url}>{linkText}</span>
                        <ArrowRightIcon className="icon" />
                      </span>
                    )}
                  </>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </TwoColumn>
      <DecoratorBlob />
    </Container>
  );
};
