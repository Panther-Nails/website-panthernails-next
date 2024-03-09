import tw, { styled,css } from "twin.macro";
import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../Gsvgs/Demo1";
import Demo2 from "../Gsvgs/Demo2";
import Demo3 from "../Gsvgs/Demo3";
const HighlightedTextHeading = tw.h1`   text-sitecolor-900 text-4xl bg-sitecolor-100 mt-4 text-center w-full` ;
const Heading = tw.h1`md:text-4xl   text-2xl font-bold w-full text-center text-sitecolor-900`;
const Description = tw.p`lg:text-2xl text-lg mt-2 w-10/12   text-sitecolor-300`;
const Main = tw.div`md:(min-h-screen w-full bg-sitecolor-100  )    flex flex-col min-h-full w-full  `;
// let Left = tw.div`h-screen w-1/2   sticky top-0 flex items-center justify-center   `;
const Right = tw.div`md:w-full bg-sitecolor-100 min-h-full lg:p-16    flex flex-col items-center justify-center`;
let Items = tw.div`lg:(h-half w-full p-0  flex-col items-center justify-center ) rounded-lg h-half p-4 bg-black  sticky top-0  text-center   flex flex-col items-center  `;
let Images = tw.img`h-full w-full`;
let Items1 = tw.div`lg:(h-half w-full p-0  flex-col items-center justify-center ) rounded-lg  h-half p-4 bg-white sticky top-1/2  text-center   flex flex-col items-center  `;
// let Temp = tw.div`bg-white sticky top-1/2`;
const  Left = styled.div(({variable})=>[
  tw`md:(h-screen w-1/2 ) bg-sitecolor-100 hidden sticky top-0 flex items-center justify-center  `,
  // tw`hover:rotate-180 duration-1000`,
  // tw`hover:skew-y-12 duration-1000`,
  // tw`hover:origin-top-left rotate-180 duration-1000`,
  tw``
  
  

])

let Svg = <Demo1 />;

export default ({
  heading = "Rasik Loyalty",//chenges in headings Questions to product Name
  description = "we have bunch of features that help you to establish the pure relation with influencers and you can connect anytime with influencers using rasik loyalty app features. ",
}) => {

  const itemcontant = [
    {
      heading: "Rasik Loayalty ",
      discription:
        "rasik loyalty is help you to bring the loyal influencer and then influencer bring a loyal customers for you ",
        url:'https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      heading: "One App",
      discription:" You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url:'https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      heading: "Travel Management",
      discription:" You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url:'https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      heading: "Rasik Loayalty ",
      discription:
        "rasik loyalty is help you to bring the loyal influencer and then influencer bring a loyal customers for you ",
        url:'https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      heading: "One App",
      discription:" You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url:'https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      heading: "Travel Management",
      discription:" You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url:'https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    
    
  ]

  return (
    <>
      
      
      <Main>
      <HighlightedTextHeading>Services</HighlightedTextHeading>
        
        {/* <Heading>heading</Heading> */}
        {/* <Left>

        <Heading>Services</Heading>
          
        </Left> */}
        <Right>
            {itemcontant.map((info,index)=>(
              <>
              {index % 2 === 0 ?
              <Items >
                
                <Heading>{info.heading}</Heading>
                <Description> {info.discription} </Description>
              </Items>:
              
                <Items1 >
                  
                <Heading>{info.heading}</Heading>
                <Description> {info.discription} </Description>
              </Items1>}
              </>
            ))}
         
        </Right>
        
      </Main>
      
      {/* <Main><Heading>down page</Heading></Main> */}
    </>
  );
};
