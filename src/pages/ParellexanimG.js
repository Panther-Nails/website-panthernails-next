import tw, { styled,css } from "twin.macro";
import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../Gsvgs/Demo1";
import Demo2 from "../Gsvgs/Demo2";
import Demo3 from "../Gsvgs/Demo3";
const HighlightedTextHeading = tw.h1`text-sitecolor-900 text-4xl bg-sitecolor-100 mt-4 text-center w-full` ;
const Heading = tw.h1`md:text-4xl  text-2xl font-bold w-full text-center text-sitecolor-900`;
const Description = tw.p`lg:text-2xl text-lg mt-2 w-10/12   text-sitecolor-300`;
const Main = tw.div`md:(min-h-screen w-full bg-sitecolor-100  flex-row) flex flex-col min-h-screen w-full  `;
// let Left = tw.div`h-screen w-1/2   sticky top-0 flex items-center justify-center   `;
const Right = tw.div`md:w-1/2 bg-sitecolor-100 min-h-full w-full  `;
let Items = tw.div`lg:(h-screen w-full bg-sitecolor-100  flex-col items-center justify-center mt-0)   mt-4 text-center  h-1/2 flex flex-col items-center  `;
let Images = tw.img`h-full w-full`;

const  Left = styled.div(({variable})=>[
  tw`md:(h-screen w-1/2 ) bg-sitecolor-100  sticky top-0 flex items-center justify-center  `,
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
  ]



  const [addcomp, setaddcomp] = useState(<Demo1 />);
  

  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);

  // console.log(height);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const [width, setwidth] = useState(0);
  
  let addheight=0;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    let a=elementRef.current.getBoundingClientRect()
    console.log(a.width);
    setHeight(a.height);
    setwidth(a.width)


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(width<400)
  {
    addheight=450;
  }
   
 

  let compheightfromtop = height - scrollPosition;
  // console.log(compheaightfromtop);

  if (compheightfromtop+addheight < 0) {
    console.log(compheightfromtop);
    Svg = <Demo1 />;
  }
  if (compheightfromtop + height+addheight < 0) {
    console.log(compheightfromtop + height);
    Svg = <Demo2 />;
   
  }
  if (compheightfromtop + 2 * height+addheight < 0) {
    Svg = <Demo3 />;
    console.log(compheightfromtop + 2 * height);
    
  }

  return (
    <>
      {/* <Main><Heading>upper page</Heading></Main> */}
      <HighlightedTextHeading>Products</HighlightedTextHeading>
      <Main>
        
        {/* <Heading>heading</Heading> */}
        <Left>
          {/* <Images src={imgpath}></Images> */}

          {Svg}
        </Left>
        <Right>
            {itemcontant.map((info,index)=>(
              
              <Items ref={elementRef}>
                <Heading>{info.heading}</Heading>
                <Description> {info.discription} </Description>
              </Items>
            ))}
          {/* <Items ref={elementRef}>
            <Heading>Rasik Loyalty</Heading>
            <Description>
            rasik loyalty is help you to bring the loyal influencer and then
            influencer bring a loyal customers for you 
            </Description>
          </Items>
          <Items>
            <Heading>Panther Nails One App</Heading>
            <Description>
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more. For example
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
          </Items> */}
        </Right>
        
      </Main>
      
      {/* <Main><Heading>down page</Heading></Main> */}
    </>
  );
};
