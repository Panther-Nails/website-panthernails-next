
import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
 
const AnimatedHeading = ({ children,duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });
 
  const springProps = useSpring({
    opacity: inView ? 1 : 0, // Fade in when in view
    transform: inView ? "translateY(0px)" : "translateY(50px)", // Slide up when in view
    // config : {duration : duration}
  });
 
  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};
 
export default AnimatedHeading;