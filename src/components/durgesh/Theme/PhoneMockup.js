import React from "react";
import { Body } from "components/misc/Layouts";
import tw from "twin.macro";

const Mockup = tw.div`relative rounded-xl shadow-xl w-72 h-144`;
const Screen = tw.div`absolute inset-0 bg-white overflow-hidden rounded-xl  bg-primary-300`;
const Camera = tw.div`absolute top-0 left-1/2 transform translate-x-1/2 mt-2 ml-5 w-4 h-4 bg-gray-300 rounded-full border-2 border-black`;
const Speaker = tw.div`absolute top-0 right-1/2 transform translate-x-1/2 mt-3 w-12 h-2 bg-gray-300 rounded-full border-2 border-black`;
const HomeButton = tw.div`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-8 h-8 bg-gray-300 rounded-full border-2 border-black`;
const PhoneMockup = tw.div`flex-1 flex mb-5 ml-12 `;
const Image = tw.img`bg-cover h-full w-full`;

export default ({ children }) => {
  return (
    <Body>
      <PhoneMockup>
        <Mockup>
          <Screen>
            <Image src="https://media.idownloadblog.com/wp-content/uploads/2017/08/ScreenshotXI-GIF.gif" />
          </Screen>
          <Camera></Camera>
          <Speaker></Speaker>
          <HomeButton></HomeButton>
        </Mockup>
      </PhoneMockup>
    </Body>
  );
};
