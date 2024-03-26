import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
  Heading,
  NewHeadings,
} from "components/misc/Headings.js";
import {
  SectionDescription,
  Description,
  NewDescription,
} from "components/misc/Typography.js";
import {
  PrimaryButton as PrimaryButtonBase,
  NewPrimaryButton,
} from "components/misc/Buttons.js";

import { NewContainer, Image } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

import ProductImageCLM from "images/ProductCLM.png";
import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";

// const Icons = tw.img`w-16 h-16 bg-white`;
// const Image = tw.img`w-full h-8/12 bg-white`;
const Plan = styled.div`
  ${tw` max-w-xl flex flex-col h-morethanhalf lg:h-less hover:-translate-y-full 3xl:( h-twothird) duration-1000 lg:mr-8 z-30  text-center px-8 rounded-lg shadow relative   text-gray-900 bg-white`}
`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full bg-sitecolor-1000 hover:bg-sitecolor-1000 uppercase tracking-wider py-2 lg:py-4  text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

export default ({
  //style the component through service
  itemsshow = "ItemsInPhoneAndWindow",
  btn = "Full",
  itemcol = "ItemscenterCol",
  simplecontcol = "Defultcontainercentercol",
  subheading = "Pricing",
  headingstyle = "headingtext",
  descriptionstyle = "descriptioncolor",
  //text from services
  heading = "Our Products",
  description = "Here we are showcasing our products which gives the business the best choice to grow their business",
  plans = null,
  primaryButtonText = "click for more",
  icons,
}) => {
  const defaultPlans = [
    {
      name: "One App",
      img: "http://localhost:3000/static/media/CLM.fd4a3027caa865270a0d.png",
      // duration: "Monthly",
      mainFeature: ProductImageCLM,
      features: [
        "30 Templates",
        "7 Landing Pages",
        "12 Internal Pages",
        "Basic Assistance",
      ],
      productinfo:
        "Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business.",
    },
    {
      name: "Rasik Loyalty",
      img: "http://localhost:3000/static/media/Loyalty.4b56d4f1b36a49c1a2ef.png",
      // duration: "Monthly",
      mainFeature: ProductImageRasikLoyalty,
      features: [
        "60 Templates",
        "8 Landing Pages",
        "22 Internal Pages",
        "Priority Assistance",
      ],
      productinfo:
        "Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business.",

      featured: true,
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(
        115deg,
        rgba(56, 178, 172, 1) 0%,
        rgba(129, 230, 217, 1) 100%
      );
    `,
    css`
      background: rgb(78, 11, 52);
      background: linear-gradient(
        90deg,
        rgba(78, 11, 52, 1) 49%,
        rgba(245, 242, 242, 1) 1000%
      );
    `,
    css`
      background: rgb(78, 11, 52);
      background: linear-gradient(
        90deg,
        rgba(78, 11, 52, 1) 49%,
        rgba(245, 242, 242, 1) 1000%
      );
    `,
  ];
  console.log("colors", highlightGradientsCss);
  return (
    <>
      <NewContainer
        NCflex={"itemscol"}
        NCflexdirection={"itemscenter"}
        NCflexgap={"flexgapmd"}
        NCbgcolor={"tan"}
      >
        <NewContainer
          NCflex={"itemscol"}
          NCflexdirection={"itemscenter"}
          NCflexgap={"flexgapmd"}
        >
          <NewHeadings
            NHeading={"headingsizemd"}
            NHtextcolor={"colorPrimarySh"}
            NHtextposition={"center"}
            NHpadding={"padding4"}
          >
            {heading}
          </NewHeadings>
          {description && (
            <NewDescription
              NDescription={"dsizemd"}
              NDwidth={"equalto85"}
              NDtextcolor={"colorPrimarySd"}
              NDtextposition={"center"}
              NDpadding={"paddingy1"}
            >
              {description}
            </NewDescription>
          )}
        </NewContainer>
        <NewContainer
          NCresponsive={"responsive"}
          NCflexgap={"flexgapmd"}
          NCpadding={"padding2"}
        >
          {plans.map((plan, index) => (
            <NewContainer
              NCflexdirection={"itemscenter"}
              NCoverflow={"overflowhide"}
            >
              <Plan key={index} featured={plan.featured}>
                {index % 2 === 0 ? (
                  <div
                    css={highlightGradientsCss[0]}
                    tw="rounded-t-lg absolute top-0 inset-x-0 h-2 "
                  ></div>
                ) : (
                  <div
                    css={highlightGradientsCss[1]}
                    tw="rounded-t-lg absolute top-0 inset-x-0 h-2 "
                  ></div>
                )}

                <NewContainer
                  NCwidth={"full"}
                  NCheight={"full"}
                  NCflexdirection={"itemscenter"}
                  NCflex={"itemscol"}
                >
                  <NewHeadings
                    NHeading={"headingsizesm"}
                    NHtextcolor={"colorPrimaryH"}
                    NHtextposition={"center"}
                    NHpadding={"padding2"}
                    NHwidth={"full"}
                  >
                    {plan.name}
                  </NewHeadings>

                  <Image
                    Imgwidth={"width16"}
                    Imgheight={"height16"}
                    src={plan.img}
                  ></Image>
                </NewContainer>
                <NewContainer
                  NCwidth={"full"}
                  NCheight={"full"}
                  NCflexdirection={"itemscenter"}
                  NCflex={"itemscol"}
                >
                  <Image
                    src={plan.mainFeature}
                    Imgheight={"full"}
                    Imgwidth={"equalto33"}
                  ></Image>
                </NewContainer>

                <NewContainer
                  NCwidth={"full"}
                  NCheight={"full"}
                  NCflexdirection={"itemscenter"}
                  NCflex={"itemscol"}
                  NCpadding={"paddingtop4"}
                >
                  <NewDescription
                    NDescription={"dsizesm"}
                    NDwidth={"equalto85"}
                    NDtextcolor={"colorPrimaryD"}
                    NDtextposition={"center"}
                    NDpadding={"padding2"}
                    NDmargin={"margintopmd"}
                  >
                    {plan.productinfo}
                  </NewDescription>

                  <NewPrimaryButton
                    NBbgcolor={"btnthird"}
                    rounded={"full"}
                    NBbganimation={ "scale"}
                    NBtext={"textsize"}
                    NBpadding={"paddingx8"}
                    NBpaddingy={"paddingy3"}
                    NBmargin={"marginy4"}
                    NBtextcolor={"textwhite"}
                    css={!plan.featured && highlightGradientsCss[index]}
                  >
                    {primaryButtonText}
                  </NewPrimaryButton>
                </NewContainer>

                <NewContainer
                  NCwidth={"full"}
                  NCheight={"full"}
                  NCflexdirection={"itemscenter"}
                  NCflex={"itemscol"}
                  NCpadding={"paddingtop4"}
                >
                  <Image
                    Imgwidth={"width16"}
                    Imgheight={"height16"}
                    src={plan.img}
                  ></Image>
                </NewContainer>
              </Plan>
            </NewContainer>
          ))}
        </NewContainer>
      </NewContainer>
    </>
  );
};
