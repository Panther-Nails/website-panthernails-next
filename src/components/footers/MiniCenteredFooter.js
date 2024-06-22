import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/pnlogo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-64`;

const Divider = tw.div`my-4 border-b-2 border-gray-300 w-full`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10 bg-gray-900`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default ({ properties, children, index, data }) => {
  var inputLinks = JSON.parse(properties.inputLinks);
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={properties.logo ? properties.logo : logo} />
          </LogoContainer>
          <LinksContainer>
            {inputLinks.map((post, index) => (
              <Link href={post.link} key={index}>
                {post.title}
              </Link>
            ))}
          </LinksContainer>
          <Divider />
          <SocialLinksContainer>
            <SocialLink href={properties.facebookIconUrl}>
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={properties.twitterIconUrl}>
              <TwitterIcon />
            </SocialLink>
            <SocialLink href={properties.youtubeIconUrl}>
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>{properties.copyrightText}</CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
