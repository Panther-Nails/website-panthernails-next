import React from "react";
import { PrimaryButton  } from "components/misc/Buttons.js";
import { SectionHeading,HighlightedText,Subheading } from "components/misc/Headings.js";
import tw,{styled} from "twin.macro";
import  {Container}   from "components/misc/Layouts.js";
import {SectionDescription} from "components/misc/Typography.js"



const Rightimg = tw.img`md:(h-10/12)  w-full h-4/12 hover:scale-110 duration-500  `;


export default ({
  btnlook="RoundedFullAnimationBgGreen",
  itemsshow="ItemsInPhoneAndWindow",
  insideitemshow="ItemscenterColWidthhalf",
  insidehide="Itemshideonmovileview",
  sectiondiscript="sectiondecriptioncolor",

    
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
      
      <Container Container={itemsshow}>
        <Container Container={insideitemshow}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription SectionDescription={sectiondiscript}>{description1}</SectionDescription>
          <SectionDescription SectionDescription={sectiondiscript}>{description2}</SectionDescription>
          <PrimaryButton
            as="a"
            href={primaryButtonUrl}
            Rounded={btnlook}
          >
            {primaryButtonText}
            {/* <Icone src={ProfileImageCLM}/>
            <Icone src={ProfileImageRasikLoyalty}/>  */}
          </PrimaryButton>
        </Container>
        <Container Container={insidehide}  >
          <Rightimg src="https://cdn.dribbble.com/userupload/12468591/file/original-4c59268356fb18e647e1e0847ba82d14.png?resize=1024x768&vertical=center" />
        </Container >
      </Container>
    </>
  );
};
