import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import { MenuItem } from "@fluentui/react-components";
import { CollapseIcon, Divider, ExpandIcon, MenuLink } from "./Controls";

const Container = styled.div((props) => [
  tw`basis-32 py-2 bg-primary-100 border border-r-2 shadow  duration-300`,
  props.visible ? tw`basis-1/4 duration-300` : tw`basis-12  duration-300`,
]);

const MenuContent = styled.div((props) => [
  props.visible ? tw`w-32 block duration-300` : tw`hidden duration-300`,
]);

const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const Answer = motion(
  tw.div`mx-12 my-4 bg-primary-500 h-screen w-32 z-20 pointer-events-none text-sm sm:text-base leading-relaxed  `
);

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`,
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default ({
  children,
  properties,

  imageContain = false,
  imageShadow = true,
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  var faqs = [{}];

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(false);

  const toggleQuestion = () => {
    if (activeQuestionIndex) setActiveQuestionIndex(false);
    else setActiveQuestionIndex(true);
  };

  return (
    <Container id="menu" visible={activeQuestionIndex}>
      <div>
        <Divider />
        <div
          tw="p-2"
          onClick={() => {
            toggleQuestion();
          }}
        >
          {activeQuestionIndex ? <CollapseIcon /> : <ExpandIcon />}
        </div>
      </div>
      <MenuContent visible={activeQuestionIndex}>
        <MenuLink to="rohan">ROhan</MenuLink>
        <MenuLink to="rohan-learning">ROhan learning</MenuLink>
      </MenuContent>
    </Container>
  );
};
