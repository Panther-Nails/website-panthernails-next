import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryThemeButton, PrimaryButton } from "components/misc/Buttons.js";
import { Container, Column } from "components/misc/Layouts.js";
import { Heading1 } from "components/misc/Typography.js";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg";
import { Background } from "react-parallax";
import AnimatedHeading from "components/durgesh/AnimatedHeading";

const Header = tw(HeaderBase)` `;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center  lg:pt-5 max-w-screen-2xl mx-auto sm:px-8`;

const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;

const Image = styled.img`
  // max-width: 100%;
  // width: 24rem;
  // border-radius: 0.5rem;
  // position: relative;
  // z-index: 20;
  // height: auto;
  // transition: transform 0.3s ease-in-out;
  // &:hover {
  //   transform: scale(1.05) rotateX(5deg) rotateY(5deg);
  //   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  // }
`;

export default ({
  containerCss = tw`pt-0 px-8 h-screen`,
  heading = "Better, Faster and Cheaper Cloud.",
  description = "At Panther Nails , we understand the importance of building strong relationships with your customers and keeping them engaged. That's why we offer a range of innovative solutions to help you drive loyalty and boost sales.",
  imageSrc = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  features = [
    "Available in 2 Locations",
    "Premium Internet Backbone",
    "99.99% Uptime SLA",
  ],
  testimonial = {
    quote:
      "At Panther Nails , we understand the importance of building strong relationships with your customers and keeping them engaged. That's why we offer a range of innovative solutions to help you drive loyalty and boost sales.",
    customerName: "Charlotte Hale",
    customerCompany: "Delos Inc.",
  },
  //Add background color
  bgColor = tw``,
  links = [
    { title: "About Us", href: "/AboutUs" },
    { title: "Loyalty Platform", href: "/RasikLoyalty" },
    { title: "Contract Labour Management", href: "/CLM" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contactus" },
  ],
}) => {
  return (
    <>
      <Container css={containerCss}>
        {/* <BackgroundForHeader> */}
        <Header
          css={bgColor}
          links={
            <>
              <NavLinks key={1}>
                {links.map((link, index) => (
                  <NavLink href={link.href}>{link.title}</NavLink>
                ))}
              </NavLinks>
              <NavLinks key={2}></NavLinks>
            </>
          }
        />

        {/* <ContentWithVerticalPadding> */}
        <Row tw="mt-16">
          <Column>
            <AnimatedHeading>
              <Heading1 tw="text-left" bgBlack="bg-black">
                {heading} 
              </Heading1>
            </AnimatedHeading>
            <Description>{description}</Description>
            <PrimaryThemeButton tw="float-left" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryThemeButton>
            {/* <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList> */}
          </Column>
          <ImageColumn>
            <ImageContainer>
              <Image src={imageSrc} />
              {/* {imageDecoratorBlob && <ImageDecoratorBlob />} */}
              {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}

              {/* <Testimonial>
                  <QuotesLeftIcon />
                  <Quote>{testimonial.quote}</Quote> */}
              {/* <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany> */}
              {/* </Testimonial> */}
            </ImageContainer>
            {/* <Offsetbackground /> */}
          </ImageColumn>
        </Row>
        {/* </ContentWithVerticalPadding> */}
      </Container>
      {/* </BackgroundForHeader> */}
    </>
  );
};
