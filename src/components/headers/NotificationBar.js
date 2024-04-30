import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import { useSession } from "providers/SessionProvider.js";

const Container = tw.div` bg-white`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-sm my-1 lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0   px-8 py-1 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-64 ml-5 lg:ml-20 mr-3 my-2 `}
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
  flex justify-between items-center p-1 lg:px-20 `;

export const NotificationText = tw.p` p-1`;
export const NotificationActions = tw.div`font-bold hover:bg-red-500 p-1`;

export default ({ type = "info" }) => {
  const { hasNotificationSeen, setHasNotificationSeen } = useSession();

  const [notificationVisible, setNotificationVisible] = useState(true);
  const [notificationText, setNotificationText] = useState(
    "Safeguard photos, documents, phones, tablets, and computers with features designed to secure your digital life."
  );

  const NotificationTextRef = useRef();

  const handleCloseNotification = (e) => {
    setNotificationVisible(false);
    setHasNotificationSeen(true);
  };

  const types = {
    info: tw`bg-white`,
    "info-b": tw`bg-white border-4 border-blue-300`,
    success: tw`bg-green-700 text-white`,
    "success-b": tw`bg-white  border-4 border-green-500`,
    warning: tw`bg-yellow-500 `,
    danger: tw`bg-red-500 text-white`,
  };

  return (
    <>
      {!hasNotificationSeen &&
      notificationVisible &&
      notificationText?.length > 0 ? (
        <Container css={types[type]}>
          <NotificationBarPullout type="success">
            <NotificationText id="NotificationText">
              {notificationText}
            </NotificationText>
            <NotificationActions>
              <CloseIcon tw="w-6 h-6" onClick={handleCloseNotification} />
            </NotificationActions>
          </NotificationBarPullout>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
