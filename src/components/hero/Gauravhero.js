import React from "react";
import { PrimaryButton, NewPrimaryButton } from "components/misc/Buttons.js";
import {
  SectionHeading,
  HighlightedText,
  Subheading,
  NewHeadings,
} from "components/misc/Headings.js";
import tw, { styled } from "twin.macro";
import {
  Container,
  Containerbgcolor,
  NewContainer,
} from "components/misc/Layouts.js";
import {
  SectionDescription,
  NewDescription,
} from "components/misc/Typography.js";

const Rightimg = tw.img`md:(h-10/12)  w-full h-4/12 hover:scale-110 duration-500  `;
const add = "RoundedFullAnimationBgGreen";

export default ({
  btnlook = add,
  responsive = "responsive",
  bgcolor = "tan",
  flex = "itemscol",
  width = "onebytwo",
  sheightmd = "screen",
  fheightmd = "full",
  flexdirection = "itemscenter",
  overflow = "overflowhide",
  displayhide = "displayhide",
  displayblock = "displayblockmd",
  sectiondiscript = "sectiondecriptioncolor",

  heading = (
    <>
      Run your Entire <HighlightedText>Business</HighlightedText> in one Place
    </>
  ),
  description1 = (
    <>
      panthernails is a one-stop solution for evary entrpricesn who want to
      level up their business and set a standard for another business who want
      to grow
    </>
  ),
  description2 = (
    <>
      we are Serves the solution related
      <HighlightedText>
        {" "}
        loyalty,HRM,Travelling & Expence Management,{" "}
      </HighlightedText>
      we are the hidden layers between you and our customers
    </>
  ),
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
}) => {
  return (
    <>
      <NewContainer
        NCflexdirection={flexdirection}
        NCresponsive={responsive}
        NCbgcolor={bgcolor}
      >
        <NewContainer
          NCwidthmd={width}
          NCheightmd={sheightmd}
          NCheight={width}
          NCflex={flex}
          NCflexdirection={flexdirection}
          NCbgcolor={bgcolor}
        >
          <NewHeadings
            NHeading={"headingsizemd"}
            NHtextcolor={"colorPrimarySh"}
            NHtextposition={"center"}
            NHpadding={"padding4"}
          >
            {heading}
          </NewHeadings>
          <NewDescription
            NDescription={"dsizemd"}
            NDwidth={"equalto85"}
            NDtextcolor={"colorPrimarySd"}
            NDtextposition={"center"}
            NDpadding={"paddingy1"}
          >
            {description1}
          </NewDescription>
          <NewDescription
            NDescription={"dsizemd"}
            NDwidth={"equalto85"}
            NDtextcolor={"colorPrimarySd"}
            NDtextposition={"center"}
            NDpadding={"paddingy1"}
          >
            {description2}
          </NewDescription>
          <NewPrimaryButton
            href={primaryButtonUrl}
            NBbgcolor={"btnPrimary"}
            NBbganimation={"bounce"}
            rounded={"full"}
            NBtext={"textsize"}
            NBpadding={"paddingx8"}
            NBpaddingy={"paddingy3"}
            NBhover={"bgchange"}
            NBmargin={"margintop4"}
            NBtextcolor={"textwhite"}
          >
            {primaryButtonText}
            {/* <Icone src={ProfileImageCLM}/>
            <Icone src={ProfileImageRasikLoyalty}/>  */}
          </NewPrimaryButton>
        </NewContainer>
        <NewContainer
          NCflexdirection={flexdirection}
          NCoverflow={overflow}
          NCwidthmd={width}
          NCheightmd={fheightmd}
          NCdisplayhide={displayhide}
          NCdisplayblock={displayblock}
          NCbgcolor={bgcolor}
        >
          <Rightimg src="https://cdn.dribbble.com/userupload/12468591/file/original-4c59268356fb18e647e1e0847ba82d14.png?resize=1024x768&vertical=center" />
        </NewContainer>
      </NewContainer>
    </>
  );
};
