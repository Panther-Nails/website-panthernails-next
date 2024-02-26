
import React from "react";
import { useSpring, animated } from "react-spring";
 
const ScrollingAnimationUpSideYaxis = ({ children, y }) => {
  const scrollAnimation = useSpring({
    from: { transform: `translateY(${y}px)` },
    to: { transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });
 
  return <animated.div style={scrollAnimation}>{children}</animated.div>;
};
 
export default ScrollingAnimationUpSideYaxis;