import React, { useEffect, useState } from "react";
import { motion, useAnimation, useCycle, AnimatePresence } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SearchIcon } from "feather-icons/dist/icons/search.svg";

import { useSession } from "providers/SessionProvider.js";
import { setPageMetaData } from "services/useExecuteQuerySWR.js";
import { ExecuteQuery } from "services/APIService.js";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import pnlogo from "../../images/pnlogo.svg";
import LanguageDropdown from "./LanguageDropdown.js";
import SearchBoxControl from "../../providers/SearchBoxControl.js";
import { ExecuteQuery } from "services/APIService.js";

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

export const DropdownMenu = styled.div`
  ${tw`absolute bg-white shadow-lg rounded-lg z-10 w-auto px-4 py-4 overflow-scroll gap-4 pr-0`}
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); /* For larger screens, 4 items in a row */

  transform: translateX(-40%);
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* For mobile devices, 2 items in a row */
  }
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 20px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

// Wrapper for the individual product item with responsive layout
export const DropdownItem = styled.div`
  ${tw`flex flex-col items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-in-out rounded-lg border-2 border-gray-300 md:w-40 text-center justify-between`}

  &:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const DropdownItemImage = styled.img`
  ${tw`w-32 h-32 object-cover rounded-lg transition-transform duration-300 ease-in-out`}

  &:hover {
    transform: scale(1.1);
  }
`;

export const DropdownItemText = styled.p`
  ${tw`font-semibold text-sm text-gray-800 transition-all duration-200 ease-in-out hover:text-primary-500`}
`;

// Motion wrapper for animation
const DropdownWrapper = motion(DropdownMenu);

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
    notificationText,
    notificationType,
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
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);
  const [dropdownContent, setDropdownContent] = useState(null);
  const [data, setData] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsIncreasing(true);
      } else if (currentScrollY === 0) {
        setIsIncreasing(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    ExecuteQuery({
      ActionName: "WSM.GMst_SelectFewFromLinkAndLinkLanguages",
      ParameterJSON: "{}",
    }).then((response) => {
      if (response) {
        if (response.message === "Successfull" && response.items.length > 0) {
          setData(response);
        }
      }
    });
    feather.replace();
  }, [languageObject?.LanguageID]);

  useEffect(() => {
    if (data) {
      const location = window.location.pathname;
      const isCurrentLink = data?.items?.find((item) => {
        return item.LinkURL.toUpperCase() === location.toUpperCase();
      });

      if (
        isCurrentLink &&
        isCurrentLink.LinkURL.toUpperCase() === location.toUpperCase()
      ) {
        setPageMetaData(isCurrentLink.HeadMetaJSON);
      }
    }
  }, [data, window.location.pathname, languageObject?.LanguageID]);

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
  const navigate = useNavigate();

  const _redirect = (navigateURL) => {
    navigate(navigateURL);
  };

  const defaultLogoLink = (
    <div onClick={() => _redirect("/")}>
      <LogoLink navPosition={isIncreasing}>
        <img src={pnlogo} alt="logo" />
      </LogoLink>
    </div>
  );

  const handleMouseEnter = (link, index) => {
    if (link.LinkJSON) {
      setDropdownContent(link.LinkJSON);
      setHoveredLinkIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setDropdownContent(null);
    setHoveredLinkIndex(null);
  };

  const menuLinks = (
    <>
      <NavLinks key={1} style={{ display: "flex" }}>
        {data?.items?.map((link, index) => {
          return (
            <>
              {link.LinkVisible && (
                <div
                  key={index}
                  onMouseEnter={() =>
                    !isMobile && handleMouseEnter(link, index)
                  }
                  onMouseLeave={handleMouseLeave}
                  style={{ position: "relative" }}
                >
                  <NavLinkWrapper
                    onClick={() => {
                      toggleNavbar();
                      handleMouseLeave();
                    }}
                    navPosition={isIncreasing}
                  >
                    <NavLink to={link.LinkURL}>{link.LinkHeadingText}</NavLink>
                  </NavLinkWrapper>

                  {dropdownContent && hoveredLinkIndex === index && (
                    <DropdownWrapper
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dropdownContent.map((subLink, subIndex) => {
                        const properties = JSON.parse(subLink.LinkPropertyJSON);
                        return (
                          <DropdownItem
                            key={subIndex}
                            onClick={() => {
                              _redirect(subLink.LinkURL);
                              handleMouseLeave();
                            }}
                          >
                            <DropdownItemImage
                              src={properties?.productResource.imageSrc}
                              alt={subLink.LinkHeadingText}
                            />
                            <DropdownItemText>
                              {subLink.LinkHeadingText}
                            </DropdownItemText>
                          </DropdownItem>
                        );
                      })}
                    </DropdownWrapper>
                  )}
                </div>
              )}
            </>
          );
        })}
      </NavLinks>
      <div
        css={tw`flex flex-col lg:flex-row lg:gap-5 items-center justify-center`}
      >
        <>
          {isSearchVisible && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SearchBoxControl />
              </motion.div>
            </AnimatePresence>
          )}
          <div css={tw`relative m-auto flex items-center justify-center`}>
            {isSearchVisible ? (
              <motion.div whileTap={{ scale: 0.9 }} css={tw`cursor-pointer`}>
                <CloseIcon onClick={() => setIsSearchVisible(false)} />
              </motion.div>
            ) : (
              <motion.div whileTap={{ scale: 0.9 }} css={tw`cursor-pointer`}>
                <SearchIcon onClick={() => setIsSearchVisible(true)} />
              </motion.div>
            )}
          </div>
        </>
        <div css={tw`relative flex items-center justify-center`}>
          <LanguageDropdown />
        </div>
      </div>
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
