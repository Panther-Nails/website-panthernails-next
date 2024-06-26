import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import tw from "twin.macro";

const Wrapper = tw.div` top-0 left-0 w-screen h-screen bg-transparent z-50 fixed`;
const SkipButton = tw.button`absolute m-2 right-0 bottom-0 w-8 h-8 text-lg font-bold rounded bg-gray-500 hover:bg-primary-500`;

export default ({ properties }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => setShowConfetti(false),
      properties.confettiTime ? JSON.parse(properties.confettiTime) : 4000
    );
    return () => clearTimeout(timer);
  }, [properties.confettiTime]);

  return showConfetti ? (
    <Wrapper>
      <SkipButton onClick={() => setShowConfetti(false)}>X</SkipButton>
      <Confetti />
    </Wrapper>
  ) : null;
};
