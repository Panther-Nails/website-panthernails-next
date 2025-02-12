import React, { useEffect, useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import pnlogo from "../../images/pnlogo.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import { useSession } from "providers/SessionProvider.js";
import {
  setPageMetaData,
  useExecuteQuerySWR,
} from "services/useExecuteQuerySWR.js";
import LanguageDropdown from "./LanguageDropdown.js";

const Container = styled.div((props) => [
  tw`relative sticky top-0 z-50 bg-white text-sm`,
]);

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

export const NavLinkWrapper = styled.div((props) => [
  tw` inline-block
   my-2   lg:my-0 
  font-semibold tracking-wide transition duration-700
  border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`,
  (props = [
    props.navPosition
      ? tw`text-xs duration-700 lg:mx-8`
      : tw`text-sm duration-700 lg:mx-5`,
  ]),
]);

export const PrimaryLink = tw(NavLink)`
  lg:mx-0   px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${(props) => [
      props.navPosition
        ? tw`w-40 ml-5 lg:ml-20 mr-3 my-2 duration-700`
        : tw`w-64 ml-5 lg:ml-20 mr-3 my-3 duration-700`,
    ]}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between pt-2 `;
export const NavToggle = tw.button`
  lg:hidden pr-5 z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center pr-0 lg:pr-20 
`;

export const NotificationBarPullout = styled.div((props) => [
  tw`top-0 border-b z-50 flex justify-between items-center p-1 lg:px-20 font-semibold`,
  backgroundColor[props.type || "none"],
]);

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

const backgroundColor = {
  success: tw`bg-green-500`,
  warning: tw`bg-yellow-400`,
  danger: tw`bg-red-500 text-white`,
  info: tw`bg-primary-400 text-white `,
  none: tw``,
};

export default ({
  logoLink,
  className,
  collapseBreakpointClass = "lg",
  links,
}) => {
  const {
    hasNotificationSeen,
    setHasNotificationSeen,
    languageObject,
    setLanguageObject,
    notificationText,
    notificationType,
    languages,
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

  const [scrollCounter, setScrollCounter] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const { data } = useExecuteQuerySWR(`${languageObject?.LanguageID}`, {
    ActionName: "WSM.GMst_SelectFewFromLinkAndLinkLanguages",
    ParameterJSON: "{}",
  });

  useEffect(() => {
    if (data) {
      const location = window.location.pathname;
      const isCurrentLink = data.items.find((item) => {
        return item.LinkURL.toUpperCase() === location.toUpperCase();
      });

      if (
        isCurrentLink &&
        isCurrentLink.LinkURL.toUpperCase() === location.toUpperCase()
      ) {
        setPageMetaData(isCurrentLink.HeadMetaJSON);
      }
    }
  }, [data, window.location.pathname]);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollCounter(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (scrollCounter > 0) {
      setIsIncreasing(true);
    } else {
      setIsIncreasing(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [scrollCounter]);

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
      {/* <NavLinkWrapper>
        <NavLink to="/blog">Blog</NavLink>
      </NavLinkWrapper> */}
      <NavLinkWrapper>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavLinkWrapper>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink to="/" navPosition={isIncreasing}>
      <img src={pnlogo} alt="logo" />
    </LogoLink>
  );

  const menuLinks = (
    <>
      <NavLinks key={1}>
        {data?.items?.map((link, index) => {
          return (
            <>
              {link.LinkVisible && (
                <NavLinkWrapper
                  onClick={toggleNavbar}
                  key={index}
                  navPosition={isIncreasing}
                >
                  <NavLink to={link.LinkURL}>{link.LinkHeadingText}</NavLink>
                </NavLinkWrapper>
              )}
            </>
          );
        })}
      </NavLinks>
      <LanguageDropdown />
    </>
  );

  logoLink = logoLink || defaultLogoLink;
  links = menuLinks || defaultLinks;

  const handleCloseNotification = (e) => {
    setHasNotificationSeen(true);
  };

  return (
    <Container>
      <Header className={className || "header-light"}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          {links}
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
      {!hasNotificationSeen && notificationText?.length > 0 ? (
        <NotificationBarPullout type={notificationType}>
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
