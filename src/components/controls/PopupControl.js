import React, { useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

import {
  getCookie,
  setCookie,
  CookieConsentValue,
  CookieValues,
  CookieKeys,
} from "services/CookieService";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

// export const NotificationBarPullout = styled.div((props) => [
//   tw`top-0 border-b z-50 flex justify-between items-center p-1 lg:px-20 font-semibold`,
//   backgroundColor[props.type || "none"],
// ]);

const getSizeAndPosition = (props) => {
  if (props.size == "big" && props.position == "center")
    return tw`w-1/2 h-1/2 translate-x-1/2 translate-y-1/4`;
  else if (props.size == "small" && props.position == "center")
    return tw`w-1/4 h-1/4 translate-x-full translate-y-full`;
  else return tw``;
};

// const popupSizes = {
//   big: tw`w-1/2 h-1/2 `,
//   medium: tw`w-1/3 h-1/3`,
//   small: tw`w-1/4 h-1/4`,
//   none: tw``,
// };

// const popupPositions = {
//   center: tw`translate-x-1/2 translate-y-1/4 `,
//   leftTop: tw`translate-x-[400px] translate-y-24 `,
//   none: tw``,
// };

const Popup = styled.div((props) => [
  tw`fixed top-0 left-0 rounded shadow-lg z-50`,
  getSizeAndPosition(props),
]);

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-white rounded-lg relative`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-xl sm:text-3xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto  hocus:bg-red-600  text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;

const PrimaryLink = tw(
  Link
)` text-gray-100 shadow-lg hocus:bg-green-600 hocus:text-gray-200 bg-gradient-to-r from-green-400 to-blue-500  text-black font-bold hover:border-black`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

const HighlightedText = tw.span`text-primary-900 font-bold`;

export default ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState("set");

  return (
    <Popup size="small" position="center">
      <Container css={tw`bg-gray-300 border border-2 rounded`}>
        {/* && pushDownFooter && tw`mb-20 lg:mb-24` */}
        <Container css={tw`bg-gray-500`}>
          <CloseIcon tw="p-1 bg-red-300 rounded fixed right-0" />
          <>{children}</>
          {/*
              <TextContainer>
                <Text css={textCss}>{text}</Text>
              </TextContainer>
              <LinksContainer>
                <PrimaryLink
                  onClick={() => {
                    setCookie(CookieKeys.CookieConsent, CookieValues.Accepted);
                    setCookieConsent(CookieValues.Accepted);
                  }}
                >
                  {primaryLinkText}
                </PrimaryLink>
              </LinksContainer>
            </Row> */}
        </Container>
      </Container>
    </Popup>
  );
};
