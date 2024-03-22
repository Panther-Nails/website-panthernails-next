import { Container } from "components/misc/Layouts";
import React from "react";
import { useInView } from "react-intersection-observer";
import tw from "twin.macro";

export default ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
    rootMargin: "-50px 0px", // Adjust root margin for earlier or later triggering
  });

  return (
    <Container
      ref={ref}
      css={[
        tw`w-screen h-full flex items-center justify-center fixed transition-transform duration-500`,
        inView ? tw`transform-none` : tw`translate-x-full`,
      ]}
    >
      {children}
    </Container>
  );
};
