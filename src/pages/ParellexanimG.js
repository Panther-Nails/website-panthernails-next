import tw, { styled, css } from "twin.macro";
import React, { useRef, useState, useEffect } from "react";
import {
  SimpleContainer,
  Container,
  Containerbgcolor,
  NewContainer,
} from "../components/misc/Layouts.js";
import { Heading, SectionHeading } from "../components/misc/Headings.js";
import {
  SectionDescription,
  Description,
} from "../components/misc/Typography.js";
import Demo1 from "../Gsvgs/Demo1";
import Demo2 from "../Gsvgs/Demo2";
import Demo3 from "../Gsvgs/Demo3";

let Svg = <Demo1 />;
export default ({
  itemshow = "Defultcontainer",
  bgcolor = "bg",
  halfwidth = "DefultcontainerHalf",
  stickycontainer = "StickContainerontop",
  chailditems = "ItemsInPhoneAndWindowhalf",
  heading = "headingtext",
  descript = "descriptioncolor",
  headingtext = "Rasik Loyalty", //chenges in headings Questions to product Name
  description = "we have bunch of features that help you to establish the pure relation with influencers and you can connect anytime with influencers using rasik loyalty app features. ",
}) => {
  const itemcontant = [
    {
      headingtext: "Rasik Loayalty ",
      discription:
        "rasik loyalty is help you to bring the loyal influencer and then influencer bring a loyal customers for you ",
      url: "https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      headingtext: "One App",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      headingtext: "Travel Management",
      discription:
        " You can also use variant modifiers to target media queries likeresponsive breakpoints, dark mode, prefers-reduced-motion, and more. For example",
      url: "https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

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

  let addheight = 0;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    let a = elementRef.current.getBoundingClientRect();
    console.log(a.width);
    setHeight(a.height);
    setwidth(a.width);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (width < 400) {
    addheight = 450;
  }

  let compheightfromtop = height - scrollPosition;
  // console.log(compheaightfromtop);

  if (compheightfromtop + addheight < 0) {
    console.log(compheightfromtop);
    Svg = <Demo1 />;
  }
  if (compheightfromtop + height + addheight < 0) {
    console.log(compheightfromtop + height);
    Svg = <Demo2 />;
  }
  if (compheightfromtop + 2 * height + addheight < 0) {
    Svg = <Demo3 />;
    console.log(compheightfromtop + 2 * height);
  }

  return (
    <>
      {/* <Main><Heading>upper page</Heading></Main> */}
      <SectionHeading>Products</SectionHeading>
      <NewContainer  NCresponsive={"responsive"} >
        <Container Container={stickycontainer}>
          {/* <Heading>heading</Heading> */}
          {/* <Images src={imgpath}></Images> */}

          {Svg}
        </Container>
        <SimpleContainer SimpleContainer={halfwidth}>
          {itemcontant.map((info, index) => (
            <Container Container={chailditems} ref={elementRef}>
              <Heading Heading={heading}>{info.headingtext}</Heading>
              <Description Description={descript}>
                {" "}
                {info.discription}{" "}
              </Description>
            </Container>
          ))}
        </SimpleContainer>
      </NewContainer>
    </>
  );
};
