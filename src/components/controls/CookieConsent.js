import React, { useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import Signup from "pages/Signup";
import ScrollingAnimationUpSide from "components/durgesh/ScrollingAnimationUpSide";

import {
  getCookie,
  setCookie,
  CookieConsentValue,
  CookieValues,
  CookieKeys,
} from "services/CookieService";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-secondary-500 rounded-lg relative`;
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

export default ({
  leftFirst = true,
  text = (
    <>
      <HighlightedText>
        This website collects cookies to deliver
      </HighlightedText>{" "}
      better user experience
    </>
  ),
  primaryLinkText = "Accept",
  secondaryLinkText = "Reject",
  pushDownFooter = true,
  backgroundColor = tw`bg-primary-500`,
  textCss = tw`text-white`,
  containerBg = tw``,
}) => {
  const [cookieConsent, setCookieConsent] = useState(CookieConsentValue);

  return (
    <Container
      css={tw`flex justify-center items-center bg-transparent  w-screen h-screen absolute z-40`}
    >
      {cookieConsent == null ? (
        <Container css={tw` z-50`}>
          {/* && pushDownFooter && tw`mb-20 lg:mb-24` */}
          <ContentWithPaddingXl>
            <PrimaryBackgroundContainer css={backgroundColor}>
              <Row>
                <TextContainer>
                  <Text css={textCss}>{text}</Text>
                </TextContainer>
                <LinksContainer>
                  <ScrollingAnimationUpSide y={400}>
                    <PrimaryLink
                      onClick={() => {
                        setCookie(
                          CookieKeys.CookieConsent,
                          CookieValues.Accepted
                        );
                        setCookieConsent(CookieValues.Accepted);
                      }}
                    >
                      {primaryLinkText}
                    </PrimaryLink>
                    <Link
                      onClick={() => {
                        setCookie(
                          CookieKeys.CookieConsent,
                          CookieValues.Rejected
                        );
                        setCookieConsent(CookieValues.Rejected);
                      }}
                    >
                      {secondaryLinkText}
                    </Link>
                  </ScrollingAnimationUpSide>
                </LinksContainer>
              </Row>
              <DecoratorBlobContainer>
                <DecoratorBlob1 />
                <DecoratorBlob2 />
              </DecoratorBlobContainer>
            </PrimaryBackgroundContainer>
          </ContentWithPaddingXl>
        </Container>
      ) : (
        <></>
      )}
    </Container>
  );
};
