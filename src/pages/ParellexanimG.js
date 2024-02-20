import tw, { styled,css } from "twin.macro";
import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../Gsvgs/Demo1";
import Demo2 from "../Gsvgs/Demo2";
import Demo3 from "../Gsvgs/Demo3";
const Heading = tw.h1`text-4xl font-bold w-full text-center`;
const Description = tw.p`text-2xl mt-8`;
const Main = tw.div`min-h-screen w-screen bg-gray-200 flex  `;
// let Left = tw.div`h-screen w-1/2   sticky top-0 flex items-center justify-center   `;
const Right = tw.div`min-h-screen  w-1/2  `;
let Items = tw.div`h-screen w-full   flex flex-col items-center justify-center   `;
let Images = tw.img`h-full w-full`;

const  Left = styled.div(({variable})=>[
  tw`h-screen w-1/2   sticky top-0 flex items-center justify-center`,
  // tw`hover:rotate-180 duration-1000`,
  // tw`hover:skew-y-12 duration-1000`,
  // tw`hover:origin-top-left rotate-180 duration-1000`,
  tw``
  
  

])

let Svg = <Demo1 />;
export default ({}) => {
  const [addcomp, setaddcomp] = useState(<Demo1 />);
  

  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);

  // console.log(height);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    let a=elementRef.current.getBoundingClientRect()
    console.log(a.height);
    setHeight(a.height);

    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let compheightfromtop = height - scrollPosition;
  // console.log(compheaightfromtop);

  if (compheightfromtop < 0) {
    console.log(compheightfromtop);
    Svg = <Demo1 />;
  }
  if (compheightfromtop + height < 0) {
    console.log(compheightfromtop + height);
    Svg = <Demo2 />;
   
  }
  if (compheightfromtop + 2 * height < 0) {
    Svg = <Demo3 />;
    console.log(compheightfromtop + 2 * height);
    
  }

  return (
    <>
      {/* <Main><Heading>upper page</Heading></Main> */}
      <Main>
        {/* <Heading>heading</Heading> */}
        <Left>
          {/* <Images src={imgpath}></Images> */}

          {Svg}
        </Left>
        <Right>
          <Items ref={elementRef}>
            <Heading>First page</Heading>
            <Description>
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more. For example, use md:font-bold to apply the font-bold utility
              at only medium screen sizes and above.
            </Description>
          </Items>
          <Items>
            <Heading>Secend page</Heading>
            <Description>
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more. For example, use md:font-bold to apply the font-bold utility
              at only medium screen sizes and above.
            </Description>
          </Items>
          <Items>
            <Heading>Third page</Heading>
            <Description>
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more. For example, use md:font-bold to apply the font-bold utility
              at only medium screen sizes and above.
            </Description>
          </Items>
        </Right>
        
      </Main>
      
      {/* <Main><Heading>down page</Heading></Main> */}
    </>
  );
};
