import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import framer-motion

const positions = {
  right: tw`flex-col items-center right-0 top-[20%] translate-x-1`,
  left: tw`flex-col items-start left-0 bottom-1/2 -translate-x-1`,
  bottom: tw`flex-row items-end left-1/2 bottom-0 translate-y-1 `,
};

const StyledContainer = styled.div((props) => [
  tw`fixed flex z-50 mr-1`,
  positions[props.position],
]);

const Link = styled(motion.a)((props) => [
  tw`flex items-center justify-center w-8 h-8 p-1 rounded hocus:(w-10 h-10) duration-300`,
  positions[props.position],
]);

const LinkIcon = styled.img`w-4 h-4  `;
const Wrapper = tw.div`flex items-center justify-center w-12 h-12  `;
const ArrowIcon=tw.img``
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.1 },
  }),
};

export default ({ properties }) => {
  const [show, setShow] = useState(false);
  const parsedChildren = JSON.parse(properties.links || "[]");

  return (
    <StyledContainer position={properties?.position || "bottom"}>
      <Wrapper
        onMouseEnter={() => setShow(true)}
        onClick={() => setShow((prev) => !prev)}
      >
        <LinkIcon
          src={
            show
              ? properties.upArrow
              : properties.imageSrc
          }
        />
        <ArrowIcon src="" />
      </Wrapper>

      {/* Animated Links */}
      {show &&
        parsedChildren.map((item, index) => (
          <Link
            href={item.link}
            key={`${item.link}-${index}`}
            as={motion.a}
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            variants={itemVariants}
            custom={index}
          >
            <LinkIcon src={item.icon} />
          </Link>
        ))}
    </StyledContainer>
  );
};
