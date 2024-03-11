import React from "react";
import { PrimaryButton  } from "components/misc/Buttons.js";
import { SectionHeading,HighlightedText,Subheading } from "components/misc/Headings.js";
import tw,{styled} from "twin.macro";



const Container = tw.div`bg-sitecolor-100 text-sitecolor-300 relative  min-h-full w-full flex-col md:(flex flex-row ) items-center justify-center   `;//hover:scale-110
const Left = tw.div` h-1/2 w-full  md:(w-1/2 h-screen -mt-8 )   flex items-center justify-center md:gap-y-4 flex-col  `;
// const PrimaryButton1 = tw.button`mt-8 animate-bounce px-8 py-3 font-bold rounded-full bg-green-600 text-gray-100 hocus:(bg-green-900 animate-none) hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const Right = styled.div`${tw`hidden  w-8/12 bg-gray-1000 w-screen  md:(w-1/2 h-screen block ) overflow-hidden flex items-center justify-center ` }`;
const Rightimg = tw.img`md:(h-10/12)  w-full h-4/12 hover:scale-110 duration-500  `;
const buttonRoundedCss1 = tw`rounded-full  w-32 ml-40  flex overflow-hidden hover:( w-80)`;


export default ({
    rounded="full",
   animation="animation",
   bgcolor="green",
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
      
      <Container>
        <Left>
          <SectionHeading>{heading}</SectionHeading>
          <Subheading>{description1}</Subheading>
          <Subheading>{description2}</Subheading>
          <PrimaryButton
            as="a"
            href={primaryButtonUrl}
            css={buttonRoundedCss1}
            rounded={rounded}//only one pro working create abou varable array then use it
            animation={animation}
          >
            {primaryButtonText}
            {/* <Icone src={ProfileImageCLM}/>
            <Icone src={ProfileImageRasikLoyalty}/>  */}
          </PrimaryButton>
        </Left>
        <Right>
          <Rightimg src="https://cdn.dribbble.com/userupload/12468591/file/original-4c59268356fb18e647e1e0847ba82d14.png?resize=1024x768&vertical=center" />
        </Right>
      </Container>
    </>
  );
};
