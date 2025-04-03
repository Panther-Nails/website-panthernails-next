import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const TabText = styled.div((props) => [
  tw`flex  lg:inline-block gap-2 ml-3  lg:ml-0  cursor-pointer
     lg:my-0 
  font-semibold tracking-wide transition duration-700
  border-b-2 border-transparent  lg:hocus:text-primary-500`,
  (props = [
    props.navPosition
      ? tw`text-sm lg:text-xs duration-700 lg:mx-8`
      : tw`text-sm duration-700 lg:mx-5`,
  ]),
]);

const Column = tw.div`flex flex-col  `;
const FAQSContainer = tw.dl` relative`;
const FAQ = tw.div`text-gray-800 transition duration-300`;
const Question = tw.dt`flex justify-between items-center `;
const SubTabText = tw(TabText)`ml-2`;
const QuestionToggleIcon = motion(
  styled.span`
    ${tw`ml-2 transition duration-300`}
    svg {
      ${tw`w-6 h-6`}
    }
  `
);
const Answer = motion(
  styled.dd(({ $isOpen }) => [
    tw`text-sm  leading-relaxed transition-all duration-300 overflow-hidden`,
    $isOpen ? tw`pointer-events-auto text-left` : tw`pointer-events-none `,
  ])
);

const data = [
  {
    HeadMetaJSON: {
      Title: "Products",
      Keywords:
        "products, loyalty platform, human resource management, labour management, panther nails,",
      Description:
        "We are a genial technology company delivering insightful enterprise software",
    },
    LinkHeadingText: "Products",
    LinkID: 125,
    LinkJSON: [
      {
        LinkID: 103,
        LinkURL: "/pages/products/loyalty",
        LinkHeadingText: "Travelling & Expense Management",
        LinkVisible: null,
        HeadMetaJSON: {
          Title: "Rasik Loyalty",
          Keywords: "\r\n",
          Description: "Rasik Loyalty description",
        },
        LinkPropertyJSON: {
          productResource: {
            imageSrc:
              "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
          },
        },
        LinkJSON: [
          {
            LinkID: 107,
            LinkHeadingText: "influencer loyalty program",
            LinkURL: "/exciting-offers.php",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
          {
            LinkID: 108,
            LinkHeadingText: "partner channal loyalty program",
            LinkURL: "/??.php",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
          {
            LinkID: 107,
            LinkHeadingText: "influencer loyalty program",
            LinkURL: "/exciting-offers.php",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
        ],
      },
      {
        LinkID: 103,
        LinkURL: "/pages/products/loyalty",
        LinkHeadingText: "Rasik Loyalty",
        LinkVisible: null,
        HeadMetaJSON: {
          Title: "Rasik Loyalty",
          Keywords: "\r\n",
          Description: "Rasik Loyalty description",
        },
        LinkPropertyJSON: {
          productResource: {
            imageSrc:
              "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
          },
        },
        LinkJSON: [
          {
            LinkID: 107,
            LinkHeadingText: "influencer loyalty program",
            LinkURL: "/exciting-offers.php",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
          {
            LinkID: 108,
            LinkHeadingText: "partner channal loyalty program",
            LinkURL: "/??.php",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
        ],
      },
      {
        LinkID: 105,
        LinkURL: "/pages/products/clm",
        LinkHeadingText: "Contract Labour Management",
        LinkVisible: null,
        HeadMetaJSON: {
          Title: "Contract Labour Management",
          Keywords: "",
          Description: "Contract Labour Management description\r\n\r\n",
        },
        LinkPropertyJSON: {
          productResource: {
            imageSrc:
              "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/935.png",
          },
        },
        LinkJSON: [
          {
            LinkID: 110,
            LinkURL: "/test",
            LinkHeadingText: "Attendance",
            LinkPropertyJSON: "",
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
          {
            LinkID: 111,
            LinkURL: "/Gtest",
            LinkHeadingText: "Payroll",
            LinkPropertyJSON:
              '{"light":{"colorButton":"#1E90FF","colorOnButton":"#f7fafc","colorPrimary":"#1E90FF","colorPrimaryFrom":"#1E90FF","colorPrimaryVia":"#1E90FF","colorPrimaryTo":"#f7fafc","colorOnPrimary":"#f7fafc","colorSecondary":"#003366","colorOnSecondary":"#f7fafc","colorTertiary":"#243E63","colorOnTertiary":"#f7fafc","colorAccent":"#4a5568","colorOnAccent":"#1E90FF"}}',
            LinkPropertyJSON: {
              productResource: {
                imageSrc:
                  "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
              },
            },
          },
        ],
      },
    ],
  },
];

const ChildTab = ({ data, navbarHeight, toggleNavbar }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    if (url) navigate(url);
    toggleNavbar();
  };

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };
  return (
    <Column>
      <FAQSContainer>
        {data?.map((faq, index) => (
          <FAQ key={index}>
            {faq.LinkJSON ? (
              <Question onClick={() => toggleQuestion(index)}>
                <TabText navPosition={navbarHeight}>
                  <SubTabText>{faq.LinkHeadingText}</SubTabText>
                </TabText>

                <QuestionToggleIcon
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0 }}
                >
                  <ChevronDownIcon />
                </QuestionToggleIcon>
              </Question>
            ) : (
              <TabText
                navPosition={navbarHeight}
                onClick={() => {
                  handleNavigate(faq.LinkURL);
                }}
              >
                <SubTabText>{faq.LinkHeadingText}</SubTabText>
              </TabText>
            )}
            {faq.LinkJSON && (
              <Answer
                $isOpen={activeQuestionIndex === index}
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "4px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                initial="collapsed"
                animate={activeQuestionIndex === index ? "open" : "collapsed"}
                transition={{ duration: 0, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {faq?.LinkJSON.map((link, subIndex) => (
                  <TabText navPosition={navbarHeight}>
                    <SubTabText
                      key={subIndex}
                      onClick={() => handleNavigate(link.LinkURL)}
                    >
                      <SubTabText>{link.LinkHeadingText}</SubTabText>
                    </SubTabText>
                  </TabText>
                ))}
              </Answer>
            )}
          </FAQ>
        ))}
      </FAQSContainer>
    </Column>
  );
};

export default ({ navbarHeight, dropdownContent, toggleNavbar }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const toggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };
  const data = [dropdownContent];
  return (
    <Column>
      <FAQSContainer>
        {data.map((faq, index) => (
          <FAQ key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              <TabText navPosition={navbarHeight}>
                {faq.LinkHeadingText}
              </TabText>

              <QuestionToggleIcon
                variants={{
                  collapsed: { rotate: 0 },
                  open: { rotate: -180 },
                }}
                initial="collapsed"
                animate={activeQuestionIndex === index ? "open" : "collapsed"}
                transition={{ duration: 0 }}
              >
                <ChevronDownIcon />
              </QuestionToggleIcon>
            </Question>
            <Answer
              $isOpen={activeQuestionIndex === index}
              variants={{
                open: { opacity: 1, height: "auto", marginTop: "4px" },
                collapsed: { opacity: 0, height: 0, marginTop: "0px" },
              }}
              initial="collapsed"
              animate={activeQuestionIndex === index ? "open" : "collapsed"}
              transition={{ duration: 0, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <ChildTab
                data={faq.LinkJSON}
                navbarHeight={navbarHeight}
                toggleNavbar={toggleNavbar}
              />
            </Answer>
          </FAQ>
        ))}
      </FAQSContainer>
    </Column>
  );
};
