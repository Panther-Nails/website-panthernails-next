import React, { useEffect, useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

import {
  setCookie,
  setCookieForDays,
  CookieValues,
  CookieKeys,
  CookieDuration,
} from "services/CookieService";
import { ClearCache } from "services/CacheService";
import { useSession } from "providers/SessionProvider";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-white rounded-lg relative`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-xl sm:text-3xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto cursor-pointer border-2 border-red-700  lg:hover:border-red-700 lg:border-transparent  text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold  tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;

const PrimaryLink = tw(
  Link
)` text-gray-100 shadow-lg hocus:bg-green-600 hocus:text-gray-200 bg-gradient-to-r from-green-400 to-blue-500  text-black font-bold hover:border-black border-transparent`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

const HighlightedText = tw.span`text-primary-900 font-bold`;

export default ({
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
  backgroundColor = tw`bg-gray-100`,
  textCss = tw`text-white`,
}) => {
  const { cookieConsent, setCookieConsent } = useSession();

  const cookieConsentComponent = () => (
    <Container
      css={tw`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50`}
      onClick={() => {
        setCookieForDays(
          CookieKeys.CookieConsent,
          CookieValues.AcceptedEssential,
          CookieDuration.Week
        );
        setCookieConsent(CookieValues.Accepted);
      }}
    >
      <Container css={tw`bg-transparent`}>
        <ContentWithPaddingXl>
          <PrimaryBackgroundContainer css={backgroundColor}>
            <Row>
              <TextContainer>
                <Text css={textCss}>{text}</Text>
              </TextContainer>
              <LinksContainer>
                <PrimaryLink
                  onClick={(e) => {
                    e.stopPropagation();
                    setCookie(
                      CookieKeys.CookieConsent,
                      CookieValues.Accepted,
                      CookieDuration.Day
                    );
                    setCookieConsent(CookieValues.Accepted);
                  }}
                >
                  {primaryLinkText}
                </PrimaryLink>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    setCookie(
                      CookieKeys.CookieConsent,
                      CookieValues.Rejected,
                      CookieDuration.Minute10
                    );
                    setCookieConsent(CookieValues.Rejected);
                    ClearCache();
                  }}
                >
                  {secondaryLinkText}
                </Link>
              </LinksContainer>
            </Row>
            <DecoratorBlobContainer>
              <DecoratorBlob1 />
              <DecoratorBlob2 />
            </DecoratorBlobContainer>
          </PrimaryBackgroundContainer>
        </ContentWithPaddingXl>
      </Container>
    </Container>
  );

  return <>{cookieConsent === null ? cookieConsentComponent() : <></>}</>;
};
