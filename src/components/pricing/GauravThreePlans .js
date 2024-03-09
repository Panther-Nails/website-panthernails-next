import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

import ProductImageCLM from "images/ProductCLM.png";
import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";

const Icons=tw.img`w-16 h-16 bg-white` 
const Image=tw.img`w-full h-8/12 bg-white`
const Raper=tw.div` w-full lg:h-full h-half mt-4 overflow-hidden lg:items-center lg:justify-center flex    `
const HeaderContainer = tw.div` w-full flex flex-col items-center justify-between`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center py-4`;

const PlansContainer = tw.div`flex justify-around overflow-hidden  flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-lg lg:h-screen h-half hover:-translate-y-1/2 lg:hover:-translate-y-full duration-1000 h-screen mt-0 lg:mr-8 z-30 lg:last:mr-0 text-center px-8 rounded-lg shadow relative   text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2  bg-black`}
  }

  ${props =>
    // this is after css use for background grediant
    //  background: rgb(100,21,255);
    //   background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
    //   background: rgb(78,11,52);
    //   background: linear-gradient(90deg, rgba(78,11,52,1) 49%, rgba(245,242,242,1) 1000%);
    props.featured &&
    css`
    
      
      ${tw``}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-sitecolor-1000  text-gray-100  `}
    `}
`;
//car hover component

const Planhover=styled.div`
  ${tw`w-full max-w-lg h-full   bg-black  z-10 lg:last:mr-0 text-center  rounded-lg shadow absolute bg-transparent  `}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }
  

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
      background: rgb(78,11,52);
      background: linear-gradient(90deg, rgba(78,11,52,1) 49%, rgba(245,242,242,1) 1000%);
      
      ${tw`bg-primary-100 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-sitecolor-1000 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;




const PlanHeader = styled.div`
  ${tw`flex flex-col items-center    uppercase leading-relaxed py-0 lg:py-4`}
  .name {
    ${tw`font-bold py-4 text-xl`}
  }
  .img {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8   sticky border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full  uppercase tracking-wider py-2 lg:py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  subheading = "Pricing",
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
    <Container >
      <ContentWithPaddingXl tw="m-0 p-0 ">
        <HeaderContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          
          {plans.map((plan, index) => (

            <Raper  >
              {/* <Planhover >
              {/* <PlanHeader>
                  <span className="name">{plan.name}</span>
                  <span className="img"><Icons src={plan.img}></Icons></span>
                  <span className="duration">{plan.duration}</span>
                  
                </PlanHeader>  */}
                {/* <PlanFeatures className="">
                  <span className="feature mainFeature"><Image src={plan.mainFeature}></Image></span> */}
                  {/* {plan.features.map((feature, index) => (
                    <span key={index} className="feature">
                      
                    </span>
                  ))} */}
                  {/* <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton> */}
                {/* </PlanFeatures>
                <PlanAction>
                  <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
                </PlanAction>
              </Planhover> *

              {/* dublicate the card */}
              
              <Plan  key={index} featured={plan.featured}>
                
              
                  
                {index % 2 ===0?<div css={highlightGradientsCss[0]} tw="rounded-t-lg absolute top-0 inset-x-0 h-2 "></div>:<div css={highlightGradientsCss[1]} tw="rounded-t-lg absolute top-0 inset-x-0 h-2 " ></div>}

                <PlanHeader>
                  <span className="name">{plan.name}</span>
                  <span className="img"><Icons src={plan.img}></Icons></span>
                  <span className="duration">{plan.duration}</span>
                  
                </PlanHeader>
                <PlanHeader>
                 <span className="feature mainFeature"><Image src={plan.mainFeature}></Image></span>
                  
                  
                </PlanHeader>
                {/* <PlanFeatures>
                  <span className="feature mainFeature"><Image src={plan.mainFeature}></Image></span>
                  
                  {plan.features.map((feature, index) => (
                    <span key={index} className="feature">
                      
                    </span>
                  ))}
                </PlanFeatures> */}
                {/* <PlanAction>
                  <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
                </PlanAction> */}
                 <PlanHeader>
                    <Description>{plan.productinfo}</Description>
                    <PlanAction>
                      <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
                    </PlanAction>
                 </PlanHeader>

                <PlanHeader>
                  {/* <span className="name">{plan.name}</span> */}
                  <span className="img"><Icons src={plan.img}></Icons></span>
                  <span className="duration">{plan.duration}</span>
                  
                </PlanHeader>

                
                
              </Plan>
            </Raper>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
