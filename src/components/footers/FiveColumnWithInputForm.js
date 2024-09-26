import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/pnlogo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";

const Container = tw.div`relative bg-siteColors-textColor text-gray-100 -mb-8  px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10 `;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;
const LogoLink = tw.a`border-transparent transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between mb-10`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-80`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 text-black px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const SocialImg = tw.img`w-8`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default ({ index, children, properties }) => {
  var sections = JSON.parse(properties.inputs || "[]");
  var socialLinks = JSON.parse(properties.socialLinks || "[]");

  return (
    <Container>
      <Content>
        <SixColumns>
          {sections.map((section, index) => (
            <Column>
              <ColumnHeading>{section.title}</ColumnHeading>
              <LinkList>
                {section.menuLinks.map((menulink, index) => (
                  <LinkListItem>
                    <Link href={menulink.link}>{menulink.title}</Link>
                  </LinkListItem>
                ))}
              </LinkList>
            </Column>
          ))}
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm
                method="post"
                action="mailto:subscribe@panthernails.com?subject=Subscribe"
              >
                <Input
                  type="email"
                  name="body"
                  placeholder="Your Email Address"
                />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoLink href="/" placeholder="Back to Home">
              <LogoImg src={LogoImage} />
            </LogoLink>
          </LogoContainer>
          <CopywrightNotice>
            &copy; {new Date().getFullYear()} Panther Nails Technologies Pvt
            Ltd, All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            {socialLinks.map((socialLink, k) => {
              return (
                <SocialLink href={socialLink.link} key={k} target="_blank">
                  <SocialImg src={socialLink.icon} />
                </SocialLink>
              );
            })}
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
