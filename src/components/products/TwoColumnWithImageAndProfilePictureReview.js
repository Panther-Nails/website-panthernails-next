import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

//Changes
import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import OneAppLogo from "images/ONEAPP.png";
import ProfileImageRasikLoyaltyLogo from "images/Loyalty.png";
import DownloadApp from "components/cta/DownloadApp.js";
import GetStarted from "components/cta/GetStarted.js";
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide.js";



const Container = tw.div`relative text-black bg-transparent`;
const Content = tw.div`max-w-screen-xl text-black bg-transparent`;
const ProductsContainer = tw.div`mt-16 lg:mt-0 bg-transparent`;
const Products = styled.div`bg-transparent`;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row bg-transparent`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 bg-transparent`;
const TestimonialTextSlider = tw(Slider)`bg-transparent`;
const TestimonialText = tw.div`outline-none bg-transparent`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-transparent px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100 text-black`;

const QuoteContainer = tw.div`relative mt-10 `;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl text-black`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0 text-black`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500 text-black`;
const CustomerTitle = tw.p`font-medium text-secondary-100 text-black`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block ml-1 -mt-3`;

export const Links = tw.div`inline-block`;

export const Link = tw.a`
  h-6 inline-block mt-5
  text-primary-500 hover:border-secondary-500 hocus:text-secondary-500
  text-lg my-2 
  font-bold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent text-teal-900
`;

// const DecoratorBlob1 = tw(
//   SvgDecoratorBlob1
// )`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
// const DecoratorBlob2 = tw(
//   SvgDecoratorBlob2
// )`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({
  subheading = "",
  heading = " Our Products",
  description = "Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  products,
  textOnLeft = false,

  
}) => {
  /*
   * You can modify the products shown by modifying the array below or passing in the products prop above
   * You can add or remove objects from the array as you need.
   */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const defaultProducts = [
    {
      imageSrc: ProductImageRasikLoyalty,
      profileImageSrc: ProfileImageRasikLoyaltyLogo,
      quote:
        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Rasik Store",
      // customerTitle: "CEO, Delos Inc.",
      redirectUrl: "/",
    },
    {
      imageSrc:OneAppLogo,
      profileImageSrc:OneAppLogo,
      quote:
        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "One App",
      // customerTitle: "Founder, EventsNYC",
      redirectUrl: "/",
    },
  ];

  if (!products || products.length === 0) products = defaultProducts;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);
  

  return (
    <Container>
      <Content>
      <ScrollingAnimationUpSide y={500} duration={5.0}>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        </ScrollingAnimationUpSide>
        <ProductsContainer>
          <Products>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {products.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>

              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {products.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <CustomerInfo>
                        <CustomerProfilePicture
                          src={testimonial.profileImageSrc}
                          alt={testimonial.customerName}
                        />
                        <CustomerTextInfo>
                          <CustomerName>
                            {testimonial.customerName}
                          </CustomerName>
                          <CustomerTitle>
                            {testimonial.customerTitle}
                          </CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                      <Link href={testimonial.redirectUrl}>More Info</Link>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Products>
        </ProductsContainer>
      </Content>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
