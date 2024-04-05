import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryThemeButton, PrimaryButton } from "components/misc/Buttons.js";
import { Container, Column, Image } from "components/misc/Layouts.js";
import { Heading } from "components/misc/Typography.js";
import AnimatedHeading from "components/durgesh/AnimatedHeading";
import { useEffect, useState } from "react";
import { customAnimations } from "tailwind.config";

const Header = tw(HeaderBase)` `;
const Row = tw.div``;

const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const ImageColumn = tw(Column)` `;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;

// const Image = styled.img`
//   // max-width: 100%;
//   // width: 24rem;
//   // border-radius: 0.5rem;
//   // position: relative;
//   // z-index: 20;
//   // height: auto;
//   // transition: transform 0.3s ease-in-out;
//   // &:hover {
//   //   transform: scale(1.05) rotateX(5deg) rotateY(5deg);
//   //   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
//   // }
// `;

export default ({
  message = "Elevating Engagement, Empowering Growth for",
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
  headingTextsAPI = [" Your Business", "Loyalty", "HRM"],
  backgroundImage = "",
}) => {
  const [headingText, setHeadingText] = useState("Your Business");

  useEffect(() => {
    const highlightText = setInterval(() => {
      const headingTexts = headingTextsAPI;
      const nextIndex =
        (headingTexts.indexOf(headingText) + 1) % headingTexts.length;

      setHeadingText(headingTexts[nextIndex]);
    }, 2000);

    return () => clearInterval(highlightText);
  }, [headingText]);

  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === message.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [message]);

  return (
    <>
      <Container tw="px-8 lg:px-0 h-screen " imageSrc={backgroundImage}>
        {/* <BackgroundForHeader> */}
        <Header
          tw="lg:w-full"
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

        <Container tw="flex flex-col  lg:flex-row justify-between items-center  lg:pt-5 max-w-screen-2xl mx-auto sm:px-12">
          <Column tw=" pt-16">
            <AnimatedHeading>
              <Heading tw="text-left">
                {text}
                <Heading tw="text-left text-headingHighlightTextColor  duration-1000 animate-pulse ease-out">
                  {headingText}
                </Heading>
              </Heading>
            </AnimatedHeading>
            <Description>{description}</Description>
            <PrimaryThemeButton tw="float-left" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryThemeButton>
          </Column>
          <ImageColumn>
            {/* <Container tw="lg:h-screen bg-transparent lg:block"> */}
            {/* <ImageContainer tw="bg-green-700"> */}
            <Image
              src={imageSrc}
              tw=" lg:block float-right lg:h-128 lg:w-128"
            />
            {/* </ImageContainer> */}
            {/* </Container> */}
          </ImageColumn>
        </Container>
      </Container>
    </>
  );
};
