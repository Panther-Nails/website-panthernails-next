import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "components/misc/Layouts.js";
import { HighlightedHeading, Subheading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between  items-center flex-col `;
const TabsControl = tw.div`flex  py-2 rounded leading-none  xl:mt-0`;
const ContentWithPaddingXl = tw.div` relative w-full h-full`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-4 py-1 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-xs w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)` flex flex-wrap `;
const CardContainer = tw.div` w-full sm:w-1/2 md:w-1/3 lg:w-1/4  text-center `;
const Card = tw(
  motion.a
)`rounded-b block max-w-xs flex flex-col items-center scale-90 hover:scale-100 duration-300 sm:max-w-none sm:mx-0`;
const CardImage = tw.img`
h-16 bg-center bg-cover mx-auto relative 
`;

const CardText = tw.div`px-4 text-gray-900 min-h-12  flex flex-col justify-between items-center`;
const CardTitle = tw.h5`text-xs font-semibold group-hover:text-primary-500 `;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const testData = [
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
        LinkHeadingText: " channal partner loyalty program",
        LinkURL: "/??.php",
        LinkPropertyJSON: {
          productResource: {
            imageSrc:
              "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
          },
        },
      },
      {
        LinkID: 108,
        LinkHeadingText: "specifier loyalty program",
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
          "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/1748.png",
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
      {
        LinkID: 111,
        LinkURL: "/Gtest",
        LinkHeadingText: "contractor portal management",
        LinkPropertyJSON:
          '{"light":{"colorButton":"#1E90FF","colorOnButton":"#f7fafc","colorPrimary":"#1E90FF","colorPrimaryFrom":"#1E90FF","colorPrimaryVia":"#1E90FF","colorPrimaryTo":"#f7fafc","colorOnPrimary":"#f7fafc","colorSecondary":"#003366","colorOnSecondary":"#f7fafc","colorTertiary":"#243E63","colorOnTertiary":"#f7fafc","colorAccent":"#4a5568","colorOnAccent":"#1E90FF"}}',
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
        LinkHeadingText: "Leave management",
        LinkPropertyJSON:
          '{"light":{"colorButton":"#1E90FF","colorOnButton":"#f7fafc","colorPrimary":"#1E90FF","colorPrimaryFrom":"#1E90FF","colorPrimaryVia":"#1E90FF","colorPrimaryTo":"#f7fafc","colorOnPrimary":"#f7fafc","colorSecondary":"#003366","colorOnSecondary":"#f7fafc","colorTertiary":"#243E63","colorOnTertiary":"#f7fafc","colorAccent":"#4a5568","colorOnAccent":"#1E90FF"}}',
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
        LinkHeadingText: "visitor management ",
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
];

export default ({ properties }) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */

  const [activeTab, setActiveTab] = useState(testData[0]?.LinkHeadingText);
  const TextComponent = tw.div`w-[90%] m-auto`;
  return (
    <>
      <ContentWithPaddingXl>
        <HeaderRow>
    
          <TabsControl>
            {testData?.map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName.LinkHeadingText}
                onClick={() => setActiveTab(tabName.LinkHeadingText)}
              >
                {tabName.LinkHeadingText}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {testData?.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={
              activeTab === tabKey.LinkHeadingText ? "current" : "hidden"
            }
            animate={
              activeTab === tabKey.LinkHeadingText ? "current" : "hidden"
            }
          >
            {tabKey.LinkJSON?.map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.LinkURL}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImage
                    src={card?.LinkPropertyJSON?.productResource?.imageSrc}
                  />
                  <CardText>
                    <CardTitle>{card.LinkHeadingText}</CardTitle>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </>
  );
};
