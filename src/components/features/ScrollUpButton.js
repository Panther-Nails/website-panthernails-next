import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const UpButton = tw.button` w-10 h-10 lg:(w-12 h-12 p-2) duration-200 hocus:scale-x-110 hocus:scale-y-110 bg-[#E5E5E5] p-2 fixed z-50 bottom-0 right-0 mb-32 mr-2 rounded-full `;
const Icon = styled.img` w-12 h-12 lg:(w-16 h-16 p-4)`;

export default ({ properties }) => {
  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const imageSrc = "https://cdn-icons-png.flaticon.com/128/892/892692.png";

  const [scroll, setScroll] = useState();
  const [scrollCounter, setScrollCounter] = useState(0);
  const [scrollCondition, setScrollCondition] = useState(0);
  
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollCounter(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (scrollCounter > 50 && scrollCondition === 0) {
      setScrollCondition(scrollCondition + 1);
      setScroll(() => {
        return (
          <>
            <UpButton onClick={scrolltop}>
              <Icon src={imageSrc} />
            </UpButton>
          </>
        );
      });
    } else if (scrollCounter < 50 && scrollCondition === 1) {
      setScrollCondition(scrollCondition - 1);
      setScroll(() => {
        return <></>;
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [scrollCounter]);

  return <>{scroll}</>;
};
