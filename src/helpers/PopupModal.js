import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import ReactModalAdapter from "./ReactModalAdapter.js";

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { useSession } from "providers/SessionProvider.js";

const modelSizes = {
  large: tw`  bg-white z-50 w-[100vw] h-[100vh]  px-4 py-4  `,
  medium: tw`  w-[100%]  z-50 lg:w-[60%] h-[80%]   `,
  small: tw`    w-[80%] h-[70%] lg:h-[80%]  lg:w-[30%]   `,
};

const StyledModal = styled(ReactModalAdapter)`
  &.popupModal__overlay {
    ${tw`fixed inset-0 z-50  `}

    ${(props) => {
      return props.backgroundBlur ? tw`` : tw`backdrop-blur-sm`;
    }}
  }
  &.popupModal__content {
    ${tw`m-auto  absolute inset-0 outline-none  `}

    ${(props) => {
      if (props.size === "small") {
        return modelSizes.small;
      } else if (props.size === "large") {
        return modelSizes.large;
      } else {
        return modelSizes.medium;
      }
    }}
  }
`;

const CloseModalButton = tw.button`   hocus:text-primary-500 hocus:bg-red-500 `;

export const ClosePopupControl = ({ setShowPopup }) => {
  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <CloseModalButton onClick={hidePopup}>
      <CloseIcon tw="w-5 h-5 " />
    </CloseModalButton>
  );
};

export default ({
  children,
  closeOnOverlay,
  showPopup,
  size,
  setShowPopup,
}) => {
  const { ClosePopupOnSubmit } = useSession();
  const toggleModal = () => setShowPopup(!showPopup);

  if (ClosePopupOnSubmit) {
    setShowPopup(false);
  }

  return (
    <StyledModal
      size={size}
      backgroundBlur={closeOnOverlay}
      closeTimeoutMS={300}
      className="popupModal"
      isOpen={showPopup}
      shouldCloseOnOverlayClick={closeOnOverlay}
      onRequestClose={toggleModal}
    >
      {children}
    </StyledModal>
  );
};
