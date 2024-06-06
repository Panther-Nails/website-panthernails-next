import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import pnlogo from "../../images/pnlogo.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import { useSession } from "providers/SessionProvider.js";

const Container = tw.div` relative sticky bottom-0 z-50 bg-white`;

const Header = tw.header`border-t flex justify-between items-center  `;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-sm my-2 lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0   px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-64 ml-5 lg:ml-20 mr-3 my-5 `}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden mr-5 z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed bottom-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center lg:mr-20 
`;

export const NotificationBarPullout = tw.div`top-0 border-b z-50   
  flex justify-between items-center p-5 lg:px-20 `;

export const NotificationText = tw.p` p-2`;
export const NotificationActions = tw.div`font-bold hover:bg-red-500 p-2`;

export default ({
  logoLink,
  className,
  collapseBreakpointClass = "lg",
  links,
}) => {
  const { hasNotificationSeen, setHasNotificationSeen } = useSession();

  const [notificationVisible, setNotificationVisible] = useState(true);
  const [notificationText, setNotificationText] = useState("");

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/pages/products/loyalty">Rasik Loyalty Platform</NavLink>
      <NavLink to="/pages/products/clm">Contract Labour Management</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={pnlogo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  const handleCloseNotification = (e) => {
    setNotificationVisible(false);
    setHasNotificationSeen(true);
  };

  return (
    <Container>
      <Header className={className || "header-light"}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          <div css="bg-gray-200">
            <input type="text" css="w-6 h-2 m-3 p-2 bg-gray-200" />
          </div>
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          {logoLink}
          <MobileNavLinks
            initial={{ x: "150%", display: "none" }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            {links}
          </MobileNavLinks>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}
          >
            {showNavLinks ? (
              <CloseIcon tw="w-6 h-6" />
            ) : (
              <MenuIcon tw="w-6 h-6" />
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
      {!hasNotificationSeen &&
      notificationVisible &&
      notificationText?.length > 0 ? (
        <NotificationBarPullout type="success">
          <NotificationText>{notificationText}</NotificationText>
          <NotificationActions>
            <CloseIcon tw="w-6 h-6" onClick={handleCloseNotification} />
          </NotificationActions>
        </NotificationBarPullout>
      ) : (
        <></>
      )}
    </Container>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
