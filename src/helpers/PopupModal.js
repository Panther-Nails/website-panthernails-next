import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import ReactModalAdapter from "./ReactModalAdapter.js";

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { useSession } from "providers/SessionProvider.js";

const StyledModal = styled(ReactModalAdapter)`
  &.popupModal__overlay {
    ${tw`fixed inset-0 z-50 backdrop-blur-sm`}
  }
  &.popupModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-lg h-[90%] absolute inset-0 flex justify-center items-center rounded-lg outline-none`}
  }
  .content {
    ${tw`lg:m-16`}
  }
`;

const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500 hocus:bg-red-500 `;

const Popup = styled.div((props) => [
  props.size === "small"
    ? tw`fixed top-0 left-0 rounded  z-50 w-[90%] h-[60%] lg:h-[70%]  translate-x-[5%] translate-y-[20%] lg:translate-y-[10%] lg:w-[30%] lg:translate-x-[120%]   pb-4  flex flex-col    `
    : tw`fixed top-0 left-0 rounded bg-red-500  z-50 w-[100%] h-[100%]  overflow-scroll`,
  // `background-color:${props.bgColor};
  // ::-webkit-scrollbar {
  //     display: none;
  //   }
  // `,
]);

export default ({ children }) => {
  const { showPopup, setShowPopup, shouldCloseOnOverlayClick } = useSession();

  const toggleModal = () => setShowPopup(!showPopup);

  return (
    <StyledModal
      closeTimeoutMS={300}
      className="popupModal"
      isOpen={showPopup}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <CloseModalButton onClick={toggleModal}>
        <CloseIcon tw="w-6 h-6 " />
      </CloseModalButton>
      <div className="content">{children}</div>
    </StyledModal>
  );
};
