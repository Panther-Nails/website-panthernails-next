import tw, { styled, css } from "twin.macro";
import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../Gsvgs/Demo1";
import Demo2 from "../Gsvgs/Demo2";
import Demo3 from "../Gsvgs/Demo3";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import {
  SectionHeading,
  HighlightedText,
  Subheading,
  Heading,
} from "components/misc/Headings.js";
import { SectionDescription, Description } from "components/misc/Typography.js";
import {
  Container,
  ContentWithPaddingXl,
  SimpleContainer,
  Container90,
  NewContainer,
} from "components/misc/Layouts.js";

let Svg = <Demo1 />;

export default ({
  //style from services
  headingstyle = "headingtext",
  contbgtransparent = "Itemscenterbgtransparent",
  simplecontcol = "Defultcontainercentercol",
  simplestickycont = "Defultcontainersticktophalf",
  sectiondiscript = "sectiondecriptioncolor",
  descriptionsyle = "descriptioncolor",
  smallcol = "Container90col",
  //text from services
  cards = null,
  sectionheading = "Services",
  subheading = "Features",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  const itemcontant = [
    {
      heading: "Rasik Loayalty ",
      discription:
        "rasik loyalty is help you to bring the loyal influencer and then influencer bhelp you to bring the loyal influencer and then influencer b help you to bring the loyal influencer and then influencer bring a loyal customers for you ",
      url: "https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "One App",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Travel Management",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Rasik Loayalty ",
      discription:
        "rasik loyalty is help you to bring the loyal influencer and then influencer bring a loyal customers for you ",
      url: "https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "One App",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Travel Management",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    { imageSrc: SupportIconImage, title: "24/7 Support" },
    { imageSrc: CustomizeIconImage, title: "Customizable" },
    { imageSrc: ReliableIconImage, title: "Reliable" },
    { imageSrc: FastIconImage, title: "Fast" },
    { imageSrc: SimpleIconImage, title: "Easy" },
  ];
  if (!cards) cards = defaultCards;

  return (
    <>
      <NewContainer
        NCwidth={"full"}
        NCheight={"full"}
        NCflexdirection={"itemscenter"}
        NCflex={"itemscol"}
        NCbgcolor={"tan"}
        NCflexgap={"flexgapmd"}
      >
        <SectionHeading>{sectionheading}</SectionHeading>
        
          <SectionDescription>{description}</SectionDescription>
        
        {/* <Heading>heading</Heading> */}
        {/* <Left>

        <Heading>Services</Heading>
          
        </Left> */}
        <NewContainer NCwidth={"equalto95"} NCheight={"full"} NCflexdirection={"itemscenter" } NCflex={"itemscol"}>
          {itemcontant.map((info, index) => (
            <>
              <NewContainer NCwidth={"full"} NCheight={"screenhalf"} NCsticky={"stickontop"} NCbgcolor={"black"}  NCrounded={"1"} NCborder={"bordersolide2"} NCbordercolor={"random"}>
              <NewContainer
                NCwidth={"full"}
                NCheight={"full"}
                NCflexdirection={"itemscenter"}
                NCflex={"itemscol"}
              >
                  <Heading Heading={headingstyle}>{info.heading}</Heading>
                  <Description Description={descriptionsyle}>
                    {" "}
                    {info.discription}{" "}
                  </Description>
                </NewContainer>
              </NewContainer>

              {/* <Items1 >
                  
                <Heading>{info.heading}</Heading>
                <Description> {info.discription} </Description>
              </Items1> */}
            </>
          ))}
        </NewContainer>
      </NewContainer>

      {/* <Main><Heading>down page</Heading></Main> */}
    </>
  );
};
