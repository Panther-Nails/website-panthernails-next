import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

export default () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  return showConfetti ? <Confetti /> : null;
};
