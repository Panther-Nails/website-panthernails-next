import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import TwoStepControl from "helpers/TwoStepControl";

const PopupView = styled.div((props) => [
  tw` w-full flex flex-col rounded-xl bg-white   h-full border px-4 py-2 border-black flex items-center justify-center  `,
]);

const First = tw.div`w-full  lg:px-8 rounded-xl px-2 flex items-center`;
const Second = tw.div` w-full h-full rounded-xl   `;
const Top = tw.div` h-[40%] text-center flex items-center `;
const Middel = tw.div` h-[80%] flex items-center `;
const Bottom = tw.div`h-[20%] flex items-end lg:items-center justify-center   `;
const PopupViewImg = tw.img`w-full h-full rounded-xl`;

const Text = styled.h1((props) => [
  tw`text-lg lg:text-2xl font-black   text-center`,
  `${props.themeColor === "CLM" ? `color:#1E90FF` : `color:#77255B`}`,
]);

const GetBtn = styled.button((props) => [
  tw`text-lg lg:text-xl text-white border-2 border-black font-black h-auto py-2 px-3 rounded-full`,
  `  background-color: ${
    props.themeColor === "loyalty" ? "#77255B" : "#1E90FF"
  };
    
  &:hover {
    background-color: ${props.themeColor === "loyalty" ? "#69264F" : "#0067CC"};
   
  }`,
]);
const Wrapper = tw.div`h-[60%] flex flex-col justify-between `;
export default ({ properties }) => {
  const [checkFormOpen, setCheckFormOpen] = useState(false);

  const openTheForm = (e) => {
    e.stopPropagation()
    setCheckFormOpen(true);
  };
  return (
    <PopupView onClick={() => console.log("full popup click")}>
      {checkFormOpen ? (
        <First>
          <TwoStepControl properties={properties} />
        </First>
      ) : (
        <Second>
          {properties.imageSrc && (
            <Top>
              <PopupViewImg src={properties.imageSrc} />
            </Top>
          )}
          <Wrapper>
            {properties.popupHeading && (
              <Middel>
                <Text themeColor={properties.productEnquiryFor}>
                  {properties.popupHeading}
                </Text>
              </Middel>
            )}
            {properties.btnText && (
              <Bottom>
                <GetBtn
                  onClick={openTheForm}
                  themeColor={properties.productEnquiryFor}
                >
                  {properties.btnText}
                </GetBtn>
              </Bottom>
            )}
          </Wrapper>
        </Second>
      )}
    </PopupView>
  );
};
