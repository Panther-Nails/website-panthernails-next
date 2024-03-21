import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase,Heading } from "components/misc/Headings.js";
import { SectionDescription,Description } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { Container, ContentWithPaddingXl,NewContainer,SimpleContainer } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

import ProductImageCLM from "images/ProductCLM.png";
import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";

const Icons=tw.img`w-16 h-16 bg-white` 
const Image=tw.img`w-full h-8/12 bg-white`
const Plan = styled.div`
  ${tw` max-w-lg  flex flex-col h-morethanhalf lg:h-less hover:-translate-y-full 3xl:( h-half) duration-1000 lg:mr-8 z-30  text-center px-8 rounded-lg shadow relative   text-gray-900 bg-white`}
  
`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full bg-sitecolor-1000 hover:bg-sitecolor-1000 uppercase tracking-wider py-2 lg:py-4  text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;




export default ({
  
  //style the component through service
  itemsshow="ItemsInPhoneAndWindow",
  btn="Full",
  itemcol="ItemscenterCol",
  simplecontcol="Defultcontainercentercol",
  subheading = "Pricing",
  headingstyle="headingtext",
  descriptionstyle="descriptioncolor",
  //text from services
  heading = "Our Products",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "click for more",
  icons
}) => {
  const defaultPlans = [
    {
      name: "One App",
      img: "http://localhost:3000/static/media/CLM.fd4a3027caa865270a0d.png",
      // duration: "Monthly",
      mainFeature: ProductImageCLM,
      features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
      productinfo:'Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business.',
    },
    {
      name: "Rasik Loyalty",
      img: "http://localhost:3000/static/media/Loyalty.4b56d4f1b36a49c1a2ef.png",
      // duration: "Monthly",
      mainFeature:ProductImageRasikLoyalty,
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
      productinfo:'Our Products that are built with Business Analytics & Intelligence, Automated Query Response System, Automated Analysis Emails, Voice Intelligence System provides you enhanced accessibility to run your business.',

      featured: true,
    },
    
  
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
    background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(78,11,52);
      background: linear-gradient(90deg, rgba(78,11,52,1) 49%, rgba(245,242,242,1) 1000%);
    `,
    css`
    background: rgb(78,11,52);
    background: linear-gradient(90deg, rgba(78,11,52,1) 49%, rgba(245,242,242,1) 1000%);
    `
  ];
      console.log('colors',highlightGradientsCss);
  return (
    <  >
      <NewContainer NCflex={"itemscol"} NCflexdirection={"itemscenter"} NCflexgap={"flexgapmd"} NCbgcolor={"tan"}>
          <NewContainer NCflex={"itemscol"} NCflexdirection={"itemscenter"} NCflexgap={"flexgapmd"}>
            <SectionHeading>{heading}</SectionHeading>
            {description && <SectionDescription >{description}</SectionDescription>}
          </NewContainer>
        <NewContainer  NCresponsive={"responsive"} NCflexgap={"flexgapmd"} NCpadding={"padding2"}>
          
          {plans.map((plan, index) => (

            <NewContainer  NCflexdirection={"itemscenter"} NCoverflow={"overflowhide"} >
             
              
              <Plan  key={index} featured={plan.featured}>
                
              
                  
                {index % 2 ===0?<div css={highlightGradientsCss[0]} tw="rounded-t-lg absolute top-0 inset-x-0 h-2 "></div>:<div css={highlightGradientsCss[1]} tw="rounded-t-lg absolute top-0 inset-x-0 h-2 " ></div>}

                <NewContainer NCwidth={"full"} NCheight={"full"} NCflexdirection={"itemscenter" } NCflex={"itemscol"}>
                  <Heading Heading={headingstyle} >{plan.name}</Heading>
                  <span ><Icons src={plan.img}></Icons></span>

                </NewContainer >
                <NewContainer NCwidth={"full"} NCheight={"full"} NCflexdirection={"itemscenter" } NCflex={"itemscol"}>
                 <span><Image src={plan.mainFeature}></Image></span>
                  
                  
                </NewContainer >
                
                 <NewContainer NCwidth={"full"} NCheight={"full"} NCflexdirection={"itemscenter" } NCflex={"itemscol"}>
                    <Description Description={descriptionstyle}>{plan.productinfo}</Description>
                
                    <BuyNowButton Rounded={btn} css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
                 
                 </NewContainer >

                <NewContainer NCwidth={"full"} NCheight={"full"} NCflexdirection={"itemscenter" } NCflex={"itemscol"}>
                  <span className="img"><Icons src={plan.img}></Icons></span>
                </NewContainer >

              </Plan>
            </NewContainer>
          ))}
        </NewContainer>
      </NewContainer>
    </>
  );
};
