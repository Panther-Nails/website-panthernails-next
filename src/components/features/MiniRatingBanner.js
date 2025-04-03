import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { Star } from "lucide-react";
import styled from "styled-components";

// Styled Components
const ContainerWrapper = tw.section`my-4`;

const Container = styled.div`
  ${tw`flex flex-col md:flex-row items-center justify-center px-6 py-2 rounded shadow-md w-full mx-auto text-gray-800 text-xs lg:text-lg font-medium`}
  background-image: linear-gradient(to top, #003366, #0f52ba);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const TextWrapper = tw.p`text-white font-bold text-center px-8 md:px-0`;
const StarsWrapper = tw.div`ml-2 flex items-center font-medium`;
const RatingWrapper = tw.p`text-white font-bold ml-2`;

const StarContainer = styled.div`
  ${tw`relative flex`}
  position: relative;
  width: ${({ size }) => size * 5}px;
  height: ${({ size }) => size}px;
`;

const StarBase = styled.div`
  ${tw`absolute flex text-gray-400`}/* Background Gray Stars */
`;

const StarFill = styled.div`
  ${tw`absolute flex text-yellow-500`} /* Foreground Yellow Stars */
  width: ${({ fillPercent }) => fillPercent}%;
  overflow: hidden;
  display: flex;
`;

const StarItem = styled(Star)`
  flex-shrink: 0; /* Prevent shrinking */
`;

const RatingBanner = ({ properties }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () =>
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const rating = Number(properties.rating) || 4.2;
  const starSize = isMobile ? 12 : 20;
  const fillPercent = (rating / 5) * 100;

  return (
    <ContainerWrapper>
      <Container>
        <TextWrapper>{properties.heading}</TextWrapper>
        <StarsWrapper>
          <StarContainer size={starSize}>
            {/* Background Gray Stars */}
            <StarBase>
              {[...Array(5)].map((_, i) => (
                <StarItem key={i} size={starSize} fill="#A9B1BA"/>
              ))}
            </StarBase>

            {/* Foreground Yellow Stars (Clipped by Width) */}
            <StarFill fillPercent={fillPercent}>
              {[...Array(5)].map((_, i) => (
                <StarItem key={i} size={starSize} fill="#facc15" />
              ))}
            </StarFill>
          </StarContainer>
          <RatingWrapper>{` ${rating} Rating`}</RatingWrapper>
        </StarsWrapper>
      </Container>
    </ContainerWrapper>
  );
};

export default RatingBanner;
