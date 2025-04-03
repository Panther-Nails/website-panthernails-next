import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  HighlightedHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import { Container } from "components/misc/Layouts";

const Content = tw.div`max-w-screen-xl mx-auto py-10 px-4`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = tw.img`hidden lg:block rounded h-144 bg-center`;

const FAQContent = tw.div`lg:ml-4`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Description = tw.p`max-w-xl px-4 lg:px-0 lg:mx-0 text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const CheckIcon = tw.img`w-6 h-6 lg:h-8 lg:w-8`;
const FAQSContainer = tw.dl`mt-8`;
const FAQ = tw.div` lg:mt-6 px-8 py-4 lg:p-0 ml-4 lg:ml-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-start  items-center  lg:hover:scale-105 transition duration-300 ease-in-out rounded-lg lg:rounded-none cursor-pointer`;
const QuestionText = tw.span`text-base cursor-pointer ml-3 lg:text-xl font-semibold `;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd` text-sm sm:text-base leading-relaxed`);
const TextContainer = tw.div`w-[95%] pl-12 lg:px-0`;
export default ({ properties }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  const listText = JSON.parse(properties.listText || "[]");
  const listImages = JSON.parse(properties.images || "[]");

  return (
    <Container id="faq">
      <Content>
        <TwoColumn tw="md:flex items-center justify-center gap-4">
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image src={listImages[activeImageIndex]} />
          </Column>
          <Column tw="  md:w-8/12 lg:w-6/12">
            <FAQContent>
              <TextContainer>
                {properties?.subheading ? (
                  <Subheading>{properties.subheading}</Subheading>
                ) : null}
                <HighlightedHeading textStyle={tw`text-left px-0`}>
                  {properties.heading}
                </HighlightedHeading>
                <Description>{properties?.description}</Description>
              </TextContainer>
              <FAQSContainer>
                {listText?.map((list, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question  onMouseEnter={() => setActiveImageIndex(index)}>
                      <CheckIcon
                        src={properties.listBulletIcon}
                        alt="Check Icon"
                      />
                      <QuestionText
                       
                      >
                        {list}
                      </QuestionText>
                      {list.Answer != null ? (
                        <QuestionToggleIcon>
                          {activeQuestionIndex === index ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon />
                          )}
                        </QuestionToggleIcon>
                      ) : null}
                    </Question>
                    {list.Answer && (
                      <Answer
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            marginTop: "0px",
                          },
                        }}
                        initial="collapsed"
                        animate={
                          activeQuestionIndex === index ? "open" : "collapsed"
                        }
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        {list.answer}
                      </Answer>
                    )}
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
