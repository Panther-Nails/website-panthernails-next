import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { Container } from "components/misc/Layouts";

const BaseContainer = styled(Container)`
  ${tw`flex  relative bg-center bg-cover md:max-h-screen min-h-144 2xl:max-w-screen-xl mx-auto 2xl:h-[70vh]`}
`;

const TwoColumn = tw.div`flex flex-col mx-auto lg:flex-row items-center justify-between px-4 lg:px-12 py-10 lg:py-4`;
const BaseTwoColumn = styled(TwoColumn)`
  ${(props) =>
    props.textOnLeft === "true" ? tw`md:flex-col-reverse lg:flex-row` : tw``};
`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-8/12 lg:w-5/12 flex flex-col md:flex-row items-center justify-between flex-shrink-0 h-48  md:h-auto `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-8/12 lg:w-7/12 mt-4 md:mt-12 md:mt-0 flex flex-col items-center  px-4 md:px-0`,
  props.textOnLeft === "true"
    ? tw`lg:mr-12  lg:mr-16 md:order-first`
    : tw`lg:ml-12  lg:ml-16 flex-row-reverse`,
]);

const Image = tw.img`rounded bg-contain bg-no-repeat bg-center h-full `;

const TextContent = tw.div`lg:py-8 text-center md:text-left max-w-screen-lg  `;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Description = tw.p`mt-4   text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const UnorderList = tw.ul`  text-left `;
const ListHeading = tw.p` text-black font-bold my-1 text-left text-primary-900`;
const ListItem = tw.li` py-1 text-secondary-100`;
const ListContainer = tw.div` mt-5 text-sm md:text-base pl-2`;
const ListWrapper = tw.div`flex items-center gap-1`;
const CheckIcon = tw.img`w-4 h-4 md:h-6 lg:w-6`;
export default ({ properties, children }) => {
  let List;
  if (properties.listData) {
    List = JSON.parse(properties.listData || "[]");
  }
  return (
    <BaseContainer>
      <BaseTwoColumn textOnLeft={properties.textOnLeft}>
        <ImageColumn>
          <Image
            src={
              properties.imageSrc ? properties.imageSrc : TeamIllustrationSrc
            }
          />
        </ImageColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <TextContent>
            <Subheading>{properties.subHeading}</Subheading>
            <HighlightedHeading textStyle={tw`text-center lg:text-left`}>
              {properties.heading}
            </HighlightedHeading>
            <Description>{properties.description}</Description>
            {properties.listData && (
              <ListContainer>
                <ListHeading>{List.listHeading}</ListHeading>
                <UnorderList>
                  {List.listItems.map((item, key) => {
                    return (
                      <ListWrapper>
                        <CheckIcon
                          src={
                            "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1771.png"
                          }
                          alt="Check Icon"
                        />
                        <ListItem>{item}</ListItem>
                      </ListWrapper>
                    );
                  })}
                </UnorderList>
              </ListContainer>
            )}
            <Features>{ProcessChildComponentsSeparately(children)}</Features>
            {properties.buttonText ? (
              <PrimaryButton as="a" href={properties.buttonUrl} target="_blank">
                {properties.buttonText}
              </PrimaryButton>
            ) : (
              <></>
            )}
            {properties.secondDescription && (
              <Description>{properties.secondDescription}</Description>
            )}
          </TextContent>
        </TextColumn>
      </BaseTwoColumn>
    </BaseContainer>
  );
};
