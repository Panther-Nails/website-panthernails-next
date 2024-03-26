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
  NewHeadings,
} from "components/misc/Headings.js";
import {
  SectionDescription,
  Description,
  NewDescription,
} from "components/misc/Typography.js";
import { NewContainer } from "components/misc/Layouts.js";

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
  bgcolorarray=["Primary","white","black","tan","pink","nav"],
  //text from services
  cards = null,
  sectionheading = "Services",
  subheading = "Features",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet.",
}) => {
  const itemcontant = [
    {
      heading: "Secure ",
      discription:
        "Cloud Infrastructure with a safe & secured credentials enabled with SSO. ",
      url: "https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Support",
      discription:
        " Prudence customer success team that can converse in major indian languages.",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Customizable",
      discription:
        " A Rapid & Stable Development Based on Panther Nails After8 Framework makes it easy. ",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Reliable ",
      discription:
        "The application provides uninterrupted access to the system and 99% up time.",
      url: "https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Fast",
      discription:
        " Robust & Scalable Cloud Infrastructure where you get ready to grow with your business.",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      heading: "Easy",
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
        <NewContainer
          NDwidth={"equalto85"}
          NCsticky={"stickontop"}
          NCheight={"full"}
          NCflexdirection={"itemscenter"}
          NCflex={"itemscol"}
          NCbgcolor={"tan"}
          NCflexgap={"flexgapmd"}
        >
          <NewHeadings
            NHeading={"headingsizemd"}
            NHtextcolor={"colorPrimarySh"}
            NHtextposition={"center"}
            NHpadding={"padding4"}
          >
            {sectionheading}
          </NewHeadings>

          <NewDescription
            NDescription={"dsizemd"}
            NDwidth={"equalto85"}
            NDtextcolor={"colorPrimarySd"}
            NDtextposition={"center"}
            NDpadding={"paddingy1"}
          >
            {description}
          </NewDescription>
        </NewContainer>
        {/* <Heading>heading</Heading> */}
        {/* <Left>

        <Heading>Services</Heading>
          
        </Left> */}
        <NewContainer
          NCwidth={"equalto95"}
          NCheight={"full"}
          NCflexdirection={"itemscenter"}
          NCflex={"itemscol"}
          
          
        >
          {itemcontant.map((info, index) => (
            <>
              {index % 2 === 0 ? (
                <NewContainer
                  NCwidth={"full"}
                  NCheight={"screenhalf"}
                  NCsticky={"stickonmid"}
                  NCrounded={"1"}
                  NCoverflow={"overflowhide"}

                  // NCborder={"bordersolide2"}
                  // NCbordercolor={"random"}
                >
                  <NewContainer
                    NCwidth={"full"}
                    NCheight={"full"}
                    NCflexdirection={"itemscenter"}
                    NCflexmd={"itemsrow"}
                    NCflex={"itemscol"}
                  >
                    <NewContainer
                      NCwidth={"full"}
                      NCheight={"full"}
                      NCflexdirection={"itemscenter"}
                      NCbgcolor={bgcolorarray[index]}
                      NCflex={"itemscol"}
                    >
                      <NewHeadings
                        NHeading={"headingsizesm"}
                        NHtextcolor={"colorPrimaryH"}
                        NHtextposition={"center"}
                        NHpadding={"padding2"}
                        NHwidth={"full"}
                      >
                        {info.heading}
                      </NewHeadings>
                      <NewDescription
                        NDescription={"dsizesm"}
                        NDwidth={"equalto85"}
                        NDtextcolor={"colorPrimaryD"}
                        NDtextposition={"center"}
                        NDpadding={"padding2"}
                      >
                        {" "}
                        {info.discription}{" "}
                      </NewDescription>
                    </NewContainer>
                    <NewContainer
                      NCwidth={"full"}
                      NCflexdirection={"itemscenter"}
                      NCflex={"itemscol"}
                      NCbgcolor={"black"}
                    ></NewContainer>
                  </NewContainer>
                </NewContainer>
              ) : (
                <NewContainer
                  NCwidth={"full"}
                  NCheight={"screenhalf"}
                  NCsticky={"stickonmid"}
                  NCrounded={"1"}
                  NCoverflow={"overflowhide"}
                  // NCborder={"bordersolide2"}
                  // NCbordercolor={"random"}
                >
                  <NewContainer
                    NCwidth={"full"}
                    NCheight={"full"}
                    NCflexdirection={"itemscenter"}
                    NCflexmd={"itemsrow"}
                    NCflex={"itemscol"}
                  >
                    <NewContainer
                      NCwidth={"full"}
                      NCflexdirection={"itemscenter"}
                      NCflex={"itemscol"}
                    ></NewContainer>
                    <NewContainer
                      NCwidth={"full"}
                      NCheight={"full"}
                      NCflexdirection={"itemscenter"}
                      NCbgcolor={bgcolorarray[index]}
                      NCflex={"itemscol"}
                    >
                      <NewHeadings
                        NHeading={"headingsizesm"}
                        NHtextcolor={"colorPrimaryH"}
                        NHtextposition={"center"}
                        NHpadding={"padding2"}
                        NHwidth={"full"}
                      >
                        {info.heading}
                      </NewHeadings>
                      <NewDescription
                        NDescription={"dsizesm"}
                        NDwidth={"equalto85"}
                        NDtextcolor={"colorPrimaryD"}
                        NDtextposition={"center"}
                        NDpadding={"padding2"}
                      >
                        {" "}
                        {info.discription}{" "}
                      </NewDescription>
                    </NewContainer>
                  </NewContainer>
                </NewContainer>
              )}

              {/* next */}

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
