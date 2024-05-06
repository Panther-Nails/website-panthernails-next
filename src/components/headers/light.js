import React, { useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { NavLink as RouterLink } from "react-router-dom";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import pnlogo from "../../images/pnlogo.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import { Languages, useSession } from "providers/SessionProvider.js";

const Container = tw.div` relative sticky top-0 z-50 bg-white`;

const Header = tw.header`border-b flex justify-between items-center  `;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = styled(RouterLink)`
  text-sm my-2 lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const NavLinkWrapper = tw.div`
  inline-block
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
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
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

export const SiteOptionToggleButton = tw.button`mr-5 z-20 focus:outline-none hocus:text-primary-500 transition duration-300`;

export const SiteOptionsContainer = tw.nav`flex flex-1 items-center justify-between`;

export const LanguageSelectionLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 w-1/2 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const LanguageText = styled.div`font-bold hover:font-black`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  className,
  collapseBreakpointClass = "lg",
  links,
}) => {
  const {
    hasNotificationSeen,
    setHasNotificationSeen,
    theme,
    setTheme,
    language,
    setLanguage,
    languageObject,
    setLanguageObject,
  } = useSession();

  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */

  const [notificationVisible, setNotificationVisible] = useState(true);
  const [notificationText, setNotificationText] = useState("");

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLinkWrapper>
        <NavLink to="/about">About Us</NavLink>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink to="/pages/products/loyalty">Rasik Loyalty Platform</NavLink>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink to="/pages/products/clm">Contract Labour Management</NavLink>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink to="/blog">Blog</NavLink>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavLinkWrapper>
    </NavLinks>,
  ];

  const siteOptions = [
    <NavLinks key={2}>
      {SiteOptions(
        theme,
        setTheme,
        language,
        setLanguage,
        languageObject,
        setLanguageObject
      )}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink to="/">
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
          {links}
          {/* {siteOptions} */}
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

export function useAnimatedSiteOptionsToggler() {
  const [showSiteOptions, setShowSiteOptions] = useState(false);
  const [x, cycleX] = useCycle("50%", "250%");
  const animation = useAnimation();

  const toggleSiteOptions = () => {
    setShowSiteOptions(!showSiteOptions);
    animation.start({ x: x, display: "block" });
    cycleX();
  };

  return { showSiteOptions, animation, toggleSiteOptions };
}

const SiteOptions = (
  theme,
  setTheme,
  language,
  setLanguage,
  languageObject,
  setLanguageObject
) => {
  const { showSiteOptions, animation, toggleSiteOptions } =
    useAnimatedSiteOptionsToggler();
  return (
    <SiteOptionsContainer>
      <LanguageSelectionLinks
        initial={{ x: "250%", display: "none" }}
        animate={animation}
      >
        <NavLinks key={1}>
          {Languages.map((lang, index) => {
            return (
              <NavLinkWrapper
                key={index}
                onClick={() => {
                  setLanguage(lang.name);
                  setLanguageObject({ ...lang });
                  toggleSiteOptions();
                }}
              >
                {lang.name?.toLocaleUpperCase()} ({lang.nameUnicode})
              </NavLinkWrapper>
            );
          })}
        </NavLinks>
      </LanguageSelectionLinks>
      <SiteOptionToggleButton
        onClick={toggleSiteOptions}
        className={showSiteOptions ? "open" : "closed"}
      >
        <NavLinkWrapper>
          <LanguageText title={languageObject.nameUnicode}>
            {languageObject.nameUnicode} {language}
          </LanguageText>
        </NavLinkWrapper>
      </SiteOptionToggleButton>
    </SiteOptionsContainer>
  );
};
